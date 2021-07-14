import React from 'react';

import { render } from '@testing-library/react';
import TextInput from './TextInput';
import { TextInputProps } from './TextInput.types';
describe('Test Component', () => {
  let props: TextInputProps;
  beforeEach(() => {
    props = { };
  });
  const renderComponent = () => render(<TextInput {...props} />);
  it('should render correctly', () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId('TextInput');
    expect(component).toHaveClass('foo-bar');
  });
});
