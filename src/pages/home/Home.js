import React from 'react';

import Nav from '../../components/nav/Nav';
import Card from '../../components/card/Card';

import { data } from '../../utils/Data';

const Home = () => {
  return (
    <div>
      <Nav />
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
  );
};

export default Home;
