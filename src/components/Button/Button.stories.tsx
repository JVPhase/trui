import React from 'react';

import Button from './Button';

export default {
  title: 'trui/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  text: 'Button1',
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: 'Button2',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  text: 'Button3',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  text: 'Button4',
};
