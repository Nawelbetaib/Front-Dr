# PostComposer Component

## Description
Composant React pour créer et publier des posts avec des pièces jointes média et des contrôles de visibilité.

## Fonctionnalités
- ✅ Section "Write here..." avec icône d'édition
- ✅ Zone de texte "Express yourself" 
- ✅ Bouton toggle "Visible to doctors only" avec animation
- ✅ Boutons de téléchargement média (Image, Video, Document) avec icônes SVG
- ✅ Bouton "Publish your post"
- ✅ Design responsive avec effets de survol
- ✅ Styling exact selon les spécifications fournies

## Structure des fichiers
```
PostComposer/
├── PostComposer.jsx          # Composant principal
├── PostComposer.css          # Styles CSS
├── PostComposerTest.jsx      # Page de test
└── README.md                 # Documentation
```

## Utilisation

```jsx
import PostComposer from './components/HomePage/PostComposer/PostComposer';

function HomePage() {
  return (
    <div>
      <PostComposer />
    </div>
  );
}
```

## Spécifications CSS implémentées

### Container principal
- Largeur: 758px
- Hauteur: 194px
- Padding: 11px 26px
- Border-radius: 8px
- Background: #FFF
- Box-shadow: 0 4px 4px 0 rgba(185, 185, 185, 0.15)

### Texte "Write here..."
- Color: #3D4C5E
- Font-family: Poppins
- Font-size: 14px
- Font-weight: 400
- Line-height: 16px

### Toggle Switch
- Largeur: 40px
- Hauteur: 20px
- Animation fluide entre les états
- Couleur active: #4FC3F7
- Couleur inactive: #C7C7CC

### Zone de texte "Express yourself"
- Hauteur: 79px
- Padding: 15px 25px
- Border: 0.25px solid #B2BBC6
- Background: #F5F7F9
- Border-radius: 4px

### Boutons média
- Hauteur: 35px
- Padding: 9px 18px
- Background: #F5F7F9
- Border-radius: 4px
- Icônes SVG 16x16px
- Couleur texte: #546881

### Bouton Publish
- Largeur: 179px
- Hauteur: 40px
- Background: #4FC3F7
- Color: #FFF
- Font-family: Inter
- Font-weight: 500

## Variables CSS
```css
:root {
  --foundation-dark-color-normal-active: #3D4C5E;
  --Foundation-Dark-color-Lighter: #B2BBC6;
  --Foundation-Dark-color-Normal: #546881;
  --Foundation-Primary-color-Normal: #4FC3F7;
  --Foundation-Surface-color-White: #FFF;
}
```

## Test du composant
Pour tester le composant, vous pouvez utiliser le fichier `PostComposerTest.jsx` :

```jsx
import PostComposerTest from './components/HomePage/PostComposer/PostComposerTest';

// Dans votre router ou App.jsx
<PostComposerTest />
```

## Fonctionnalités interactives
- Toggle switch animé pour la visibilité
- Effets de survol sur tous les boutons
- Zone de texte fonctionnelle
- Callbacks pour les actions (publish, upload média)
- État géré avec React hooks

## Compatibilité
- React 16.8+ (hooks)
- Navigateurs modernes supportant CSS Grid et Flexbox
- Fonts: Poppins et Inter
