import React from 'react';
import Card from '../Card/Card';
import PlaylistCard from '../PlaylistCard/Playlistcard';

import './MainPage.css';

function MainPage() {
  return (
    <div className="main">
      <div className="main_page">
        <h3>General Overview</h3>
        <div className="card_container">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>

      <div className="recent_playlist">
        <h3>Most Recent Playlist</h3>
        <div className="playlist_container">
          <PlaylistCard />
          <PlaylistCard />
          <PlaylistCard />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
