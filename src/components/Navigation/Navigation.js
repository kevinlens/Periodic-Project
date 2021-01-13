import React, { useState, useEffect } from 'react';
import './Navigation.scss';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
const Navigation = ({ history }) => {
  const [properties, setProperties] = useState({
    color: '#4a4a4a',
  });

  const { color } = properties;
  const design = { color };

  useEffect(() => {
    history.push('/Configuration/Resources');
  }, []);

  return (
    <section>
      {/*///////////////////////////////////////////////////////////////////
////////// MAIN-NAVIGATION  */}
      <nav className='navigation'>
        {/* We are assuming that when we click on any link besides 'configuration' the link's default page should be 'Section'
        So adding on to the path of like '/Home' to 'Home/Section' */}
        {/* All the NavLink has the to="" set to their root section like (to="/Activity") because it helps the navigation menu figure out if 
        the sub_navigation belongs to the main navigation section page to then display the font color to a darker color  */}
        {/* There are definitely better ways to build this out, due to time constraits I've focus more on getting things done and afterwards going back and 
        see what I can improve on and make better. */}
        <ul className='navigation-list'>
          {history.location.pathname.includes('/Home') ? (
            <li className='navigation-list__item-tri'>
              <NavLink
                to='/Home'
                className='navigation-list__link'
                activeClassName='selected'
                activeStyle={design}
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
                activeStyle={design}
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
                activeStyle={design}
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
                activeStyle={design}
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
                activeStyle={design}
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
                activeStyle={design}
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
                activeStyle={design}
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
                activeStyle={design}
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
                activeStyle={design}
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
                activeStyle={design}
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
