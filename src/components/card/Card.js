import React from 'react';

import './card.css';

const Card = ({ data }) => {
  return (
    <>
      <div className='card-img-cnt'>
        <img src={data.photo} className='img' alt='card-image' />
      </div>
      <div className='card-dtls'></div>

      <div className='card-title'>{data.title}</div>
    </>
  );
};

export default Card;
