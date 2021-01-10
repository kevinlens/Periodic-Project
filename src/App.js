import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";


//SCREENS
import Resources from './screens/configuration/Resources'
import Bookables from './screens/configuration/Bookables'

//COMPONENTS
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Sub_Navigation from './components/Sub_Navigation/Sub_Navigation';


const App = () => {
  return (
    <Router>
          {/* Managing and maintaning everything is a lot easier when I break them up into each individual components */}
          <Header />
          <Navigation />
          <Sub_Navigation />
          <Route path='/Configuration/Resources' exact component={Resources} />
          <Route path='/Configuration/Bookables' exact component={Bookables} />
    </Router>
  );
};

export default App;
