import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

//SCREENS
import Resources from './screens/configuration/Resources'

//COMPONENTS
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Sub_Navigation from './components/Sub_Navigation/Sub_Navigation';


const App = () => {
  return (
    <Router>
          {/* Managing and maintaning everything is a lot easier when I break them up into each individual components */}
          {/* These three components should appear on every page we are on, serving as usuable header/navigation menus */}
          <Header />
          <Navigation />
          <Sub_Navigation />
          {/* These two should only appear based on the current location pathname */}
          <Route path='/Configuration/Resources' exact component={Resources} />
    </Router>
  );
};

export default App;
