import React from 'react';
import Play from '../Play/Play';
import Profile from '../ProfileCard/Profile';

import './SideBar.css';

function SideBar() {
  return (
    <>
      <div className="side_bar">
        <div className="profile">
          <Profile />
        </div>

        {/* <div className="play">
          <Play />
        </div> */}

      </div>
    </>
  );
}

export default SideBar;
