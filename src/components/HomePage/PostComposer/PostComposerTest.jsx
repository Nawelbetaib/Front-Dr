import React from 'react';
import PostComposer from './PostComposer';

const PostComposerTest = () => {
  return (
    <div style={{ 
      padding: '40px', 
      backgroundColor: '#f0f0f0', 
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div>
        <h1 style={{ 
          textAlign: 'center', 
          marginBottom: '30px',
          fontFamily: 'Poppins',
          color: '#1D242D'
        }}>
          PostComposer Component Test
        </h1>
        <PostComposer />
      </div>
    </div>
  );
};

export default PostComposerTest;
