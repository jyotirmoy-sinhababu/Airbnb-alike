import React from 'react';

import Nav from '../../components/nav/Nav';
import Card from '../../components/card/Card';

import { data } from '../../utils/Data';

const Home = () => {
  return (
    <div>
      <Nav />
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
