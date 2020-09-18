import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMoreOutlined';

import './Card.css';
import TinyCard from '../TinyCard/TinyCard';

function Card() {
  return (
    <div className="card">
      <div className="card_logo">
        <TinyCard />
        <div className="card_info">
          <p className="card_info_title">Songs Uploaded</p>
          <p className="card_info_number">159</p>
        </div>
      </div>
      <ExpandMoreIcon className="card_button" />
    </div>
  );
}

export default Card;
