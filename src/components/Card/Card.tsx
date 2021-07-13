import React from 'react';
import './card.scss';

const Card: React.FunctionComponent = ({ children }) => {
  return (
    <div
    data-testid="Card"
    className={[
      'trui-card'
    ].join(' ')}
    >
      { children }
    </div>
  );
};

export default Card;
