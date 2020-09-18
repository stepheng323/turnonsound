import React from 'react';
import Play from '../Play/Play';
import Profile from '../ProfileCard/Profile';

import './SideBar.css';

function SideBar() {
  return (
    <div className="side_bar">
      <div className="profile">
        <Profile />
      </div>
      <div className="play_section">
        <h3>Now Playing</h3>
        <Play />
      </div>

    </div>
  );
}

export default SideBar;
