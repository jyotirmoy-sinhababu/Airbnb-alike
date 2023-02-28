import React from 'react';

import Nav from '../../components/nav/Nav';

import { data } from '../../utils/Data';

const Home = () => {
  return (
    <div>
      <Nav />
      {data
        ? data.map((item) => {
            return (
              <div key={item.id}>
                <img src={item.photo} alt='hotels' />
              </div>
            );
          })
        : null}
    </div>
  );
};

export default Home;
