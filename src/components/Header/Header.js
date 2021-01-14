import React from 'react';
import './Header.scss';
import logo from '../../images/image.png';
import profileImage from '../../images/image2.png';

const Header = () => {
  return (
    <header className='header'>
      {/* company logo */}
      <img src={logo} alt='logo' className='header__logo' />

      {/* user profile image section */}
      <div className='user'> 
        {/* profileImage */}
        <img src={profileImage} alt='logo' className='user__photo' />
        {/* user name */}
        <span className='user__name'>User</span>
      </div>

    </header>
  );
};
//Exported as a component
export default Header;
