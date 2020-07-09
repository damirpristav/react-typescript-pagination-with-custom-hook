import React, { Fragment, useState, FC } from 'react';
import './App.css';

import countries from './data/countries.json';
import Header from './components/Header';
import Countries from './components/Countries';

const App: FC = () => {
  const [data] = useState(countries);

  return (
    <Fragment>
      <Header title="React/Typescript pagination using custom hook" />
      <div className="container px-2">
        <Countries data={data} itemsPerPage={10} />
        <Countries data={data} itemsPerPage={5} startFrom={25} />
      </div>
    </Fragment>
  );
}

export default App;
