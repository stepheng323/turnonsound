import React from 'react';
import FavoritIcon from '@material-ui/icons/FavoriteBorder';
import fem from '../../img/fem.jpg';

import './PlaylistCard.css';

function Playlistcard() {
  return (
    <div className="playlist_card">
      <div className="playlist_card_header">
        <img src={fem} alt="cover" />
      </div>
      <div className="playlist_card_body">
        <div className="verification">
          <p style={{
            fontSize: '12px', fontWeight: '500', lineHeight: '18px', color: '#757575',
          }}
          >
            <span style={{ fontWeight: 500 }}>Verified:R&B</span>
          </p>
          <p>by</p>
          <p>
            <span className="blue small">TurnUpSounds</span>
          </p>
        </div>
        <div className="total">
          <p style={{ fontSize: '11px', lineHeight: '16px', color: '#828282' }} className="mr-2">
            Total Songs:
          </p>
          <p style={{ fontSize: '11px' }} className="blue">58</p>
        </div>
        <div className="like">
          <FavoritIcon className="mr-2 blue" />
          <p className="blue">108</p>
        </div>
      </div>
    </div>
  );
}

export default Playlistcard;
