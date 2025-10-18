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
  const initialPosts = [
    {
      id: 1,
      doctorName: "Dr. Marie Clark",
      timeAgo: "14 novembre 2023 à 16:48",
      content:
        "We are proud to share that we recently achieved a successful surgery that marked an important milestone for our medical team. This accomplishment reflects not only the dedication and expertise of our doctors but also our continuous commitment to providing patients with the highest level of care.",
      image: "/api/placeholder/400/250",
      usePostContentIcon: true,
      hasTranslation: true,
      likes: 1025,
      comments: 253,
      profileImage: "/api/placeholder/40/40",
    },
    {
      id: 2,
      doctorName: "Dr. Salma Bchir",
      timeAgo: "13 novembre 2023 à 16:48",
      content:
        "Staying hydrated is vital for your health—water helps regulate body temperature, supports digestion, and improves concentration. Aim for at least 6–8 glasses a day, and remember that fruits and vegetables also contribute to your hydration.",
      image: null,
      hasTranslation: true,
      likes: 1025,
      comments: 253,
      profileImage: "/api/placeholder/40/40",
    },
    {
      id: 3,
      doctorName: "Dr. Salma Bchir",
      timeAgo: "12 novembre 2023 à 16:48",
      content:
        "Staying hydrated is vital for your health—water helps regulate body temperature, supports digestion, and improves concentration. Aim for at least 6–8 glasses a day, and remember that fruits and vegetables also contribute to your hydration.",
      image: null,
      hasTranslation: true,
      likes: 1025,
      comments: 253,
      profileImage: "/api/placeholder/40/40",
    },
    {
      id: 4,
      doctorName: "Dr. Salma Bchir",
      timeAgo: "11 novembre 2023 à 16:48",
      content:
        "Staying hydrated is vital for your health—water helps regulate body temperature, supports digestion, and improves concentration. Aim for at least 6–8 glasses a day, and remember that fruits and vegetables also contribute to your hydration.",
      image: null,
      hasTranslation: true,
      likes: 1025,
      comments: 253,
      profileImage: "/api/placeholder/40/40",
    },
  ];

  const [posts, setPosts] = React.useState(initialPosts);

  const handlePublish = (newPost) => {
    // Prepend le nouveau post
    setPosts((prev) => [{ ...newPost }, ...prev]);
  };

  return (
    <div className="feed-container">
      {/* Section principale : PostComposer + PostCards */}
      <section className="main-content" aria-label="Fil d’actualité">
        {/* Compositeur de post */}
        <section className="post-composer-section" aria-label="Composer un post">
          <PostComposer onPublish={handlePublish} />
        </section>

        {/* Liste des posts */}
        <section className="posts-section" aria-label="Liste des posts">
          {posts.map((post) => (
            <article key={post.id} className="post-item" aria-label={`Post de ${post.doctorName}`}>
              <div className="card">
                <PostCard
                  doctorName={post.doctorName}
                  timeAgo={post.timeAgo}
                  content={post.content}
                  image={post.image}
                  attachments={post.attachments || []}
                  hasTranslation={post.hasTranslation}
                  likes={post.likes}
                  comments={post.comments}
                  profileImage={post.profileImage}
                  isFirstPost={!!post.usePostContentIcon}
                />
              </div>
            </article>
          ))}
        </section>
      </section>

      {/* Section latérale : Calendrier + Bannière + Invitation amis */}
      <section className="sidebar" aria-label="Outils et suggestions">
        {/* Calendrier */}
        <section className="calendar-section" aria-label="Calendrier du mois">
          <MonthCalendar />
        </section>

        {/* Bannière publicitaire EMSLIM */}
        <section className="ad-banner-section" aria-label="Promotion">
          <AdBanner />
        </section>

        {/* Section d'invitation d'amis */}
        <section className="invite-friends-section" aria-label="Inviter des amis">
          <InviteFriendsSection />
        </section>
      </section>
    </div>
  );
};

export default Feed;
