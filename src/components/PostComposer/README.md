# PostComposer Component

## Description
A React component for creating and publishing posts with media attachments and visibility controls.

## Features
- Text input area for post content
- Toggle switch for "Visible to doctors only" setting
- Media upload buttons (Image, Video, Document)
- Publish button
- Responsive design with hover effects

## Usage

```jsx
import PostComposer from './components/PostComposer/PostComposer';

function App() {
  return (
    <div>
      <PostComposer />
    </div>
  );
}
```

## Props
The component currently doesn't accept props but can be extended to include:
- `onPublish`: Callback function when publish button is clicked
- `onMediaUpload`: Callback function for media uploads
- `initialContent`: Initial text content
- `initialVisibility`: Initial visibility setting

## Styling
The component uses CSS custom properties (CSS variables) for theming:
- `--foundation-dark-color-normal-active`: #3D4C5E
- `--Foundation-Dark-color-Lighter`: #B2BBC6
- `--Foundation-Dark-color-Normal`: #546881
- `--Foundation-Primary-color-Normal`: #4FC3F7
- `--Foundation-Surface-color-White`: #FFF

## File Structure
```
PostComposer/
├── PostComposer.jsx
├── PostComposer.css
└── README.md
```

## Dependencies
- React (with hooks)
- Poppins font family
- Inter font family

## Browser Support
Modern browsers that support CSS Grid, Flexbox, and CSS custom properties.
