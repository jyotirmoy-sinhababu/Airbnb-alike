import React, { useState } from 'react';

import Nav from '../../components/nav/Nav';
import Card from '../../components/card/Card';

import { data } from '../../utils/Data';

const Home = () => {
  const [inputData, setInputData] = useState('');

  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };
  console.log(inputData);
  return (
    <div>
      <Nav handleChange={handleChange} />
      <div className='home-card-cnt'>
        {' '}
        {data
          ? data.map((item) => {
              return (
                <div key={item.id}>
                  <Card data={item} />
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Home;
