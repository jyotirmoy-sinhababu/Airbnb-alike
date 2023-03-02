import React, { useState, useEffect } from 'react';

import Nav from '../../components/nav/Nav';
import Card from '../../components/card/Card';

import { data } from '../../utils/Data';

const Home = () => {
  const [filterList, setFilterList] = useState([]);

  const filterFunction = (inputData) => {
    if (data) {
      const filterData = data.filter((item) => {
        return (
          item.city.toLocaleLowerCase() == inputData.location.toLowerCase()
        );
      });
      setFilterList(filterData);
      console.log(inputData.location.toLowerCase());
      console.log(filterList);
    }
  };

  return (
    <div>
      <Nav filterFunction={filterFunction} />
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
