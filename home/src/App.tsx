import React from 'react';
import '../src/styles/App.css';

//const Destinations = React.lazy(() => import("remote1/Destinations"));
// const Receivers = React.lazy(() => import("remote1/Receivers"));

import Destinations from 'remote1/Destinations';
import Receivers from 'remote1/Receivers';
import InputBox from 'remote2/InputBox';

// const css = require("../src/styles/App.css");

// Hola

const App = () => (
  <>
    <div className='App'>
      <h1>HOST</h1>
      <Destinations />
      <Receivers />
      <InputBox />
    </div>
  </>
);

export default App;
