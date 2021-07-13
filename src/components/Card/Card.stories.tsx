import React from 'react';

import Card from './Card';

export default {
  title: 'trui/Card',
  component: Card
};

const Template = (args) => <Card {...args} />;

export const Wrapper = Template.bind({});
Wrapper.args = {
  children: 'Тут карточка'
};
