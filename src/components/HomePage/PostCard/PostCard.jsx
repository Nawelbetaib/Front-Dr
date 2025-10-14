import React, { useState } from 'react';
import './PostCard.css';

const PostCard = ({
  doctorName = "Dr. Marie Clark",
  timeAgo = "14 novembre 2023 à 16:48",
  content = "We are proud to share that our medical team has successfully completed a complex surgery that marked an important milestone for our medical team. This accomplishment reflects not only the dedication and expertise of our doctors but also our commitment to providing patients with the highest level of care.",
  image = null,
  hasTranslation = true,
  likes = 1025,
  comments = 253,
  profileImage = null
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);

  const handleLike = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setIsLiked(!isLiked);
  };

  const handleComment = () => {
    console.log('Comment clicked');
  };

  const handleShare = () => {
    console.log('Share clicked');
  };

  return (
    <div className="post-card">
      {/* Header */}
      <div className="post-header">
        <div className="profile-section">
          <div className="profile-avatar">
            {profileImage ? (
              <img src={profileImage} alt={doctorName} />
            ) : (
              <div className="avatar-placeholder">
                {doctorName.split(' ').map(name => name[0]).join('')}
              </div>
            )}
          </div>
          <div className="profile-info">
            <h3 className="doctor-name">{doctorName}</h3>
            <p className="post-time">{timeAgo}</p>
          </div>
        </div>
        <button className="more-options">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="4" r="1.5" fill="#B5BEC6"/>
            <circle cx="10" cy="10" r="1.5" fill="#B5BEC6"/>
            <circle cx="10" cy="16" r="1.5" fill="#B5BEC6"/>
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="post-content">
        <p className="post-text">{content}</p>
        {hasTranslation && (
          <button className="see-translation">See translation</button>
        )}
      </div>

      {/* Image */}
      {image && (
        <div className="post-image">
          <img src={image} alt="Post content" />
        </div>
      )}

      {/* Actions */}
      <div className="post-actions">
        <button
          className={`action-button like-button ${isLiked ? 'liked' : ''}`}
          onClick={handleLike}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M2.5 8.33333C2.5 5.57 4.73667 3.33333 7.5 3.33333C8.94167 3.33333 10.2167 4.025 11 5.08333C11.7833 4.025 13.0583 3.33333 14.5 3.33333C17.2633 3.33333 19.5 5.57 19.5 8.33333C19.5 11.8333 11 18.3333 11 18.3333S2.5 11.8333 2.5 8.33333Z"
              fill={isLiked ? "#FF6B6B" : "none"}
              stroke={isLiked ? "#FF6B6B" : "#B5BEC6"}
              strokeWidth="1.5"
            />
          </svg>
          <span>Like Post</span>
        </button>

        <button className="action-button comment-button" onClick={handleComment}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M17.5 8.33333C17.5 12.0152 14.5178 15 10.8333 15H6.66667L2.5 17.5V5C2.5 3.61929 3.61929 2.5 5 2.5H15C16.3807 2.5 17.5 3.61929 17.5 5V8.33333Z"
              stroke="#B5BEC6"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>
          <span>Comment</span>
        </button>

        <button className="action-button share-button" onClick={handleShare}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M15 6.66667L10 2.5L5 6.66667M10 2.5V13.3333M3.33333 10.8333V15.8333C3.33333 16.7538 4.07953 17.5 5 17.5H15C15.9205 17.5 16.6667 16.7538 16.6667 15.8333V10.8333"
              stroke="#B5BEC6"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>
          <span>Share Post</span>
        </button>

        <div className="engagement-stats">
          <span className="likes-count">{likeCount}</span>
          <span className="comments-count">{comments} comments</span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;