module.exports = (componentName) => ({
  content: `import React from 'react';

import { ${componentName}Props } from './${componentName}.types';
import './${componentName}.scss';

const ${componentName}: React.FunctionComponent<${componentName}Props> = (props: ${componentName}Props) => {
  return (
    <div
    data-testid="${componentName}"
    className="foo-bar">
      New component here
    </div>
  );
};

export default ${componentName};
`,
  extension: `.tsx`
});