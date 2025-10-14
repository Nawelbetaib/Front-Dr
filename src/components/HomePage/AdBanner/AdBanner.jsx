import React from 'react';
import './AdBanner.css';

const AdBanner = () => {
  const handleViewAll = () => {
    console.log('View all clicked');
    // Redirection vers la page des produits ou modal
  };

  const handleSocialClick = (platform) => {
    console.log(`${platform} clicked`);
    // Redirection vers les réseaux sociaux
  };

  return (
    <div className="ad-banner">
      {/* Header avec logo et réseaux sociaux */}
      <div className="ad-header">
        <div className="logo-section">
          <div className="logo-placeholder">
            LOGO<br />HERE
          </div>
        </div>
        <div className="social-icons">
          <button
            className="social-icon facebook"
            onClick={() => handleSocialClick('Facebook')}
            aria-label="Facebook"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M20 10C20 4.48 15.52 0 10 0S0 4.48 0 10c0 4.99 3.66 9.13 8.44 9.88v-6.99H5.9V10h2.54V7.8c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.24.19 2.24.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56V10h2.78l-.44 2.89h-2.34v6.99C16.34 19.13 20 14.99 20 10z" fill="white"/>
            </svg>
          </button>
          <button
            className="social-icon twitter"
            onClick={() => handleSocialClick('Twitter')}
            aria-label="Twitter"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M6.29 18.25c7.55 0 11.67-6.25 11.67-11.67 0-.18 0-.35-.01-.53A8.35 8.35 0 0020 4.34a8.18 8.18 0 01-2.36.65 4.12 4.12 0 001.8-2.27 8.24 8.24 0 01-2.61 1A4.1 4.1 0 0013.85 2a4.1 4.1 0 00-4.1 4.1c0 .32.04.63.1.93A11.64 11.64 0 011.39 2.62a4.1 4.1 0 001.27 5.48A4.07 4.07 0 01.8 7.7v.05a4.1 4.1 0 003.29 4.02 4.1 4.1 0 01-1.85.07 4.1 4.1 0 003.83 2.85A8.23 8.23 0 010 16.4a11.62 11.62 0 006.29 1.84" fill="white"/>
            </svg>
          </button>
          <button
            className="social-icon instagram"
            onClick={() => handleSocialClick('Instagram')}
            aria-label="Instagram"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 1.8c2.67 0 2.99.01 4.04.06 1.05.05 1.62.23 2 .38.5.2.86.43 1.23.8.37.37.6.73.8 1.23.15.38.33.95.38 2 .05 1.05.06 1.37.06 4.04s-.01 2.99-.06 4.04c-.05 1.05-.23 1.62-.38 2-.2.5-.43.86-.8 1.23-.37.37-.73.6-1.23.8-.38.15-.95.33-2 .38-1.05.05-1.37.06-4.04.06s-2.99-.01-4.04-.06c-1.05-.05-1.62-.23-2-.38-.5-.2-.86-.43-1.23-.8-.37-.37-.6-.73-.8-1.23-.15-.38-.33-.95-.38-2C1.81 12.99 1.8 12.67 1.8 10s.01-2.99.06-4.04c.05-1.05.23-1.62.38-2 .2-.5.43-.86.8-1.23.37-.37.73-.6 1.23-.8.38-.15.95-.33 2-.38C7.01 1.81 7.33 1.8 10 1.8zM10 0C7.28 0 6.94.01 5.88.06 4.82.11 4.1.28 3.45.53c-.68.26-1.26.61-1.84 1.19C1.03 2.3.68 2.88.42 3.56.17 4.21 0 4.93.05 5.99.1 7.05.11 7.39.11 10.11s.01 3.06.06 4.12c.05 1.06.22 1.78.47 2.43.26.68.61 1.26 1.19 1.84.58.58 1.16.93 1.84 1.19.65.25 1.37.42 2.43.47 1.06.05 1.4.06 4.12.06s3.06-.01 4.12-.06c1.06-.05 1.78-.22 2.43-.47.68-.26 1.26-.61 1.84-1.19.58-.58.93-1.16 1.19-1.84.25-.65.42-1.37.47-2.43.05-1.06.06-1.4.06-4.12s-.01-3.06-.06-4.12c-.05-1.06-.22-1.78-.47-2.43-.26-.68-.61-1.26-1.19-1.84C16.7 1.14 16.12.79 15.44.53 14.79.28 14.07.11 13.01.06 11.95.01 11.61 0 8.89 0H10zm0 4.86A5.14 5.14 0 104.86 10 5.14 5.14 0 0010 4.86zM10 13.33A3.33 3.33 0 1113.33 10 3.33 3.33 0 0110 13.33zm6.53-8.47A1.2 1.2 0 1115.33 3.66 1.2 1.2 0 0116.53 4.86z" fill="white"/>
            </svg>
          </button>
          <button
            className="social-icon linkedin"
            onClick={() => handleSocialClick('LinkedIn')}
            aria-label="LinkedIn"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M18.52 0H1.48C.66 0 0 .65 0 1.45v17.1C0 19.35.66 20 1.48 20h17.04c.82 0 1.48-.65 1.48-1.45V1.45C20 .65 19.34 0 18.52 0zM5.93 17.04H2.96V7.5h2.97v9.54zM4.45 6.19c-.95 0-1.72-.77-1.72-1.72s.77-1.72 1.72-1.72 1.72.77 1.72 1.72-.77 1.72-1.72 1.72zM17.04 17.04h-2.97v-4.64c0-1.11-.02-2.53-1.54-2.53-1.54 0-1.78 1.2-1.78 2.45v4.72H7.78V7.5h2.85v1.3h.04c.4-.75 1.37-1.54 2.82-1.54 3.01 0 3.57 1.98 3.57 4.56v5.22z" fill="white"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="ad-content">
        {/* Section gauche avec machine */}
        <div className="machine-section">
          <div className="machine-container">
            {/* Machine EMSLIM */}
            <div className="emslim-machine">
              <div className="machine-screen">
                <div className="screen-content">
                  <div className="screen-icons">
                    <div className="screen-icon"></div>
                    <div className="screen-icon"></div>
                    <div className="screen-icon"></div>
                  </div>
                </div>
              </div>
              <div className="machine-body">
                <div className="machine-handles">
                  <div className="handle left-handle"></div>
                  <div className="handle right-handle"></div>
                </div>
                <div className="machine-base">
                  <div className="wheel"></div>
                  <div className="wheel"></div>
                  <div className="wheel"></div>
                  <div className="wheel"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section droite avec informations */}
        <div className="info-section">
          <div className="brand-title">
            <h2 className="emslim-title">EMSLIM</h2>
            <span className="pro-text">Pro</span>
            <h3 className="technology-text">TECHNOLOGY</h3>
          </div>

          <div className="features-list">
            <div className="feature-item">
              <div className="check-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="10" fill="#FF8C42"/>
                  <path d="M6 10l2.5 2.5L14 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="feature-text">The most modern in the United States</span>
            </div>
            <div className="feature-item">
              <div className="check-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="10" fill="#FF8C42"/>
                  <path d="M6 10l2.5 2.5L14 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="feature-text">Genuine treatment machine meets FDA standards</span>
            </div>
            <div className="feature-item">
              <div className="check-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="10" fill="#FF8C42"/>
                  <path d="M6 10l2.5 2.5L14 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="feature-text">Individual, specialized treatment regimen</span>
            </div>
          </div>
        </div>
      </div>

      {/* Section inférieure */}
      <div className="ad-footer">
        <h1 className="main-title">Redefine your shape with EMSLIM Pro!</h1>
        <p className="main-description">
          The latest U.S. technology designed to sculpt, tone, and transform your body.
        </p>
        <button className="view-all-btn" onClick={handleViewAll}>
          View all
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AdBanner;