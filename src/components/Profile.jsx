import React from 'react';
import './Profile.css';
import Picon from './images/profile-icon.png';

function Profile() {
  return (
    <div className='profile-icon'>
        <img src={ Picon } alt="" width={40} />
    </div>
  )
}

export default Profile;
