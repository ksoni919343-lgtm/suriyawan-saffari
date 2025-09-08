import React from 'react';
import StatsCards from '../../components/StatsCards';

const Stats = () => {
  const stats = [{ title: 'Orders', value: 100 }];
  return <StatsCards stats={stats} />;
};

export default Stats;
