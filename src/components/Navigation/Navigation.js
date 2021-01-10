import React from 'react';
import './Navigation.scss';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <section>
{/*///////////////////////////////////////////////////////////////////
////////// MAIN-NAVIGATION  */}
      <nav className='navigation'>
        {/* We are assuming that when we click on any link besides 'configuration' the default page should be 'Section'*/}
        <ul className='navigation-list'>
          <li className='navigation-list__item'>
            <Link to='/Home/Section' className='navigation-list__link'>
              Home
            </Link>
          </li>

          <li className='navigation-list__item'>
            <Link to='/Activity/Section' className='navigation-list__link'>
              Activity
            </Link>
          </li>

          <li className='navigation-list__item'>
            <Link to='/Users/Section' className='navigation-list__link'>
              Users
            </Link>
          </li>

          <li className='navigation-list__item'>
            {/* We are assuming that when we click on configuration the default section of configuration page that shows up will be 'resources' */}
            <Link
              to='/Configuration/Resources'
              className='navigation-list__link'
            >
              Configuration
            </Link>
          </li>

          <li className='navigation-list__item'>
            <Link to='/Settings/Section' className='navigation-list__link'>
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Navigation;
