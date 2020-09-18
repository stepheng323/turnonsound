import React from 'react';
import Avatar from '@material-ui/core/Avatar';

import './ProfileCard.css';

function Profile() {
  return (
    <div className="person">

      <div className="avatar">
        <Avatar className="header_icon" alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <p>
          Mark Philips
        </p>
      </div>

      <div className="stats">
        <div className="follows">
          <p>FOLLOWS</p>
          <p style={{fontSize: '23px', color:'#676767', marginTop: '1em'}}>423</p>
        </div>
        <div className="following">
          <p>FOLLOWING</p>
          <p style={{fontSize: '23px', color:'#676767', marginTop: '1em'}}>3623</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
