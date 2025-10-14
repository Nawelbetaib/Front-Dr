import React from 'react';
import PostComposer from './PostComposer';
import './PostComposerDemo.css';

const PostComposerDemo = () => {
  return (
    <div className="post-composer-demo">
      <div className="demo-header">
        <h1>PostComposer Component Demo</h1>
        <p>This is a demonstration of the PostComposer component with all its features.</p>
      </div>
      
      <div className="demo-content">
        <PostComposer />
      </div>
      
      <div className="demo-info">
        <h3>Features:</h3>
        <ul>
          <li>✅ Text input area with placeholder</li>
          <li>✅ Toggle switch for "Visible to doctors only"</li>
          <li>✅ Media upload buttons (Image, Video, Document)</li>
          <li>✅ Publish button</li>
          <li>✅ Responsive design with hover effects</li>
          <li>✅ SVG icons as specified</li>
          <li>✅ Exact CSS styling as provided</li>
        </ul>
      </div>
    </div>
  );
};

export default PostComposerDemo;
