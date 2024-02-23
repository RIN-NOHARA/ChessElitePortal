// App.js

import React from 'react';
import "../../styles/ut.css";
import UpcomingTournaments from './upcomingtournaments';

const Ut = () => {
  // Dummy data for illustration purposes
  const upcomingTournaments = [
    { name: 'Tournament 1', date: '2024-02-10' },
    { name: 'Tournament 2', date: '2024-03-15' },
    { name: 'Tournament 3', date: '2024-04-20' },
    { name: 'Tournament 4', date: '2024-04-20' },
    { name: 'Tournament 5', date: '2024-04-20' },
    { name: 'Tournament 6', date: '2024-04-20' }
  ];

  return (
    <div>
      
      <UpcomingTournaments tournaments={upcomingTournaments} />
    </div>
  );
};

export default Ut;
