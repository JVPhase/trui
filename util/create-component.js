require('colors');
const fs = require('fs');
const templates = require('./templates');

const componentName = process.argv[2];

if (!componentName) {
  process.exit(1);
}

const componentDirectory = `./src/components/${componentName}`;

if (fs.existsSync(componentDirectory)) {
  process.exit(1);
}

fs.mkdirSync(componentDirectory);

const generatedTemplates = templates.map((template) => template(componentName));

generatedTemplates.forEach((template) => {
  fs.writeFileSync(
    `${componentDirectory}/${componentName}${template.extension}`,
    template.content
  );
});

fs.writeFileSync(
  `${componentDirectory}/index.ts`,
  `export { default } from './${componentName}';\n`
);

fs.readFile('./src/index.ts', 'utf8', function (err, data) {
  if (err) throw err;

  const result = data.replace(
    '\n// export',
    `import ${componentName} from './components/${componentName}';\n// export`
  ).replace(
    ' };',
    `, ${componentName} };`
  );
  fs.writeFile('./src/index.ts', result, 'utf8', function () {
    return false;
  });
});
