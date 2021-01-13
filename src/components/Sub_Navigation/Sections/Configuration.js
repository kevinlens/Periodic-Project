import React, {useEffect} from 'react';
import '../Sub_Navigation.scss';

// similar to <Link> but helps add styling attributes to elements based on it's to="/" url
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';


const Configuration = ({design, history}) => {

  useEffect(() => {
    history.push('/Configuration/Resources');
  }, []);

  return (

    <ul className='sub_navigation-list'>
    <li className='sub_navigation-list__item'>
      <NavLink 
        to='/Configuration/Providers' className='sub_navigation-list__link'
        activeClassName="selected"
        activeStyle={design}
      >
        providers
      </NavLink>
    </li>

    <li className='sub_navigation-list__item'>
      <NavLink 
        to='/Configuration/Bookables' className='sub_navigation-list__link'
        activeClassName="selected"
        activeStyle={design}
      >
        bookables
      </NavLink>
    </li>

    <li className='sub_navigation-list__item'>
    <NavLink
        to='/Configuration/Resources' className='sub_navigation-list__link'
        activeClassName="selected"
        activeStyle={design}
        >
        Resources
    </NavLink>
    </li>

    <li className='sub_navigation-list__item'>
      <NavLink 
        to='/Configuration/Forms' className='sub_navigation-list__link'
        activeClassName="selected"
        activeStyle={design}
      >
        Forms
      </NavLink>
    </li>

    <li className='sub_navigation-list__item'>
      <NavLink 
        to='/Configuration/Messages' className='sub_navigation-list__link'
        activeClassName="selected"
        activeStyle={design}
      >
        Messages
      </NavLink>
    </li>
  </ul>
      
  );
}

export default withRouter(Configuration);
