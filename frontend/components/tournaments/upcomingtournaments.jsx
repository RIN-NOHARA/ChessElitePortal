// UpcomingTournaments.js

import React from 'react';
import "../../styles/ut.css";
const UpcomingTournaments = ({ tournaments }) => {
  if (!tournaments || tournaments.length === 0) {
    return (
      <div className="upcoming-tournaments-container">
        <h2 className="tournament-heading">Upcoming Tournaments</h2>
        <p>No upcoming tournaments available.</p>
      </div>
    );
  }

  return (
    <div>
<div className='hello'></div>
    <div className="upcoming-tournaments-container">
      <h2 className="tournament-heading">upcomingTournaments</h2>
      <ul className="tournament-list">
        {tournaments.map((tournament, index) => (
            <li key={index} className="tournament-item">
            <strong className="tournament-name">{tournament.name}</strong> - <span className="tournament-date">{tournament.date}</span>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default UpcomingTournaments;
