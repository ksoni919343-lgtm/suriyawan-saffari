import React from 'react';

const StatsCards = ({ stats }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {stats.map((stat, i) => (
        <div key={i} className="border p-4">
          <h4>{stat.title}</h4>
          <p>{stat.value}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
