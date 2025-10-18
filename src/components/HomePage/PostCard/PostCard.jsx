import React, { useState, useRef, useEffect, useMemo } from 'react';
import './PostCard.css';
import DrIcon from '../../../assets/icons/Dr.png';
import PostContentIcon from '../../../assets/icons/postcontent.png';
import { comments as fakeComments } from '../../../fakedata/Comments';

// Helper relatif (ex: 2h, 5d)
const timeAgo = (d) => {
  const secs = Math.floor((Date.now() - new Date(d).getTime()) / 1000);
  const map = [
    ['y', 31536000], ['mo', 2592000], ['w', 604800],
    ['d', 86400], ['h', 3600], ['m', 60],
  ];
  for (const [k, v] of map) {
    const n = Math.floor(secs / v);
    if (n >= 1) return `${n}${k}`;
  }
  return 'now';
};

const PostCard = ({
  doctorName = "Dr. Marie Clark",
  timeAgo: timeLabel = "14 novembre 2023 à 16:48",
  content = "We are proud to share that our medical team has successfully completed a complex surgery that marked an important milestone for our medical team. This accomplishment reflects not only the dedication and expertise of our doctors but also our commitment to providing patients with the highest level of care.",
  image = null,
  attachments = [], // [{id,type:'document'|'image'|'video', preview,name}]
  hasTranslation = true,
  likes = 1025,
  comments = 253,
  profileImage = null,
  isFirstPost = false,
  postId = null,

  /** ===== Affichage Document =====
   * - documentFullBleed : PDF bord à bord (full width), hauteur en vh
   * - documentViewportHeight : hauteur en vh (ex: 90 = 90vh)
   * - documentHeight : fallback en px si fullBleed=false
   * - documentFitH : ajoute #view=FitH au PDF
   */
  documentFullBleed = true,
  documentViewportHeight = 90,
  documentHeight = 480,
  documentFitH = true,
}) => {
  // ===== Etats
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);

  const [showComposer, setShowComposer] = useState(false);
  const [newCommentText, setNewCommentText] = useState('');

  const [showInlineComments, setShowInlineComments] = useState(false);
  const [inlineComments, setInlineComments] = useState([]);
  const [nextCursor, setNextCursor] = useState(null);
  const [loadingComments, setLoadingComments] = useState(false);

  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState('');

  const [menuOpen, setMenuOpen] = useState(false);
  const menuBtnRef = useRef(null);
  const menuRef = useRef(null);

  // Handlers
  const handleLike = () => {
    setIsLiked(v => !v);
    setLikeCount(c => (isLiked ? c - 1 : c + 1));
  };
  const handleShare = () => console.log('Share clicked');

  const toggleMenu = () => setMenuOpen(p => !p);
  const handleSave = () => { console.log('Save post'); setMenuOpen(false); };
  const handleCopyLink = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => console.log('Link copied'));
    setMenuOpen(false);
  };
  const handleNotInterested = () => { console.log('Not interested'); setMenuOpen(false); };
  const handleUnfollow = () => { console.log('Unfollow', doctorName); setMenuOpen(false); };
  const handleReport = () => { console.log('Report post'); setMenuOpen(false); };

  // Fermer menu si clic à l'extérieur
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuOpen &&
        menuBtnRef.current &&
        !menuBtnRef.current.contains(e.target) &&
        menuRef.current &&
        !menuRef.current.contains(e.target)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  // Comments
  const baseComments = useMemo(() => {
    const arr = Array.isArray(attachments?.comments) && attachments.comments?.length > 0
      ? attachments.comments
      : fakeComments;
    return [...arr].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }, [attachments?.comments]);

  async function fetchInlineComments(cursor = null, limit = 5) {
    const start = cursor ? Number(cursor) : 0;
    const slice = baseComments.slice(start, start + limit);
    const newCursor = start + slice.length < baseComments.length ? String(start + slice.length) : null;
    return { items: slice, nextCursor: newCursor };
  }

  useEffect(() => {
    if (!showInlineComments) return;
    (async () => {
      setLoadingComments(true);
      const { items, nextCursor: c } = await fetchInlineComments(null, 5);
      setInlineComments(items);
      setNextCursor(c);
      setLoadingComments(false);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showInlineComments]);

  const loadMoreComments = async () => {
    if (!nextCursor) return;
    setLoadingComments(true);
    const { items, nextCursor: c } = await fetchInlineComments(nextCursor, 5);
    setInlineComments(prev => [...prev, ...items]);
    setNextCursor(c);
    setLoadingComments(false);
  };

  const totalCommentCount = comments + inlineComments.length;

  // Composer
  const toggleComposer = () => setShowComposer(v => !v);
  const submitNewComment = () => {
    const text = newCommentText.trim();
    if (!text) return;
    const newItem = {
      id: `local-${Date.now()}`,
      createdAt: new Date().toISOString(),
      text,
      user: { name: 'You', title: 'Member', role: 'User', avatar: null },
      _isMine: true,
    };
    if (!showInlineComments) setShowInlineComments(true);
    setInlineComments(prev => [newItem, ...prev]);
    setNewCommentText('');
    setShowComposer(false);
  };

  const beginEdit = (c) => { if (!c?._isMine) return; setEditingId(c.id); setEditingText(c.text || ''); };
  const cancelEdit = () => { setEditingId(null); setEditingText(''); };
  const saveEdit = () => {
    const t = (editingText || '').trim();
    if (!t) return;
    setInlineComments(prev => prev.map(c => (c.id === editingId ? { ...c, text: t } : c)));
    setEditingId(null);
    setEditingText('');
  };
  const deleteComment = (id) => {
    setInlineComments(prev => prev.filter(c => c.id !== id));
    if (editingId === id) { setEditingId(null); setEditingText(''); }
  };

  // Détection document + URL PDF (#view=FitH)
  const hasDocument = Array.isArray(attachments) && attachments.some(a => a.type === 'document');

  const buildPdfUrl = (url) => {
    if (!documentFitH) return url;
    const [base, hash = ""] = String(url).split("#");
    const params = new URLSearchParams(hash);
    if (!params.has("view")) params.set("view", "FitH");
    return `${base}#${params.toString()}`;
  };

  return (
    <div className={`post-card ${hasDocument && documentFullBleed ? 'doc-bleed' : ''}`}>
      {/* Header */}
      <div className="post-header">
        <div className="profile-section">
          <img src={DrIcon} alt="Dr" className="dr-avatar-icon" />
          <div className="profile-info">
            <h3 className="doctor-name">{doctorName}</h3>
            <p className="post-time">{timeLabel}</p>
          </div>
        </div>

        {/* Menu */}
        <div className="post-menu-wrapper">
          <button
            ref={menuBtnRef}
            className="post-menu-btn"
            aria-haspopup="true"
            aria-expanded={menuOpen}
            aria-controls={`post-menu-${postId ?? ""}`}
            onClick={toggleMenu}
            type="button"
            title="Options"
          >
            <span className="menu-dots">•••</span>
          </button>

          <div
            id={`post-menu-${postId ?? ""}`}
            ref={menuRef}
            className={`post-menu ${menuOpen ? "open" : ""}`}
            role="menu"
          >
            <button className="post-menu-item" role="menuitem" onClick={handleSave}>
              <svg viewBox="0 0 24 24" className="post-menu-icon">
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
              </svg>
              Save
            </button>

            <button className="post-menu-item" role="menuitem" onClick={handleCopyLink}>
              <svg viewBox="0 0 24 24" className="post-menu-icon">
                <path d="M10 13a5 5 0 0 0 7.54.54l1.92-1.92a5 5 0 1 0-7.07-7.07l-1.17 1.17" />
                <path d="M14 11a5 5 0 0 0-7.54-.54L4.54 12.38a5 5 0 1 0 7.07 7.07l1.17-1.17" />
              </svg>
              Copy link to post
            </button>

            <button className="post-menu-item" role="menuitem" onClick={handleNotInterested}>
              <svg viewBox="0 0 24 24" className="post-menu-icon">
                <path d="M13.41 12l7.3-7.29a1 1 0 0 0-1.42-1.42L12 10.59 4.71 3.29a1 1 0 1 0-1.42 1.42L10.59 12l-7.3 7.29a1 1 0 0 0 1.42 1.42L12 13.41l7.29 7.3a1 1 0 0 0 1.42-1.42z" />
              </svg>
              Not interested
            </button>

            <button className="post-menu-item" role="menuitem" onClick={handleUnfollow}>
              <svg viewBox="0 0 24 24" className="post-menu-icon">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 8l-6 6" />
                <path d="M16 8l6 6" />
              </svg>
              Unfollow {doctorName}
            </button>

            <div className="post-menu-sep" />

            <button className="post-menu-item danger" role="menuitem" onClick={handleReport}>
              <svg viewBox="0 0 24 24" className="post-menu-icon">
                <path d="M4 4h16l-6 8 6 8H4V4z" />
              </svg>
              Report post
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="post-content">
        <p className="post-text">{content}</p>
        {hasTranslation && (
          <button className="see-translation">See translation</button>
        )}
      </div>

      {/* Media */}
      {isFirstPost ? (
        <div className="post-image">
          <img src={PostContentIcon} alt="Post Content Icon" className="postcontent-image" />
        </div>
      ) : (attachments && attachments.length > 0) ? (
        <div className="post-image post-image--auto">
          {attachments.map(att => {
            if (att.type === 'image' && att.preview) {
              return (
                <div key={att.id} className="attachment-item">
                  <img src={att.preview} alt={att.name} className="preview-img" />
                </div>
              );
            }
            if (att.type === 'video' && att.preview) {
              return (
                <div key={att.id} className="attachment-item">
                  <video src={att.preview} controls className="preview-video" />
                </div>
              );
            }
            if (att.type === 'document' && att.preview) {
              const pdfUrl = buildPdfUrl(att.preview);
              return (
                <div key={att.id} className="attachment-item">
                  <div
                    className={`pdf-container ${documentFullBleed ? 'pdf-full-bleed' : ''}`}
                    style={
                      documentFullBleed
                        ? { height: `${documentViewportHeight}vh` }
                        : { height: `${documentHeight}px` }
                    }
                  >
                    <iframe
                      src={`${pdfUrl}&toolbar=0&navpanes=0&scrollbar=0`}
                      title={att.name}
                      className="pdf-iframe"
                      loading="lazy"
                    />
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
      ) : (
        image && (
          <div className="post-image post-image--auto">
            <img src={image} alt="Post content" />
          </div>
        )
      )}

      {/* Actions */}
      <div className="post-actions">
        <button
          className={`action-button like-button ${isLiked ? 'liked' : ''}`}
          onClick={handleLike}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
            <path d="M4.66675 7.16675V15.1667" stroke={isLiked ? "#3F9CC6" : "#909DAD"} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9.99992 4.41992L9.33325 7.16659H13.2199C13.4269 7.16659 13.6311 7.21478 13.8162 7.30735C14.0013 7.39992 14.1624 7.53432 14.2866 7.69992C14.4108 7.86551 14.4947 8.05775 14.5317 8.2614C14.5688 8.46506 14.5579 8.67454 14.4999 8.87325L12.9466 14.2066C12.8658 14.4835 12.6974 14.7268 12.4666 14.8999C12.2358 15.073 11.9551 15.1666 11.6666 15.1666H2.66659C2.31296 15.1666 1.97382 15.0261 1.72378 14.7761C1.47373 14.526 1.33325 14.1869 1.33325 13.8333V8.49992C1.33325 8.1463 1.47373 7.80716 1.72378 7.55711C1.97382 7.30706 2.31296 7.16659 2.66659 7.16659H4.50659C4.75464 7.16645 4.99774 7.09713 5.20856 6.9664C5.41937 6.83567 5.58953 6.64873 5.69992 6.42659L7.99992 1.83325C8.3143 1.83715 8.62374 1.91203 8.90512 2.05232C9.1865 2.1926 9.43254 2.39466 9.62486 2.64339C9.81717 2.89212 9.9508 3.18109 10.0157 3.48872C10.0807 3.79635 10.0753 4.11468 9.99992 4.41992Z" stroke={isLiked ? "#3F9CC6" : "#909DAD"} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>Like Post</span>
        </button>

        <button
          className={`action-button comment-button ${showComposer ? 'active' : ''}`}
          onClick={toggleComposer}
          title="Add a comment"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M14 10C14 10.3536 13.8595 10.6928 13.6095 10.9428C13.3594 11.1929 13.0203 11.3333 12.6667 11.3333H4.66667L2 14V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H12.6667C13.0203 2 13.3594 2.14048 13.6095 2.39052C13.8595 2.64057 14 2.97971 14 3.33333V10Z" stroke="#546881" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Comment</span>
        </button>

        <button className="action-button share-button" onClick={handleShare}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <g clipPath="url(#clip0_1159_3847)">
              <path d="M9.6907 14.4575C9.71603 14.5206 9.76006 14.5744 9.81688 14.6118C9.8737 14.6492 9.9406 14.6683 10.0086 14.6665C10.0766 14.6648 10.1424 14.6423 10.1973 14.6021C10.2521 14.5618 10.2933 14.5058 10.3154 14.4415L14.6487 1.77479C14.67 1.71571 14.6741 1.65179 14.6604 1.59049C14.6468 1.52919 14.6159 1.47305 14.5715 1.42864C14.5271 1.38423 14.471 1.35338 14.4097 1.33971C14.3484 1.32604 14.2844 1.33012 14.2254 1.35145L1.5587 5.68479C1.49436 5.70685 1.43832 5.74806 1.39808 5.8029C1.35785 5.85774 1.33535 5.92357 1.33361 5.99156C1.33186 6.05955 1.35096 6.12645 1.38834 6.18327C1.42571 6.24009 1.47958 6.28412 1.5427 6.30945L6.82937 8.42945C6.99649 8.49636 7.14833 8.59643 7.27574 8.72361C7.40315 8.85079 7.50349 9.00245 7.5707 9.16945L9.6907 14.4575Z" stroke="#546881" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14.5692 1.4314L7.27588 8.72406" stroke="#546881" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <defs>
              <clipPath id="clip0_1159_3847">
                <rect width="16" height="16" fill="white"/>
              </clipPath>
            </defs>
          </svg>
          <span>Share Post</span>
        </button>

        <div className="engagement-stats">
          <span className="likes-count">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
              <path d="M4.66675 7.16675V15.1667" stroke={isLiked ? "#3F9CC6" : "#909DAD"} strokeLinecap="round" strokeLinejoin="round" />
              <path d="M9.99992 4.41992L9.33325 7.16659H13.2199C13.4269 7.16659 13.6311 7.21478 13.8162 7.30735C14.0013 7.39992 14.1624 7.53432 14.2866 7.69992C14.4108 7.86551 14.4947 8.05775 14.5317 8.2614C14.5688 8.46506 14.5579 8.67454 14.4999 8.87325L12.9466 14.2066C12.8658 14.4835 12.6974 14.7268 12.4666 14.8999C12.2358 15.073 11.9551 15.1666 11.6666 15.1666H2.66659C2.31296 15.1666 1.97382 15.0261 1.72378 14.7761C1.47373 14.526 1.33325 14.1869 1.33325 13.8333V8.49992C1.33325 8.1463 1.47373 7.80716 1.72378 7.55711C1.97382 7.30706 2.31296 7.16659 2.66659 7.16659H4.50659C4.75464 7.16645 4.99774 7.09713 5.20856 6.9664C5.41937 6.83567 5.58953 6.64873 5.69992 6.42659L7.99992 1.83325C8.3143 1.83715 8.62374 1.91203 8.90512 2.05232C9.1865 2.1926 9.43254 2.39466 9.62486 2.64339C9.81717 2.89212 9.9508 3.18109 10.0157 3.48872C10.0807 3.79635 10.0753 4.11468 9.99992 4.41992Z" stroke={isLiked ? "#3F9CC6" : "#909DAD"} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {likeCount}
          </span>

          <button
            type="button"
            className="comments-count"
            onClick={() => setShowInlineComments(v => !v)}
            aria-expanded={showInlineComments}
            style={{ background: 'transparent', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4 }}
            title="Show comments"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M14 10C14 10.3536 13.8595 10.6928 13.6095 10.9428C13.3594 11.1929 13.0203 11.3333 12.6667 11.3333H4.66667L2 14V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H12.6667C13.0203 2 13.3594 2.14048 13.6095 2.39052C13.8595 2.64057 14 2.97971 14 3.33333V10Z" stroke="#909DAD" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {totalCommentCount} comments
          </button>
        </div>
      </div>

      {/* Composer */}
      {showComposer && (
        <div className="pcc-composer" role="region" aria-label="Write a comment">
          <div className="pcc-composer-label">Write a comment</div>
          <textarea
            className="pcc-textarea"
            placeholder="Write your comment..."
            value={newCommentText}
            onChange={(e) => setNewCommentText(e.target.value)}
          />
          <div className="pcc-composer-actions">
            <button className="pcc-btn" onClick={() => { setShowComposer(false); setNewCommentText(''); }}>
              Cancel
            </button>
            <button className="pcc-btn primary" onClick={submitNewComment} disabled={!newCommentText.trim()}>
              Post
            </button>
          </div>
        </div>
      )}

      {/* Inline comments */}
      {showInlineComments && (
        <div className="pc-comments">
          <div className="pcc-list">
            {inlineComments.map((c) => {
              const mine = !!c._isMine;
              const isEditing = editingId === c.id;

              return (
                <div key={c.id || c._id} className="pcc-item">
                  {c.user?.avatar ? (
                    <img className="pcc-av" src={c.user.avatar} alt={c.user?.name || "user"} />
                  ) : (
                    <div
                      className="pcc-av"
                      style={{ backgroundColor: '#3F9CC6', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                      {(c.user?.name || 'U').charAt(0)}
                    </div>
                  )}
                  <div className="pcc-body">
                    <div className="pcc-line1">
                      <span className="pcc-name">{c.user?.name || "Member"}</span>
                      {c.user?.title && <span className="pcc-title">• {c.user.title}</span>}
                      <span className="pcc-time">{timeAgo(c.createdAt)}</span>
                    </div>
                    {c.user?.role && <div className="pcc-role">{c.user.role}</div>}

                    {!isEditing && <div className="pcc-text">{c.text}</div>}

                    {isEditing && (
                      <div className="pcc-edit-area">
                        <textarea
                          className="pcc-textarea"
                          value={editingText}
                          onChange={(e) => setEditingText(e.target.value)}
                        />
                        <div className="pcc-edit-controls">
                          <button className="pcc-btn" onClick={cancelEdit}>Cancel</button>
                          <button className="pcc-btn primary" onClick={saveEdit} disabled={!editingText.trim()}>
                            Save
                          </button>
                        </div>
                      </div>
                    )}

                    {mine && !isEditing && (
                      <div className="pcc-actions-row">
                        <button className="pcc-action-link" onClick={() => beginEdit(c)}>Edit</button>
                        <button className="pcc-action-link" onClick={() => deleteComment(c.id)}>Delete</button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

            {(!inlineComments || inlineComments.length === 0) && !loadingComments && (
              <div className="pcc-empty">No comments yet.</div>
            )}

            {nextCursor && (
              <button className="pcc-more" onClick={loadMoreComments} disabled={loadingComments}>
                {loadingComments ? "Loading…" : "Show more comments"}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PostCard;