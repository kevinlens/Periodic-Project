import React, { useState } from 'react';
import './Sub_Navigation.scss';

// Needed for seeing the 'history object' of component with serveral properties including location containing 'pathname'
import { withRouter } from 'react-router-dom';

//Broken up sections of the main sub navigation (Easy to read)
import Home from './Sections/Home';
import Activity from './Sections/Activity';
import Users from './Sections/Users';
import Configuration from './Sections/Configuration';
import Settings from './Sections/Settings';

//Destructuring history from props
const Sub_Navigation = ({ history }) => {
  // I chose to do it like this is because having background color on a select tab is a bit more complex than expected especially scenario based
  // This is the white background color on a selected link/section of a sub navigation page
  const [properties, setProperties] = useState({
    padding: '1.4rem 4.2rem 1rem 4.2rem',
    backgroundColor: 'white',
    color: '#5024F5',
    borderRadius: '5px',
    margin: '-4.2rem',
  });

  // Destructuring the white tab properties so I could pass it to other sub navigation sections easier
  const { padding, backgroundColor, color, borderRadius, margin } = properties;
  const whiteTab = { padding, backgroundColor, color, borderRadius, margin };

  return (
    <nav className='sub_navigation'>
      {/* There are definitely better ways to build this out, this was just the first thing that came to my mind. I was more focused on getting this project done,
    so basically finding out what works and what doesn't and if it could be easily built upon or updated in the future */}

      {/* BELOW: This makes sure the sub savigation displays even after the user navigates to a different path from ('/Configuration/Resources') to ('/Configuration/Bookables')
     but still keeping the root of the path ('/Configuration')*/}
      {/* (history.location.pathname.includes('/Configuration') */}

      {/*///////////////////////////////////////////////////////////////////
////////// SUB-NAVIGATION  */}
      {history.location.pathname.includes('/Home') ? (
        <Home whiteTab={whiteTab} />
      ) : history.location.pathname.includes('/Activity') ? (
        <Activity whiteTab={whiteTab} />
      ) : history.location.pathname.includes('/Users') ? (
        <Users whiteTab={whiteTab} />
      ) : history.location.pathname.includes('/Configuration') ? (
        <Configuration whiteTab={whiteTab} />
      ) : history.location.pathname.includes('/Settings') ? (
        <Settings whiteTab={whiteTab} />
      ) : (
        <div></div>
      )}
      
    </nav>
  );
};

export default withRouter(Sub_Navigation);
