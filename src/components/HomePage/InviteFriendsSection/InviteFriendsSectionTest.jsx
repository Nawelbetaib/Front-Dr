import React from 'react';
import InviteFriendsSection from './InviteFriendsSection';

const InviteFriendsSectionTest = () => {
  return (
    <div style={{ 
      padding: '40px', 
      backgroundColor: '#f0f0f0', 
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div>
        <h1 style={{ 
          textAlign: 'center', 
          marginBottom: '30px',
          fontFamily: 'Poppins',
          color: '#3D4C5E'
        }}>
          InviteFriendsSection Component Test
        </h1>
        <InviteFriendsSection />
      </div>
    </div>
  );
};

export default InviteFriendsSectionTest;
