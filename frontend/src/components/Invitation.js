// src/components/Invitation.js
import React from 'react';

function Invitation() {
  // Example referral code, in a real application, this would be dynamic
  const referralCode = 'ABC123';

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Invitation</h2>
      <div className="text-center">
        <p>Your referral code is:</p>
        <h4 className="text-primary">{referralCode}</h4>
        <p>Share this code with your friends to invite them to join Recognica.</p>
      </div>
    </div>
  );
}

export default Invitation;
