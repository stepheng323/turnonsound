import React from 'react';
import NotificationIcon from '@material-ui/icons/NotificationsNoneOutlined';
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '@material-ui/core/Avatar';
import ExpandMoreIcon from '@material-ui/icons/ExpandMoreOutlined';

import './header.css';

function Header() {
  return (
    <div className="container header">

      <div className="header_left">
        <h1>
          TurnOn
          <span className="blue">Soundz.</span>
        </h1>
      </div>

      <div className="header_input">
        <SearchIcon  style={{marginLeft: '8px', color: 'grey'}} />
        <input type="search" placeholder="Search for songs, album, playlist" />
      </div>

      <div className="header_icons">
        <NotificationIcon className="header_icon" />
        <Avatar className="header_icon" alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <p className="header_icon">James Doe</p>
        <ExpandMoreIcon />
      </div>
    </div>
  );
}

export default Header;
