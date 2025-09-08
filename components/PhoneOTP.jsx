import React from 'react';

const PhoneOTP = ({ onVerify }) => {
  return (
    <div>
      <input type="text" placeholder="Phone" />
      <button onClick={onVerify}>Send OTP</button>
    </div>
  );
};

export default PhoneOTP;
