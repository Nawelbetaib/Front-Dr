# PostCard Component

## Description
Composant React pour afficher les posts des docteurs avec profil, contenu, images et interactions.

## Fonctionnalités
- ✅ Header avec avatar du docteur et informations (nom, date)
- ✅ Bouton "more options" (3 points verticaux)
- ✅ Contenu du post avec texte
- ✅ Bouton "See translation" optionnel
- ✅ Image optionnelle du post
- ✅ Boutons d'interaction (Like, Comment, Share)
- ✅ Compteurs d'engagement (likes, comments)
- ✅ État interactif pour les likes
- ✅ Design responsive avec effets de survol
- ✅ Styling exact selon l'image fournie

## Structure des fichiers
```
PostCard/
├── PostCard.jsx          # Composant principal
├── PostCard.css          # Styles CSS
├── PostCardTest.jsx      # Page de test
└── README.md             # Documentation
```

## Utilisation

```jsx
import PostCard from './components/HomePage/PostCard/PostCard';

function HomePage() {
  return (
    <div>
      <PostCard
        doctorName="Dr. Marie Clark"
        timeAgo="14 novembre 2023 à 16:48"
        content="We are proud to share that our medical team has successfully completed a complex surgery..."
        image="https://example.com/image.jpg"
        hasTranslation={true}
        likes={1025}
        comments={253}
        profileImage="https://example.com/avatar.jpg"
      />
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `doctorName` | string | "Dr. Marie Clark" | Nom du docteur |
| `timeAgo` | string | "14 novembre 2023 à 16:48" | Date/heure du post |
| `content` | string | Texte par défaut | Contenu du post |
| `image` | string | null | URL de l'image (optionnel) |
| `hasTranslation` | boolean | true | Afficher le bouton "See translation" |
| `likes` | number | 1025 | Nombre de likes initial |
| `comments` | number | 253 | Nombre de commentaires |
| `profileImage` | string | null | URL de l'avatar (optionnel) |

## Spécifications CSS implémentées

### Container principal
- Background: #FFFFFF
- Border-radius: 8px
- Box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1)
- Padding: 20px
- Max-width: 600px

### Avatar du profil
- Width/Height: 40px
- Border-radius: 50%
- Background: #E8F4FD (si pas d'image)
- Initiales en #4FC3F7

### Nom du docteur
- Color: #2C3E50
- Font-family: Poppins
- Font-size: 14px
- Font-weight: 600

### Date du post
- Color: #7F8C8D
- Font-family: Poppins
- Font-size: 12px
- Font-weight: 400

### Contenu du post
- Color: #34495E
- Font-family: Poppins
- Font-size: 14px
- Font-weight: 400
- Line-height: 1.5

### Bouton "See translation"
- Color: #4FC3F7
- Font-family: Poppins
- Font-size: 13px
- Font-weight: 500
- Hover: #3FB8EC avec underline

### Boutons d'action
- Color: #7F8C8D
- Font-family: Poppins
- Font-size: 13px
- Font-weight: 500
- Padding: 6px 8px
- Border-radius: 6px
- Hover: background #F8F9FA

### Like button (état actif)
- Color: #FF6B6B
- Hover: background #FFF5F5

### Compteurs d'engagement
- Color: #7F8C8D
- Font-family: Poppins
- Font-size: 13px
- Font-weight: 400

## Fonctionnalités interactives
- **Like**: Toggle avec changement de couleur et compteur
- **Comment**: Callback pour ouvrir les commentaires
- **Share**: Callback pour partager le post
- **More options**: Menu contextuel (à implémenter)
- **See translation**: Affichage de la traduction (à implémenter)

## États gérés
- `isLiked`: État du like (true/false)
- `likeCount`: Nombre de likes dynamique

## Icônes SVG
- **Heart**: Icône de like (vide/plein selon l'état)
- **Comment**: Icône de bulle de commentaire
- **Share**: Icône de partage (flèche vers le haut)
- **More**: 3 points verticaux pour le menu

## Test du composant
Pour tester le composant, vous pouvez utiliser le fichier `PostCardTest.jsx` :

```jsx
import PostCardTest from './components/HomePage/PostCard/PostCardTest';

// Dans votre router ou App.jsx
<PostCardTest />
```

## Responsive Design
- Mobile: Padding réduit, actions en wrap
- Desktop: Layout horizontal optimisé
- Breakpoint: 768px

## Compatibilité
- React 16.8+ (hooks)
- Navigateurs modernes supportant CSS Flexbox
- Font: Poppins

## Exemples d'utilisation

### Post avec image
```jsx
<PostCard
  doctorName="Dr. Marie Clark"
  content="Complex surgery completed successfully..."
  image="https://example.com/surgery.jpg"
  likes={1025}
  comments={253}
/>
```

### Post simple sans image
```jsx
<PostCard
  doctorName="Dr. Salma Bchir"
  content="Staying hydrated is vital for your health..."
  hasTranslation={true}
  likes={1025}
  comments={253}
/>
```

### Post sans traduction
```jsx
<PostCard
  doctorName="Dr. Ahmed Hassan"
  content="Regular exercise is key to maintaining good health..."
  hasTranslation={false}
  likes={892}
  comments={156}
/>
```
