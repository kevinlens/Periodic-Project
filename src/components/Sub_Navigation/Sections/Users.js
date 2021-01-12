import React from 'react';
import '../Sub_Navigation.scss';

// similar to <Link> but helps add styling attributes to elements based on it's to="/" url
import { NavLink } from 'react-router-dom';

const Users = ({design}) => {

  return (
    <ul className='sub_navigation-list'>
    <li className='sub_navigation-list__item'>
      <NavLink 
        to='/Users/Section0' 
        className='sub_navigation-list__link'
        activeClassName="selected"
        activeStyle={
          design
        }
      >
        Section
      </NavLink>
    </li>

    <li className='sub_navigation-list__item'>
      <NavLink 
        to='/Users/Section1' 
        className='sub_navigation-list__link'
        activeClassName="selected"
        activeStyle={
          design
        }
      >
        Section
      </NavLink>
    </li>

    <li className='sub_navigation-list__item'>
      <NavLink 
        to='/Users/Section2' 
        className='sub_navigation-list__link'
        activeClassName="selected"
        activeStyle={
          design
        }
      >
        Section
      </NavLink>
    </li>

    <li className='sub_navigation-list__item'>
      <NavLink 
        to='/Users/Section3' 
        className='sub_navigation-list__link'
        activeClassName="selected"
        activeStyle={
          design
        }
      >
        Section
      </NavLink>
    </li>

    <li className='sub_navigation-list__item'>
      <NavLink 
        to='/Users/Section4' 
        className='sub_navigation-list__link'
        activeClassName="selected"
        activeStyle={
          design
        }
      >
        Section
      </NavLink>
    </li>
  </ul>
      
  );
}

export default Users;
