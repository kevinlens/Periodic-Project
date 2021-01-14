import React, { useState, useEffect } from 'react';
import './Navigation.scss';

//The same as {Link} but has a feature to style the current Nav based on where the user is (URL wise)
import { NavLink } from 'react-router-dom';
//This is required in order with work with props.history and the URL in general
import { withRouter } from 'react-router-dom';

const Navigation = ({ history }) => {
  const designColor = { color: '#4a4a4a' };

  return (
    <section>
      {/*///////////////////////////////////////////////////////////////////
////////// MAIN-NAVIGATION  */}
      <nav className='navigation'>
        {/* There are definitely better ways to build out the nagivation, due to time constraits I've focus more on getting things done and afterwards going back and 
        see what I can improve on and refactor. */}
        {/* We are assuming that when we click on any link besides 'configuration', the link's default page should be 'Section'
        So '/Home' default page should be 'Home/Section' */}
        {/* All the NavLink has their to="" set to the root section like (to="/Activity"), this helps the navigation menu figure out if 
        the current sub navigation belongs to the main navigation section page so that it could change the font color to a darker color  */}
        <ul className='navigation-list'>
          {history.location.pathname.includes('/Home') ? (
            <li className='navigation-list__item-tri'>
              <NavLink
                to='/Home'
                className='navigation-list__link'
                activeClassName='selected'
                activeStyle={designColor}
              >
                Home
              </NavLink>
            </li>
          ) : (
            <li className='navigation-list__item'>
              <NavLink
                to='/Home'
                className='navigation-list__link'
                activeClassName='selected'
                activeStyle={designColor}
              >
                Home
              </NavLink>
            </li>
          )}

          {history.location.pathname.includes('/Activity') ? (
            <li className='navigation-list__item-tri'>
              <NavLink
                to='/Activity'
                className='navigation-list__link'
                activeClassName='selected'
                activeStyle={designColor}
              >
                Activity
              </NavLink>
            </li>
          ) : (
            <li className='navigation-list__item'>
              <NavLink
                to='/Activity'
                className='navigation-list__link'
                activeClassName='selected'
                activeStyle={designColor}
              >
                Activity
              </NavLink>
            </li>
          )}

          {history.location.pathname.includes('/Users') ? (
            <li className='navigation-list__item-tri'>
              <NavLink
                to='/Users'
                className='navigation-list__link'
                activeClassName='selected'
                activeStyle={designColor}
              >
                Users
              </NavLink>
            </li>
          ) : (
            <li className='navigation-list__item'>
              <NavLink
                to='/Users'
                className='navigation-list__link'
                activeClassName='selected'
                activeStyle={designColor}
              >
                Users
              </NavLink>
            </li>
          )}

          {history.location.pathname.includes('/Configuration') ? (
            <li className='navigation-list__item-tri'>
              {/* We are assuming that when we click on configuration, the default section of the configuration's page should be shown, this being 'resources' */}
              <NavLink
                to='/Configuration'
                className='navigation-list__link'
                activeClassName='selected'
                activeStyle={designColor}
              >
                Configuration
              </NavLink>
            </li>
          ) : (
            <li className='navigation-list__item'>
              <NavLink
                to='/Configuration'
                className='navigation-list__link'
                activeClassName='selected'
                activeStyle={designColor}
              >
                Configuration
              </NavLink>
            </li>
          )}

          {history.location.pathname.includes('/Settings') ? (
            <li className='navigation-list__item-tri'>
              <NavLink
                to='/Settings'
                className='navigation-list__link'
                activeClassName='selected'
                activeStyle={designColor}
              >
                Settings
              </NavLink>
            </li>
          ) : (
            <li className='navigation-list__item'>
              <NavLink
                to='/Settings'
                className='navigation-list__link'
                activeClassName='selected'
                activeStyle={designColor}
              >
                Settings
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </section>
  );
};

export default withRouter(Navigation);
