import React, { useState } from 'react';
import './PostComposer.css';

const PostComposer = () => {
  const [isVisibleToDoctorsOnly, setIsVisibleToDoctorsOnly] = useState(false);
  const [postContent, setPostContent] = useState('');

  const handleToggleVisibility = () => {
    setIsVisibleToDoctorsOnly(!isVisibleToDoctorsOnly);
  };

  const handlePostContentChange = (e) => {
    setPostContent(e.target.value);
  };

  const handlePublish = () => {
    // Logic for publishing the post
    console.log('Publishing post:', {
      content: postContent,
      visibleToDoctorsOnly: isVisibleToDoctorsOnly
    });
  };

  const handleImageUpload = () => {
    // Logic for image upload
    console.log('Image upload clicked');
  };

  const handleVideoUpload = () => {
    // Logic for video upload
    console.log('Video upload clicked');
  };

  const handleDocumentUpload = () => {
    // Logic for document upload
    console.log('Document upload clicked');
  };

  return (
    <div className="post-composer-container">
      {/* Header Section */}
      <div className="post-composer-header">
        <div className="write-here-section">
          <svg className="edit-icon" xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
            <path d="M8.5 2.5H3.83333C3.47971 2.5 3.14057 2.64048 2.89052 2.89052C2.64048 3.14057 2.5 3.47971 2.5 3.83333V13.1667C2.5 13.5203 2.64048 13.8594 2.89052 14.1095C3.14057 14.3595 3.47971 14.5 3.83333 14.5H13.1667C13.5203 14.5 13.8594 14.3595 14.1095 14.1095C14.3595 13.8594 14.5 13.5203 14.5 13.1667V8.5" stroke="#3D4C5E" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12.7499 2.24991C13.0151 1.98469 13.3748 1.83569 13.7499 1.83569C14.125 1.83569 14.4847 1.98469 14.7499 2.24991C15.0151 2.51512 15.1641 2.87483 15.1641 3.24991C15.1641 3.62498 15.0151 3.98469 14.7499 4.24991L8.74123 10.2592C8.58293 10.4174 8.38737 10.5332 8.17257 10.5959L6.25723 11.1559C6.19987 11.1726 6.13906 11.1736 6.08117 11.1588C6.02329 11.144 5.97045 11.1139 5.9282 11.0716C5.88594 11.0294 5.85583 10.9765 5.841 10.9186C5.82617 10.8607 5.82717 10.7999 5.8439 10.7426L6.4039 8.82724C6.46692 8.61261 6.58292 8.41728 6.74123 8.25924L12.7499 2.24991Z" stroke="#3D4C5E" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="write-here-text">Write here...</span>
        </div>

        <div className="visibility-section">
          <span className="visibility-text">Visible to doctors only</span>
          <div className="toggle-switch" onClick={handleToggleVisibility}>
            <svg className={`switch-svg ${isVisibleToDoctorsOnly ? 'active' : ''}`} xmlns="http://www.w3.org/2000/svg" width="49" height="33" viewBox="0 0 49 33" fill="none">
              <rect x="16.5" y="9.5" width="24" height="10" rx="5" fill={isVisibleToDoctorsOnly ? "#4FC3F7" : "#C7C7CC"}/>
              <g filter="url(#filter0_d_1071_9172)">
                <circle cx={isVisibleToDoctorsOnly ? "32.5" : "16.5"} cy="14.5" r="8" fill="white"/>
              </g>
              <defs>
                <filter id="filter0_d_1071_9172" x="0.5" y="0.5" width="32" height="32" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dy="2"/>
                  <feGaussianBlur stdDeviation="4"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.24 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1071_9172"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1071_9172" result="shape"/>
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </div>

      {/* Text Area Section */}
      <div className="express-yourself-container">
        <textarea
          className="express-yourself-textarea"
          placeholder="Express yourself"
          value={postContent}
          onChange={handlePostContentChange}
        />
      </div>

      {/* Actions Section */}
      <div className="post-actions-section">
        <div className="media-buttons">
          {/* Image Button */}
          <div className="media-button image-button" onClick={handleImageUpload}>
            <svg className="media-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M12.6667 2H3.33333C2.59695 2 2 2.59695 2 3.33333V12.6667C2 13.403 2.59695 14 3.33333 14H12.6667C13.403 14 14 13.403 14 12.6667V3.33333C14 2.59695 13.403 2 12.6667 2Z" stroke="#546881" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6.00008 7.33342C6.73646 7.33342 7.33342 6.73646 7.33342 6.00008C7.33342 5.2637 6.73646 4.66675 6.00008 4.66675C5.2637 4.66675 4.66675 5.2637 4.66675 6.00008C4.66675 6.73646 5.2637 7.33342 6.00008 7.33342Z" stroke="#546881" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14 9.99996L11.9427 7.94263C11.6926 7.69267 11.3536 7.55225 11 7.55225C10.6464 7.55225 10.3074 7.69267 10.0573 7.94263L4 14" stroke="#546881" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="media-text">Image</span>
          </div>

          {/* Video Button */}
          <div className="media-button video-button" onClick={handleVideoUpload}>
            <svg className="media-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M12.6667 2H3.33333C2.59695 2 2 2.59695 2 3.33333V12.6667C2 13.403 2.59695 14 3.33333 14H12.6667C13.403 14 14 13.403 14 12.6667V3.33333C14 2.59695 13.403 2 12.6667 2Z" stroke="#546881" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6.00001 6.00193C5.99965 5.88362 6.03078 5.76734 6.09021 5.66504C6.14964 5.56274 6.23523 5.4781 6.33818 5.4198C6.44113 5.3615 6.55774 5.33165 6.67604 5.33332C6.79434 5.33498 6.91007 5.3681 7.01134 5.42926L10.3427 7.42726C10.4418 7.48637 10.524 7.57023 10.581 7.67061C10.638 7.771 10.668 7.88447 10.668 7.99993C10.668 8.11539 10.638 8.22886 10.581 8.32925C10.524 8.42963 10.4418 8.51349 10.3427 8.5726L7.01134 10.5706C6.91002 10.6318 6.79423 10.6649 6.67587 10.6665C6.55752 10.6682 6.44086 10.6383 6.33789 10.5799C6.23491 10.5215 6.14934 10.4368 6.08996 10.3344C6.03058 10.232 5.99953 10.1156 6.00001 9.99726V6.00193Z" stroke="#546881" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="media-text">Video</span>
          </div>

          {/* Document Button */}
          <div className="media-button document-button" onClick={handleDocumentUpload}>
            <svg className="media-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2.66675 14.6666H12.0001C12.3537 14.6666 12.6928 14.5261 12.9429 14.2761C13.1929 14.026 13.3334 13.6869 13.3334 13.3333V4.66659L10.0001 1.33325H4.00008C3.64646 1.33325 3.30732 1.47373 3.05727 1.72378C2.80722 1.97382 2.66675 2.31296 2.66675 2.66659V5.33325" stroke="#546881" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9.33325 1.33325V3.99992C9.33325 4.35354 9.47373 4.69268 9.72378 4.94273C9.97383 5.19278 10.313 5.33325 10.6666 5.33325H13.3333" stroke="#546881" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 10H6" stroke="#546881" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4 8V12" stroke="#546881" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="media-text">Document</span>
          </div>
        </div>

        {/* Publish Button */}
        <button className="publish-button" onClick={handlePublish}>
          <span className="publish-text">Publish your post</span>
        </button>
      </div>
    </div>
  );
};

export default PostComposer;