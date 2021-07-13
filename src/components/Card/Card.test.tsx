import React from 'react';
import { render } from '@testing-library/react';

import Card from './Card';
import { CardProps } from './Card.types';

describe('Card Component', () => {
  let props: CardProps;

  beforeEach(() => {
    props = { };
  });

  const renderComponent = () => render(<Card {...props} />);

  it('should render correctly', () => {
    const { getByTestId } = renderComponent();

    const Card = getByTestId('Card');

    expect(Card).toHaveClass('trui-card');
  });
});
