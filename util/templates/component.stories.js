module.exports = (componentName) => ({
  content: `import React from 'react';

import ${componentName} from './${componentName}';
export default {
    title: 'trui/${componentName}',
    component: ${componentName}
};
export const Template = () => <${componentName} />;
`,
  extension: `.stories.tsx`
});