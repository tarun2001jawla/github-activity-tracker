import React from 'react';
import '../index.css';

const ActivityCard = ({ event }) => {
  return (
    <div className='activity-card'>
      <p>{event.type}</p>
      <p>{event.created_at}</p>
    
    </div>
  );
};

export default ActivityCard;
