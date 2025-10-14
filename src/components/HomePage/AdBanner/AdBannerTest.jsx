import React from 'react';
import AdBanner from './AdBanner';

const AdBannerTest = () => {
  return (
    <div style={{ 
      padding: '40px', 
      backgroundColor: '#f5f7fa', 
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <h1 style={{ 
        textAlign: 'center', 
        marginBottom: '30px',
        fontFamily: 'Poppins',
        color: '#2C3E50',
        fontSize: '24px',
        fontWeight: '600'
      }}>
        AdBanner Component Test - EMSLIM Pro
      </h1>
      
      <div style={{
        width: '100%',
        maxWidth: '800px'
      }}>
        <AdBanner />
      </div>
      
      {/* Informations sur le composant */}
      <div style={{
        marginTop: '40px',
        padding: '20px',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        maxWidth: '800px',
        width: '100%'
      }}>
        <h2 style={{
          fontFamily: 'Poppins',
          fontSize: '18px',
          fontWeight: '600',
          color: '#2C3E50',
          marginBottom: '16px'
        }}>
          Fonctionnalités du composant AdBanner
        </h2>
        
        <ul style={{
          fontFamily: 'Poppins',
          fontSize: '14px',
          color: '#34495E',
          lineHeight: '1.6',
          paddingLeft: '20px'
        }}>
          <li>✅ Header avec logo placeholder et icônes de réseaux sociaux</li>
          <li>✅ Machine EMSLIM 3D avec écran tactile animé</li>
          <li>✅ Titre "EMSLIM Pro TECHNOLOGY" avec typography stylisée</li>
          <li>✅ 3 points de vente avec icônes de validation orange</li>
          <li>✅ Titre principal et description</li>
          <li>✅ Bouton "View all" avec icône de flèche</li>
          <li>✅ Background gradient bleu avec pattern géométrique</li>
          <li>✅ Design responsive pour mobile/tablet/desktop</li>
          <li>✅ Animations et effets de hover</li>
          <li>✅ Réseaux sociaux cliquables (Facebook, Twitter, Instagram, LinkedIn)</li>
        </ul>
        
        <h3 style={{
          fontFamily: 'Poppins',
          fontSize: '16px',
          fontWeight: '600',
          color: '#2C3E50',
          marginTop: '20px',
          marginBottom: '12px'
        }}>
          Éléments visuels reproduits :
        </h3>
        
        <ul style={{
          fontFamily: 'Poppins',
          fontSize: '14px',
          color: '#34495E',
          lineHeight: '1.6',
          paddingLeft: '20px'
        }}>
          <li>🎨 Gradient bleu exact (#E8F0FF → #B8D4FF → #4A90E2)</li>
          <li>🤖 Machine EMSLIM avec écran, poignées et roues</li>
          <li>📱 Écran tactile avec 3 icônes animées</li>
          <li>✅ Icônes de validation orange (#FF8C42)</li>
          <li>🎯 Typography Poppins + Dancing Script pour "Pro"</li>
          <li>📱 Icônes de réseaux sociaux avec couleurs officielles</li>
          <li>🔄 Animations subtiles et effets de hover</li>
        </ul>
      </div>
    </div>
  );
};

export default AdBannerTest;
