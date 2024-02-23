// App.js

import React from 'react';
import UpcomingTournaments1 from './tournamentsongoing';

const Ut1 = () => {
  // Dummy data for illustration purposes
  const upcomingTournaments = [
    { name: 'Tournament 1' },
    { name: 'Tournament 2'},
    { name: 'Tournament 3' },
    { name: 'Tournament 4' },
    { name: 'Tournament 5' },
    { name: 'Tournament 6' }
  ];

  return (
    <div>
    
      <UpcomingTournaments1 tournaments={upcomingTournaments} />
    </div>
  );
};

export default Ut1;
