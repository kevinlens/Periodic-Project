import React from 'react';
import './Sub_Navigation.scss';
import { Link } from 'react-router-dom';

// Needed for seeing the 'history object' of component with serveral properties including location containing 'pathname'
import { withRouter } from 'react-router-dom';

//Destructuring history from props
const Sub_Navigation = ({ history }) => {
  return (
    <section>
      {/*///////////////////////////////////////////////////////////////////
////////// SUB-NAVIGATION  */}
      {(history.location.pathname.includes('/Home')) ? (
        <nav className='navigation'>
          <ul className='navigation-list'>
            <li className='navigation-list__item'>
              <Link to='/Home/Section' className='navigation-list__link'>
                Section
              </Link>
            </li>

            <li className='navigation-list__item'>
              <Link to='/Home/Section' className='navigation-list__link'>
                Section
              </Link>
            </li>

            <li className='navigation-list__item'>
              <Link to='/Home/Section' className='navigation-list__link'>
                Section
              </Link>
            </li>

            <li className='navigation-list__item'>
              <Link to='/Home/Section' className='navigation-list__link'>
                Section
              </Link>
            </li>

            <li className='navigation-list__item'>
              <Link to='/Home/Section' className='navigation-list__link'>
                Section
              </Link>
            </li>
          </ul>
        </nav>
      ) : (history.location.pathname.includes('/Activity')) ? (
        <nav className='navigation'>
          <ul className='navigation-list'>
            <li className='navigation-list__item'>
              <Link to='/Activity/Section' className='navigation-list__link'>
                Section
              </Link>
            </li>

            <li className='navigation-list__item'>
              <Link to='/Activity/Section' className='navigation-list__link'>
                Section
              </Link>
            </li>

            <li className='navigation-list__item'>
              <Link to='/Activity/Section' className='navigation-list__link'>
                Section
              </Link>
            </li>

            <li className='navigation-list__item'>
              <Link to='/Activity/Section' className='navigation-list__link'>
                Section
              </Link>
            </li>

            <li className='navigation-list__item'>
              <Link to='/Activity/Section' className='navigation-list__link'>
                Section
              </Link>
            </li>
          </ul>
        </nav>
      ) : (history.location.pathname.includes('/Users')) ? (
        <nav className='navigation'>
          <ul className='navigation-list'>
            <li className='navigation-list__item'>
              <Link to='/Users/Section' className='navigation-list__link'>
                Section
              </Link>
            </li>

            <li className='navigation-list__item'>
              <Link to='/Users/Section' className='navigation-list__link'>
                Section
              </Link>
            </li>

            <li className='navigation-list__item'>
              <Link to='/Users/Section' className='navigation-list__link'>
                Section
              </Link>
            </li>

            <li className='navigation-list__item'>
              <Link to='/Users/Section' className='navigation-list__link'>
                Section
              </Link>
            </li>

            <li className='navigation-list__item'>
              <Link to='/Users/Section' className='navigation-list__link'>
                Section
              </Link>
            </li>
          </ul>
        </nav>
      ) : (history.location.pathname.includes('/Configuration')) ? (
        <nav className='navigation'>
          <ul className='navigation-list'>
            <li className='navigation-list__item'>
              <Link to='/Configuration/Providers' className='navigation-list__link'>
                providers
              </Link>
            </li>

            <li className='navigation-list__item'>
              <Link to='/Configuration/Bookables' className='navigation-list__link'>
                bookables
              </Link>
            </li>

            <li className='navigation-list__item'>
              <Link to='/Configuration/Resources' className='navigation-list__link'>
                Resources
              </Link>
            </li>

            <li className='navigation-list__item'>
              <Link to='/Configuration/Forms' className='navigation-list__link'>
                Forms
              </Link>
            </li>

            <li className='navigation-list__item'>
              <Link to='/Configuration/Messages' className='navigation-list__link'>
                Messages
              </Link>
            </li>
          </ul>
        </nav>
      ) : (history.location.pathname.includes('/Settings')) ? (
        <nav className='navigation'>
          <ul className='navigation-list'>
            <li className='navigation-list__item'>
              <Link to='/Settings/Section' className='navigation-list__link'>
                Section
              </Link>
            </li>

            <li className='navigation-list__item'>
              <Link to='/Settings/Section' className='navigation-list__link'>
                Section
              </Link>
            </li>

            <li className='navigation-list__item'>
              <Link to='/Settings/Section' className='navigation-list__link'>
                Section
              </Link>
            </li>

            <li className='navigation-list__item'>
              <Link to='/Settings/Section' className='navigation-list__link'>
                Section
              </Link>
            </li>

            <li className='navigation-list__item'>
              <Link to='/Settings/Section' className='navigation-list__link'>
                Section
              </Link>
            </li>
          </ul>
        </nav>
      ) : (
        <div></div>
      )}
    </section>
  );
};

export default withRouter(Sub_Navigation);
