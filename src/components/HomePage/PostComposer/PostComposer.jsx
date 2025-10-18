import React, { useState, useRef } from 'react';
import Cropper from 'react-easy-crop';
import './PostComposer.css';

/* ========== Helpers for cropping ========== */
async function getCroppedDataURL(imageSrc, cropPixels, rotation = 0) {
  const image = await new Promise((res, rej) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => res(img);
    img.onerror = rej;
    img.src = imageSrc;
  });

  const rads = (rotation * Math.PI) / 180;
  const safeW = Math.ceil(Math.abs(image.width * Math.cos(rads)) + Math.abs(image.height * Math.sin(rads)));
  const safeH = Math.ceil(Math.abs(image.width * Math.sin(rads)) + Math.abs(image.height * Math.cos(rads)));

  const canvas = document.createElement('canvas');
  canvas.width = safeW;
  canvas.height = safeH;
  const ctx = canvas.getContext('2d');

  ctx.translate(safeW / 2, safeH / 2);
  ctx.rotate(rads);
  ctx.drawImage(image, -image.width / 2, -image.height / 2);
  ctx.rotate(-rads);
  ctx.translate(-safeW / 2, -safeH / 2);

  const { x, y, width, height } = cropPixels;
  const data = ctx.getImageData(x, y, width, height);

  const out = document.createElement('canvas');
  out.width = width;
  out.height = height;
  const outCtx = out.getContext('2d');
  outCtx.putImageData(data, 0, 0);

  return out.toDataURL('image/jpeg', 0.92);
}

function dataURLtoFile(dataurl, filename = 'cropped.jpg') {
  const [head, body] = dataurl.split(',');
  const mime = head.match(/:(.*?);/)?.[1] || 'image/jpeg';
  const bin = atob(body);
  const len = bin.length;
  const u8 = new Uint8Array(len);
  for (let i = 0; i < len; i++) u8[i] = bin.charCodeAt(i);
  return new File([u8], filename, { type: mime });
}

const PostComposer = ({ onPublish }) => {
  const [isVisibleToDoctorsOnly, setIsVisibleToDoctorsOnly] = useState(false);
  const [postContent, setPostContent] = useState('');
  const [attachedFiles, setAttachedFiles] = useState([]); // State pour les fichiers attachés
  const imageInputRef = useRef(null);
  const videoInputRef = useRef(null);
  const docInputRef = useRef(null);

  // Crop editor state
  const [editorOpen, setEditorOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [croppedPixels, setCroppedPixels] = useState(null);
  const [aspect, setAspect] = useState(4 / 5);

  const handleToggleVisibility = () => {
    setIsVisibleToDoctorsOnly(!isVisibleToDoctorsOnly);
  };

  const handlePostContentChange = (e) => {
    setPostContent(e.target.value);
  };

  const handlePublish = () => {
    console.log('Publishing post:', {
      content: postContent,
      visibleToDoctorsOnly: isVisibleToDoctorsOnly,
      attachedFiles: attachedFiles.map(f => ({
        name: f.name,
        type: f.type,
        size: f.size
      }))
    });

    const newPost = {
      id: Date.now(),
      doctorName: "Vous",
      timeAgo: new Date().toLocaleString(),
      content: postContent || '',
      attachments: attachedFiles.map(f => ({ id: f.id, type: f.type, preview: f.preview, name: f.name, size: f.size })),
      image: attachedFiles.length > 0 ? attachedFiles[0].preview : null,
      hasTranslation: false,
      likes: 0,
      comments: 0,
      profileImage: null,
      usePostContentIcon: false
    };

    if (typeof onPublish === 'function') {
      onPublish(newPost);
    }

    setPostContent('');
    setAttachedFiles([]);
  };

  const handleImageUpload = () => {
    if (imageInputRef.current) imageInputRef.current.click();
  };

  const handleVideoUpload = () => {
    if (videoInputRef.current) videoInputRef.current.click();
  };

  const handleDocumentUpload = () => {
    if (docInputRef.current) docInputRef.current.click();
  };

  const readFileAsDataURL = (file) =>
    new Promise((res, rej) => {
      const reader = new FileReader();
      reader.onload = () => res(reader.result);
      reader.onerror = rej;
      reader.readAsDataURL(file);
    });

  const extractFrameFromVideo = (file) =>
    new Promise((resolve, reject) => {
      const url = URL.createObjectURL(file);
      const video = document.createElement('video');
      video.preload = 'metadata';
      video.src = url;
      video.muted = true;
      video.playsInline = true;

      const cleanup = () => {
        URL.revokeObjectURL(url);
        video.removeAttribute('src');
      };

      const onLoaded = () => {
        const seekTo = Math.min(0.1, Math.max(0.0, 0.1));
        const onSeeked = () => {
          try {
            const canvas = document.createElement('canvas');
            canvas.width = video.videoWidth || 320;
            canvas.height = video.videoHeight || 180;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            const dataURL = canvas.toDataURL('image/jpeg', 0.9);
            cleanup();
            resolve(dataURL);
          } catch (err) {
            cleanup();
            reject(err);
          }
        };
        video.currentTime = seekTo;
        video.addEventListener('seeked', onSeeked, { once: true });
      };

      video.addEventListener('loadeddata', onLoaded, { once: true });
      video.addEventListener('error', (e) => {
        cleanup();
        reject(e);
      });
    });

  const handleFilesSelected = async (e, type) => {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;

    const newItems = [];
    for (const file of files) {
      const id = Math.random().toString(36).substring(2, 11);
      try {
        if (type === 'image') {
          const data = await readFileAsDataURL(file);
          newItems.push({ id, file, type: 'image', name: file.name, size: file.size, preview: data });
        } else if (type === 'video') {
          let thumb = null;
          try { thumb = await extractFrameFromVideo(file); } catch (err) { console.warn('thumb fail', err); }
          newItems.push({ id, file, type: 'video', name: file.name, size: file.size, preview: thumb });
        } else if (type === 'document') {
          const data = await readFileAsDataURL(file);
          newItems.push({ id, file, type: 'document', name: file.name, size: file.size, preview: data });
        }
      } catch (err) {
        console.error('file read error', err);
      }
    }

    if (newItems.length) setAttachedFiles((prev) => [...prev, ...newItems]);
    e.target.value = '';
  };

  const handleRemoveFile = (fileId) => {
    setAttachedFiles((prev) => prev.filter((f) => f.id !== fileId));
  };

  const openEditor = (index) => {
    if (!attachedFiles[index] || !attachedFiles[index].preview) return;
    setEditingIndex(index);
    setEditorOpen(true);
    setZoom(1);
    setRotation(0);
    setCrop({ x: 0, y: 0 });
    setAspect(4 / 5);
  };

  const onCropComplete = (_, croppedAreaPixels) => {
    setCroppedPixels(croppedAreaPixels);
  };

  const applyCrop = async () => {
    if (editingIndex == null || !croppedPixels) {
      setEditorOpen(false);
      return;
    }
    try {
      const src = attachedFiles[editingIndex].preview;
      const dataUrl = await getCroppedDataURL(src, croppedPixels, rotation);

      setAttachedFiles((prev) =>
        prev.map((f, i) => {
          if (i !== editingIndex) return f;
          const updated = { ...f, preview: dataUrl };
          if (f.file && f.file.type && f.file.type.startsWith('image/')) {
            try {
              const newFile = dataURLtoFile(dataUrl, f.file.name || 'cropped.jpg');
              updated.file = newFile;
            } catch (err) {
              console.warn('Failed to replace file with cropped version', err);
            }
          }
          return updated;
        })
      );
    } finally {
      setEditorOpen(false);
      setEditingIndex(null);
    }
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

      {/* Preview Media - Affiche les images, vidéos et documents en grand */}
      {attachedFiles.length > 0 && (
        <div className="preview-images-container">
          {attachedFiles.map((fileItem, index) => (
            <div key={fileItem.id} className="preview-image">
              {/* Image Preview */}
              {fileItem.type === 'image' && fileItem.preview && (
                <img src={fileItem.preview} alt={fileItem.name} className="preview-img" />
              )}

              {/* Video Preview */}
              {fileItem.type === 'video' && fileItem.preview && (
                <video src={fileItem.preview} controls className="preview-video" />
              )}

              {/* Document Preview */}
              {fileItem.type === 'document' && fileItem.preview && (
                <iframe
                  src={fileItem.preview}
                  className="preview-document"
                  title={fileItem.name}
                />
              )}

              {/* Bottom controls: Edit (left) and Remove (right) — same for all */}
              <div className="preview-edit">
                {fileItem.type !== 'document' && (
                  <button className="edit-photo-btn" type="button" onClick={() => openEditor(index)} title="Edit (crop)">✎ Edit</button>
                )}
                {/* ✅ Remove button for ALL types, including document */}
                <button
                  className="remove-photo-btn"
                  onClick={() => handleRemoveFile(fileItem.id)}
                  aria-label={`Supprimer ${fileItem.name}`}
                  type="button"
                  title="Remove file"
                >
                  ✕
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Cropper Modal */}
      {editorOpen && editingIndex != null && (
        <div className="cropper-backdrop" role="dialog" aria-modal="true">
          <div className="cropper-modal">
            <div className="cropper-header">
              <strong>Adjust image</strong>
              <button className="cropper-close" onClick={() => setEditorOpen(false)} type="button">✕</button>
            </div>

            <div className="cropper-area">
              <Cropper
                image={attachedFiles[editingIndex]?.preview}
                crop={crop}
                zoom={zoom}
                aspect={aspect}
                onCropChange={setCrop}
                onZoomChange={setZoom}
                onRotationChange={setRotation}
                onCropComplete={onCropComplete}
                restrictPosition={false}
              />
            </div>

            <div className="cropper-controls">
              <label className="ctrl">Zoom
                <input type="range" min={1} max={3} step={0.01} value={zoom} onChange={(e) => setZoom(Number(e.target.value))} />
              </label>

              <div className="aspect-group">
                <span>Aspect</span>
                <button className={`asp ${aspect === 1 ? 'active' : ''}`} onClick={() => setAspect(1)} type="button">1:1</button>
                <button className={`asp ${aspect === 4 / 5 ? 'active' : ''}`} onClick={() => setAspect(4 / 5)} type="button">4:5</button>
                <button className={`asp ${aspect === 16 / 9 ? 'active' : ''}`} onClick={() => setAspect(16 / 9)} type="button">16:9</button>
              </div>
            </div>

            <div className="cropper-actions">
              <button className="btn-secondary" onClick={() => setEditorOpen(false)} type="button">Cancel</button>
              <button className="btn-primary" onClick={applyCrop} type="button">Apply</button>
            </div>
          </div>
        </div>
      )}

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

          {/* Hidden file inputs */}
          <input
            type="file"
            ref={imageInputRef}
            accept="image/*"
            style={{ display: 'none' }}
            multiple
            onChange={(e) => handleFilesSelected(e, 'image')}
          />
          <input
            type="file"
            ref={videoInputRef}
            accept="video/*"
            style={{ display: 'none' }}
            multiple
            onChange={(e) => handleFilesSelected(e, 'video')}
          />
          <input
            type="file"
            ref={docInputRef}
            accept=".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.txt,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
            style={{ display: 'none' }}
            multiple
            onChange={(e) => handleFilesSelected(e, 'document')}
          />
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