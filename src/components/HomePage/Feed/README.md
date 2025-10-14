# Feed Component - HomePage Layout

## Description
Composant principal qui intègre tous les composants de la HomePage dans un layout à deux colonnes, reproduisant fidèlement le design de l'interface DoctorParty.

## Structure du Layout

### Colonne principale (gauche)
- **PostComposer** : Compositeur de posts en haut
- **PostCard** : Liste des posts du feed principal

### Sidebar (droite)
- **MonthCalendar** : Calendrier mensuel interactif
- **AdBanner** : Bannière publicitaire EMSLIM Pro
- **InviteFriendsSection** : Section d'invitation d'amis

## Composants intégrés

### 1. PostComposer
```jsx
import PostComposer from '../PostComposer/PostComposer';
```
- Compositeur de posts avec options de visibilité
- Upload d'images, vidéos et documents
- Bouton de publication

### 2. PostCard
```jsx
import PostCard from '../PostCard/PostCard';
```
- Cartes de posts avec profil docteur
- Contenu, images, likes et commentaires
- Option de traduction

### 3. MonthCalendar
```jsx
import MonthCalendar from '../MonthCalendar/MonthCalendar';
```
- Calendrier mensuel (Septembre 2021)
- Navigation entre les mois
- Sélection de dates

### 4. AdBanner
```jsx
import AdBanner from '../AdBanner/AdBanner';
```
- Bannière publicitaire EMSLIM Pro
- Machine 3D avec animations
- Design gradient bleu

### 5. InviteFriendsSection
```jsx
import InviteFriendsSection from '../InviteFriendsSection/InviteFriendsSection';
```
- Invitation d'amis par email
- Interface simple et intuitive

## Utilisation

```jsx
import Feed from './components/HomePage/Feed/Feed';

function HomePage() {
  return (
    <div>
      <Feed />
    </div>
  );
}
```

## Structure des fichiers
```
Feed/
├── Feed.jsx          # Composant principal
├── Feed.css          # Styles du layout
├── FeedTest.jsx      # Page de test
└── README.md         # Documentation
```

## Layout CSS

### Container principal
```css
.feed-container {
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  gap: 24px;
  background-color: #f5f7fa;
}
```

### Colonne principale
```css
.main-content {
  flex: 1;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
```

### Sidebar
```css
.sidebar {
  width: 320px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  position: sticky;
  top: 20px;
}
```

## Responsive Design

### Desktop (> 1024px)
- Layout à deux colonnes
- Sidebar sticky à droite
- Largeur maximale 1200px

### Tablet (768px - 1024px)
- Sidebar réduite à 280px
- Espacement ajusté

### Mobile (< 768px)
- Layout vertical (une colonne)
- Sidebar au-dessus du contenu principal
- Réorganisation de l'ordre des éléments

### Small Mobile (< 480px)
- Padding réduit
- Espacement optimisé

## Données d'exemple

Le composant utilise des données d'exemple pour les posts :

```jsx
const samplePosts = [
  {
    id: 1,
    doctorName: "Dr. Marie Clark",
    timeAgo: "14 novembre 2023 à 16:48",
    content: "We are proud to share that we recently achieved...",
    image: "/api/placeholder/400/250",
    hasTranslation: true,
    likes: 1025,
    comments: 253,
    profileImage: "/api/placeholder/40/40"
  },
  // ... autres posts
];
```

## Fonctionnalités

### Layout adaptatif
- **Desktop** : Deux colonnes avec sidebar sticky
- **Mobile** : Une colonne avec réorganisation

### Animations
- Hover effects sur les cartes
- Transitions fluides
- Transform translateY(-2px) au survol

### Accessibilité
- Focus states pour navigation clavier
- Outline sur focus-within
- Support prefers-reduced-motion

### Performance
- Sticky positioning pour la sidebar
- Transitions optimisées (transform/opacity)
- Loading states avec shimmer effect

## Styles avancés

### Loading states
```css
.post-item.loading {
  opacity: 0.7;
  pointer-events: none;
}

.post-item.loading::after {
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
  animation: shimmer 1.5s infinite;
}
```

### Mode sombre (préparation)
```css
@media (prefers-color-scheme: dark) {
  .feed-container {
    background-color: #1a1a1a;
  }
  
  .post-item {
    background: #2d2d2d;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  }
}
```

## Intégration avec l'application

### Dans App.jsx ou Router
```jsx
import Feed from './components/HomePage/Feed/Feed';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Feed />} />
      </Routes>
    </Router>
  );
}
```

### Avec Header/Footer
```jsx
function HomePage() {
  return (
    <div className="homepage">
      <Header />
      <Feed />
      <Footer />
    </div>
  );
}
```

## Test du composant

Pour tester le Feed complet :

```jsx
import FeedTest from './components/HomePage/Feed/FeedTest';

// Dans votre router
<FeedTest />
```

## Optimisations futures

1. **Lazy loading** pour les posts
2. **Infinite scroll** pour charger plus de posts
3. **Virtual scrolling** pour de grandes listes
4. **State management** avec Redux/Context
5. **Real-time updates** avec WebSocket
6. **Caching** des données avec React Query
7. **Progressive Web App** features

## Compatibilité

- **React** : 16.8+ (hooks)
- **CSS** : Grid et Flexbox modernes
- **Navigateurs** : Chrome, Firefox, Safari, Edge
- **Mobile** : iOS Safari, Chrome Mobile

## Performance

- **Sticky positioning** pour la sidebar
- **CSS transforms** pour les animations
- **Optimized re-renders** avec React.memo
- **Lazy loading** ready pour les images

## Maintenance

- **Modular structure** : chaque composant indépendant
- **CSS BEM-like** naming convention
- **Responsive breakpoints** standardisés
- **Accessibility** guidelines respectées
