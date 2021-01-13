import React, {useEffect} from 'react';
import '../Sub_Navigation.scss';

// similar to <Link> but helps add styling attributes to elements based on it's to="/" url
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

const Settings = ({design, history}) => {

  useEffect(() => {
    history.push('/Settings/Section0');
  }, []);

  return (

    <ul className='sub_navigation-list'>
    <li className='sub_navigation-list__item'>
      <NavLink 
        to='/Settings/Section0' 
        className='sub_navigation-list__link'
        activeClassName="selected"
        activeStyle={design}
      >
        Section
      </NavLink>
    </li>

    <li className='sub_navigation-list__item'>
      <NavLink 
        to='/Settings/Section1' 
        className='sub_navigation-list__link'
        activeClassName="selected"
        activeStyle={design}
      >
        Section
      </NavLink>
    </li>

    <li className='sub_navigation-list__item'>
      <NavLink 
        to='/Settings/Section2' 
        className='sub_navigation-list__link'
        activeClassName="selected"
        activeStyle={design}
      >
        Section
      </NavLink>
    </li>

    <li className='sub_navigation-list__item'>
      <NavLink 
        to='/Settings/Section3' 
        className='sub_navigation-list__link'
        activeClassName="selected"
        activeStyle={design}
      >
        Section
      </NavLink>
    </li>

    <li className='sub_navigation-list__item'>
      <NavLink 
        to='/Settings/Section4' 
        className='sub_navigation-list__link'
        activeClassName="selected"
        activeStyle={design}
      >
        Section
      </NavLink>
    </li>
  </ul>
      
  );
}

export default withRouter(Settings);
