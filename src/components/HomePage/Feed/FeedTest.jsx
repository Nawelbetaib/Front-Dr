import React from 'react';
import Feed from './Feed';

const FeedTest = () => {
  return (
    <div style={{ 
      backgroundColor: '#f5f7fa', 
      minHeight: '100vh',
      fontFamily: 'Poppins, sans-serif'
    }}>
      {/* Header de test */}
      <div style={{
        backgroundColor: 'white',
        padding: '16px 0',
        borderBottom: '1px solid #e1e8ed',
        marginBottom: '0',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <h1 style={{
            fontSize: '24px',
            fontWeight: '600',
            color: '#2C3E50',
            margin: 0
          }}>
            DoctorParty - HomePage Feed
          </h1>
          <div style={{
            fontSize: '14px',
            color: '#7F8C8D',
            display: 'flex',
            gap: '16px'
          }}>
            <span>✅ PostComposer</span>
            <span>✅ PostCard</span>
            <span>✅ MonthCalendar</span>
            <span>✅ AdBanner</span>
            <span>✅ InviteFriendsSection</span>
          </div>
        </div>
      </div>

      {/* Composant Feed principal */}
      <Feed />

      {/* Footer informatif */}
      <div style={{
        backgroundColor: 'white',
        padding: '32px 20px',
        marginTop: '40px',
        borderTop: '1px solid #e1e8ed'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: '20px',
            fontWeight: '600',
            color: '#2C3E50',
            marginBottom: '16px',
            textAlign: 'center'
          }}>
            Composants intégrés dans le Feed
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
            marginTop: '24px'
          }}>
            {/* PostComposer Info */}
            <div style={{
              padding: '20px',
              backgroundColor: '#f8f9fa',
              borderRadius: '8px',
              border: '1px solid #e9ecef'
            }}>
              <h3 style={{
                fontSize: '16px',
                fontWeight: '600',
                color: '#4A90E2',
                marginBottom: '8px'
              }}>
                📝 PostComposer
              </h3>
              <p style={{
                fontSize: '14px',
                color: '#6c757d',
                margin: 0,
                lineHeight: '1.5'
              }}>
                Compositeur de posts avec options de visibilité, upload d'images/vidéos/documents, et bouton de publication.
              </p>
            </div>

            {/* PostCard Info */}
            <div style={{
              padding: '20px',
              backgroundColor: '#f8f9fa',
              borderRadius: '8px',
              border: '1px solid #e9ecef'
            }}>
              <h3 style={{
                fontSize: '16px',
                fontWeight: '600',
                color: '#4A90E2',
                marginBottom: '8px'
              }}>
                📄 PostCard
              </h3>
              <p style={{
                fontSize: '14px',
                color: '#6c757d',
                margin: 0,
                lineHeight: '1.5'
              }}>
                Cartes de posts avec profil docteur, contenu, images, likes, commentaires et traduction.
              </p>
            </div>

            {/* MonthCalendar Info */}
            <div style={{
              padding: '20px',
              backgroundColor: '#f8f9fa',
              borderRadius: '8px',
              border: '1px solid #e9ecef'
            }}>
              <h3 style={{
                fontSize: '16px',
                fontWeight: '600',
                color: '#4A90E2',
                marginBottom: '8px'
              }}>
                📅 MonthCalendar
              </h3>
              <p style={{
                fontSize: '14px',
                color: '#6c757d',
                margin: 0,
                lineHeight: '1.5'
              }}>
                Calendrier mensuel interactif avec navigation et sélection de dates (Septembre 2021).
              </p>
            </div>

            {/* AdBanner Info */}
            <div style={{
              padding: '20px',
              backgroundColor: '#f8f9fa',
              borderRadius: '8px',
              border: '1px solid #e9ecef'
            }}>
              <h3 style={{
                fontSize: '16px',
                fontWeight: '600',
                color: '#4A90E2',
                marginBottom: '8px'
              }}>
              🎯 AdBanner EMSLIM Pro
              </h3>
              <p style={{
                fontSize: '14px',
                color: '#6c757d',
                margin: 0,
                lineHeight: '1.5'
              }}>
                Bannière publicitaire avec machine EMSLIM 3D, features et design gradient bleu.
              </p>
            </div>

            {/* InviteFriendsSection Info */}
            <div style={{
              padding: '20px',
              backgroundColor: '#f8f9fa',
              borderRadius: '8px',
              border: '1px solid #e9ecef'
            }}>
              <h3 style={{
                fontSize: '16px',
                fontWeight: '600',
                color: '#4A90E2',
                marginBottom: '8px'
              }}>
                👥 InviteFriendsSection
              </h3>
              <p style={{
                fontSize: '14px',
                color: '#6c757d',
                margin: 0,
                lineHeight: '1.5'
              }}>
                Section d'invitation d'amis avec champ email et bouton d'envoi d'invitation.
              </p>
            </div>
          </div>

          {/* Layout Info */}
          <div style={{
            marginTop: '32px',
            padding: '24px',
            backgroundColor: '#e8f4fd',
            borderRadius: '8px',
            border: '1px solid #b8d4ff'
          }}>
            <h3 style={{
              fontSize: '18px',
              fontWeight: '600',
              color: '#2C3E50',
              marginBottom: '12px',
              textAlign: 'center'
            }}>
              📐 Layout Structure
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '20px',
              fontSize: '14px',
              color: '#34495E'
            }}>
              <div>
                <strong>Colonne principale (gauche) :</strong>
                <ul style={{ marginTop: '8px', paddingLeft: '20px' }}>
                  <li>PostComposer (en haut)</li>
                  <li>Liste des PostCard (feed principal)</li>
                </ul>
              </div>
              <div>
                <strong>Sidebar (droite) :</strong>
                <ul style={{ marginTop: '8px', paddingLeft: '20px' }}>
                  <li>MonthCalendar</li>
                  <li>AdBanner EMSLIM Pro</li>
                  <li>InviteFriendsSection</li>
                </ul>
              </div>
            </div>
            <p style={{
              marginTop: '16px',
              fontSize: '13px',
              color: '#7F8C8D',
              textAlign: 'center',
              fontStyle: 'italic'
            }}>
              Layout responsive : sur mobile, la sidebar passe au-dessus du contenu principal
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedTest;
