import React from 'react';
import PostCard from './PostCard';

const PostCardTest = () => {
  // Sample data for different posts
  const posts = [
    {
      id: 1,
      doctorName: "Dr. Marie Clark",
      timeAgo: "14 novembre 2023 à 16:48",
      content: "We are proud to share that our medical team has successfully completed a complex surgery that marked an important milestone for our medical team. This accomplishment reflects not only the dedication and expertise of our doctors but also our commitment to providing patients with the highest level of care.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      hasTranslation: true,
      likes: 1025,
      comments: 253,
      profileImage: null
    },
    {
      id: 2,
      doctorName: "Dr. Salma Bchir",
      timeAgo: "13 novembre 2023 à 14:30",
      content: "Staying hydrated is vital for your health—water helps regulate body temperature, supports digestion, and improves concentration. Aim for at least 6-8 glasses a day, and remember that fruits and vegetables also contribute to your hydration.",
      image: null,
      hasTranslation: true,
      likes: 1025,
      comments: 253,
      profileImage: null
    },
    {
      id: 3,
      doctorName: "Dr. Salma Bchir",
      timeAgo: "12 novembre 2023 à 16:45",
      content: "Staying hydrated is vital for your health—water helps regulate body temperature, supports digestion, and improves concentration. Aim for at least 6-8 glasses a day, and remember that fruits and vegetables also contribute to your hydration.",
      image: null,
      hasTranslation: true,
      likes: 1025,
      comments: 253,
      profileImage: null
    },
    {
      id: 4,
      doctorName: "Dr. Salma Bchir",
      timeAgo: "11 novembre 2023 à 16:41",
      content: "Staying hydrated is vital for your health—water helps regulate body temperature, supports digestion, and improves concentration. Aim for at least 6-8 glasses a day, and remember that fruits and vegetables also contribute to your hydration.",
      image: null,
      hasTranslation: true,
      likes: 1025,
      comments: 253,
      profileImage: null
    }
  ];

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
        PostCard Component Test
      </h1>
      
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        width: '100%',
        maxWidth: '600px'
      }}>
        {posts.map((post) => (
          <PostCard
            key={post.id}
            doctorName={post.doctorName}
            timeAgo={post.timeAgo}
            content={post.content}
            image={post.image}
            hasTranslation={post.hasTranslation}
            likes={post.likes}
            comments={post.comments}
            profileImage={post.profileImage}
          />
        ))}
      </div>
    </div>
  );
};

export default PostCardTest;
