import React, { useState, useRef, useEffect } from 'react';
import './AdBanner.css';
import emslimImage from '../../../assets/icons/emslim.png';
import skincareImage from '../../../assets/icons/skincare.png';
import healthcareImage from '../../../assets/icons/healthcare.png';


const AdBanner = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const slides = [
    {
      image: emslimImage,
      title: 'Redefine your shape with EMSLIM Pro!',
      description: 'The latest U.S. technology designed to sculpt, tone, and transform your body.',
    },
    {
      image: skincareImage,
      title: 'Your health, our priority!',
      description: 'We provide the best healthcare services for you and your loved ones.',
    },
    {
      image: healthcareImage,
      title: 'Discover the ultimate skincare innovation!',
      description: 'The Stellar M22™ transforms your skin safely and effectively.',
    },
  ];

  const [index, setIndex] = useState(0);

  const [scrollLeft, setScrollLeft] = useState(0);
  const containerRef = useRef(null);

  // Auto-rotation every 5 seconds
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 3000);
    return () => clearInterval(id);
  }, [slides.length]);

  const handleViewAll = () => {
    console.log('View all clicked');
    // Redirection vers la page des produits ou modal
  };

  // Gestion du glissement tactile et souris
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Vitesse de glissement
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  // Gestion tactile pour mobile
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <div
      className={`ad-banner-container ${isDragging ? 'dragging' : ''}`}
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slide image */}
      <img
        key={`img-${index}`}
        src={slides[index].image}
        alt={slides[index].title}
        className="ad-image fade"
        draggable={false}
      />

      {/* Slide content */}
      <div key={`content-${index}`} className="ad-content fade">
        <h1 className="main-title">{slides[index].title}</h1>
        <div className="description-container">
          <p className="main-description">{slides[index].description}</p>
        </div>
        <button className="view-all-btn" onClick={handleViewAll}>
          <span className="view-all-text">View all</span>
          <svg className="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M9.99992 15.8334L15.8333 10.0001L9.99992 4.16675" stroke="#3F9CC6" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4.16659 10H15.8333" stroke="#3F9CC6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AdBanner;