import React from 'react';
import { render } from '@testing-library/react';

import Button from './Button';
import { ButtonProps } from './Button.types';

describe('Button Component', () => {
  let props: ButtonProps;

  beforeEach(() => {
    props = {
      text: 'primary',
      primary: true,
      size: 'medium'
    };
  });

  const renderComponent = () => render(<Button {...props} />);

  it('should have primary className with default props', () => {
    const { getByTestId } = renderComponent();

    const Button = getByTestId('Button');

    expect(Button).toHaveClass('trui-button--primary');
  });

  it('should have secondary className with theme set as secondary', () => {
    props.primary = false;
    const { getByTestId } = renderComponent();

    const Button = getByTestId('Button');

    expect(Button).toHaveClass('trui-button--secondary');
  });
});