import React, { useState } from 'react';
import './InviteFriendsSection.css';

const InviteFriendsSection = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSendInvite = () => {
    if (email.trim()) {
      // Logic for sending invite
      console.log('Sending invite to:', email);
      // Reset email after sending
      setEmail('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendInvite();
    }
  };

  return (
    <div className="invite-friends-container">
      {/* Header Section */}
      <div className="invite-header">
        <svg className="mail-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" fill="none">
          <g clipPath="url(#clip0_1071_9359)">
            <path d="M3.9091 11.4459V5.80856L2.11174 4.20911L0.5 3.32153V10.4511C0.5 11.0015 0.958496 11.4459 1.52275 11.4459H3.9091Z" fill="#4285F4"/>
            <path d="M12.0908 11.4459H14.4772C15.0431 11.4459 15.4999 10.9998 15.4999 10.451V3.32153L13.6744 4.33815L12.0908 5.8085V11.4459Z" fill="#34A853"/>
            <path d="M3.90912 5.80842L3.66455 3.60574L3.90912 1.49756L8.00002 4.48204L12.0909 1.49756L12.3645 3.49192L12.0909 5.80842L8.00002 8.7929L3.90912 5.80842Z" fill="#EA4335"/>
            <path d="M12.0908 1.49762V5.80848L15.4999 3.32145V1.99501C15.4999 0.76478 14.0562 0.0634591 13.0454 0.801257L12.0908 1.49762Z" fill="#FBBC04"/>
            <path d="M0.5 3.32148L2.06791 4.46537L3.9091 5.80851V1.49765L2.95449 0.801283C1.94199 0.0634282 0.5 0.764806 0.5 1.99498V3.32148Z" fill="#C5221F"/>
          </g>
          <defs>
            <clipPath id="clip0_1071_9359">
              <rect width="15" height="11" fill="white" transform="translate(0.5 0.5)"/>
            </clipPath>
          </defs>
        </svg>
        <h3 className="invite-title">Invite Your Friends to Join Medilink!</h3>
      </div>

      {/* Description */}
      <p className="invite-description">
        Don't keep it to yourself, invite your friends and family to join you on Medilink today!
      </p>

      {/* Email Invitation Section */}
      <div className="email-section">
        <h4 className="email-title">Invite Your Friends Now Via Email</h4>

        <div className="email-input-container">
          <div className="email-input-wrapper">
            <input
              type="email"
              className="email-input"
              placeholder="Enter their email"
              value={email}
              onChange={handleEmailChange}
              onKeyPress={handleKeyPress}
            />
          </div>

          <button className="send-button" onClick={handleSendInvite}>
            <svg className="send-icon" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
              <path d="M15.036 22.1861C15.074 22.2807 15.1401 22.3615 15.2253 22.4176C15.3106 22.4737 15.4109 22.5023 15.5129 22.4997C15.6149 22.4971 15.7136 22.4633 15.7959 22.403C15.8781 22.3426 15.94 22.2586 15.973 22.1621L22.473 3.16206C22.5051 3.07345 22.5112 2.97756 22.4907 2.88561C22.4702 2.79366 22.4239 2.70945 22.3573 2.64283C22.2907 2.57622 22.2064 2.52995 22.1145 2.50945C22.0225 2.48894 21.9267 2.49505 21.838 2.52706L2.83805 9.02706C2.74155 9.06015 2.65747 9.12197 2.59712 9.20423C2.53677 9.28648 2.50302 9.38523 2.50041 9.48722C2.4978 9.5892 2.52644 9.68955 2.58251 9.77478C2.63857 9.86002 2.71937 9.92606 2.81405 9.96406L10.7441 13.1441C10.9947 13.2444 11.2225 13.3945 11.4136 13.5853C11.6047 13.7761 11.7552 14.0036 11.856 14.2541L15.036 22.1861Z" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M22.3541 2.64697L11.4141 13.586" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default InviteFriendsSection;