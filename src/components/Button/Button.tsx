import React from 'react';

import { ButtonProps } from './Button.types';
import './button.scss';

const Button: React.FunctionComponent<ButtonProps> = (props: ButtonProps) => {
  const { text, primary, size } = props;
  return (
      <button
      type="button"
      data-testid="Button"
      className={[
        'trui-button',
        `trui-button--${ size || 'medium' }`,
        `trui-button--${ primary ? 'primary' : 'secondary' }`
      ].join(' ')}
      >
        { text || 'Button' }
      </button>
  );
};

export default Button;