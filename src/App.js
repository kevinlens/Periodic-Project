import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import Header from './components/Header/Header';
import Resources from './screens/configuration/Resources'
import Bookables from './screens/configuration/Bookables'

const App = () => {
  return (
    <Router>
          <Header />
          <Route path='/' exact component={Resources} />
          <Route path='/bookables' exact component={Bookables} />
    </Router>
  );
};

export default App;
