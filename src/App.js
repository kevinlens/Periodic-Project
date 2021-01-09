import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import Header from './components/Header/Header';
import Resources from './screens/configuration/Resources'

const App = () => {
  return (
    <Router>
          <Header />
          <Route path='/' exact component={Resources} />
    </Router>
  );
};

export default App;
