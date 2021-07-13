// codebeat:disable
require('colors');
const fs = require('fs');
const templates = require('./templates');

const componentName = process.argv[2];

if (!componentName) {
  console.error('Please supply a valid component name'.red); // eslint-disable-line no-console
  process.exit(1);
}
console.log('Creating Component Templates with name: ' + componentName); // eslint-disable-line no-console

const componentDirectory = `./src/components/${componentName}`;

if (fs.existsSync(componentDirectory)) {
  console.error(`Component ${componentName} already exists.`.red); // eslint-disable-line no-console
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

console.log('Successfully created component under: ' + componentDirectory.green); // eslint-disable-line no-console
// codebeat:enable
