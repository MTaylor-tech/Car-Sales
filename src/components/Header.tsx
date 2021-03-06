import React from 'react';

const Header = (props: any): JSX.Element => {
  return (
    <React.Fragment>
      <figure className="image is-128x128">
        <img src={props.car.image} alt={props.car.name} />
      </figure>
      <h2>{props.car.name}</h2>
      <p>Amount: ${props.car.price}</p>
    </React.Fragment>
  );
};

export default Header;
