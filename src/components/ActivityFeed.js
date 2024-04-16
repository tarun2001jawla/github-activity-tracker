import React, { useEffect, useState } from 'react';
import ActivityCard from './ActivityCard';
import '../index.css';


const ActivityFeed = ({ username }) => {
  const [activity, setActivity] = useState([]);


  useEffect(() => {
    const fetchActivity = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}/events`);
        const data = await response.json();
        setActivity(data);
      } catch (error) {
        console.error('Error fetching GitHub activity:', error);
      }
    };

    if (username) {
      fetchActivity();
    }
  }, [username]);

  return (
    <div className='activity-feed'>
  
      {activity.map((event) => (
        <ActivityCard key={event.id} event={event} />
      ))}
    </div>
  );
};

export default ActivityFeed;
