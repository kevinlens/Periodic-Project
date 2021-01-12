import React, { useState, useEffect } from 'react';
import './Navigation.scss';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
const Navigation = ({ history }) => {
  //Set default to 0 because the configuration 'resources' page is what we are focusing on right now
  const [activeColor, setActiveColor] = useState({ active: 0 });

  const toggle = (position) => {
    setActiveColor({ active: position });
  };

  const myColor = (position) => {
    if (activeColor.active === position) {
      return '#4a4a4a';
    }
    return '';
  };

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
        <ul className='navigation-list'>
          <li className='navigation-list__item'>
            <Link
              to='/Home/Section0'
              className='navigation-list__link'
              style={{ color: myColor(1) }}
              onClick={() => toggle(1)}
            >
              Home
            </Link>
          </li>

          <li className='navigation-list__item'>
            <Link
              to='/Activity/Section0'
              className='navigation-list__link'
              style={{ color: myColor(2) }}
              onClick={() => toggle(2)}
            >
              Activity
            </Link>
          </li>

          <li className='navigation-list__item'>
            <Link
              to='/Users/Section0'
              className='navigation-list__link'
              style={{ color: myColor(3) }}
              onClick={() => toggle(3)}
            >
              Users
            </Link>
          </li>

          <li className='navigation-list__item'>
            {/* We are assuming that when we click on configuration, the default section of the configuration's page should be shown, this being 'resources' */}
            <Link
              to='/Configuration/Resources'
              className='navigation-list__link'
              style={{ color: myColor(0) }}
              onClick={() => toggle(0)}
            >
              Configuration
            </Link>
          </li>

          <li className='navigation-list__item'>
            <Link
              to='/Settings/Section0'
              className='navigation-list__link'
              style={{ color: myColor(4) }}
              onClick={() => {
                toggle(4);
              }}
            >
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default withRouter(Navigation);
