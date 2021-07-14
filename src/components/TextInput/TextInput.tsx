import React from 'react';

import { TextInputProps } from './TextInput.types';
import './TextInput.scss';

const TextInput: React.FunctionComponent<TextInputProps> = (props: TextInputProps) => {
  return (
    <div
    data-testid="TextInput"
    className="foo-bar">
      New component here
    </div>
  );
};

export default TextInput;
