import React from 'react';
import { Picker } from 'google-picker'; // Assume imported

const GooglePicker = ({ onPick }) => {
  return <Picker onChange={onPick} />;
};

export default GooglePicker;
