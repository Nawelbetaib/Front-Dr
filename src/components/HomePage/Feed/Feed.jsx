import React from 'react';
import './Feed.css';

// Import des composants HomePage
import PostComposer from '../PostComposer/PostComposer';
import PostCard from '../PostCard/PostCard';
import MonthCalendar from '../MonthCalendar/MonthCalendar';
import InviteFriendsSection from '../InviteFriendsSection/InviteFriendsSection';
import AdBanner from '../AdBanner/AdBanner';

const Feed = () => {
  // Données d'exemple pour les posts
  const samplePosts = [
    {
      id: 1,
      doctorName: "Dr. Marie Clark",
      timeAgo: "14 novembre 2023 à 16:48",
      content: "We are proud to share that we recently achieved a successful surgery that marked an important milestone for our medical team. This accomplishment reflects not only the dedication and expertise of our doctors but also our continuous commitment to providing patients with the highest level of care.",
      image: "/api/placeholder/400/250", // Image de la salle d'opération
      hasTranslation: true,
      likes: 1025,
      comments: 253,
      profileImage: "/api/placeholder/40/40"
    },
    {
      id: 2,
      doctorName: "Dr. Salma Bchir",
      timeAgo: "13 novembre 2023 à 16:48",
      content: "Staying hydrated is vital for your health—water helps regulate body temperature, supports digestion, and improves concentration. Aim for at least 6–8 glasses a day, and remember that fruits and vegetables also contribute to your hydration.",
      image: null,
      hasTranslation: true,
      likes: 1025,
      comments: 253,
      profileImage: "/api/placeholder/40/40"
    },
    {
      id: 3,
      doctorName: "Dr. Salma Bchir",
      timeAgo: "12 novembre 2023 à 16:48",
      content: "Staying hydrated is vital for your health—water helps regulate body temperature, supports digestion, and improves concentration. Aim for at least 6–8 glasses a day, and remember that fruits and vegetables also contribute to your hydration.",
      image: null,
      hasTranslation: true,
      likes: 1025,
      comments: 253,
      profileImage: "/api/placeholder/40/40"
    },
    {
      id: 4,
      doctorName: "Dr. Salma Bchir",
      timeAgo: "11 novembre 2023 à 16:48",
      content: "Staying hydrated is vital for your health—water helps regulate body temperature, supports digestion, and improves concentration. Aim for at least 6–8 glasses a day, and remember that fruits and vegetables also contribute to your hydration.",
      image: null,
      hasTranslation: true,
      likes: 1025,
      comments: 253,
      profileImage: "/api/placeholder/40/40"
    }
  ];

  return (
    <div className="feed-container">
      {/* Colonne principale (gauche) */}
      <div className="main-content">
        {/* Compositeur de post */}
        <div className="post-composer-section">
          <PostComposer />
        </div>

        {/* Liste des posts */}
        <div className="posts-section">
          {samplePosts.map((post) => (
            <div key={post.id} className="post-item">
              <PostCard
                doctorName={post.doctorName}
                timeAgo={post.timeAgo}
                content={post.content}
                image={post.image}
                hasTranslation={post.hasTranslation}
                likes={post.likes}
                comments={post.comments}
                profileImage={post.profileImage}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar droite */}
      <div className="sidebar">
        {/* Calendrier */}
        <div className="calendar-section">
          <MonthCalendar />
        </div>

        {/* Bannière publicitaire EMSLIM */}
        <div className="ad-banner-section">
          <AdBanner />
        </div>

        {/* Section d'invitation d'amis */}
        <div className="invite-friends-section">
          <InviteFriendsSection />
        </div>
      </div>
    </div>
  );
};

export default Feed;