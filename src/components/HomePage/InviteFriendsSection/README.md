# InviteFriendsSection Component

## Description
Composant React pour inviter des amis à rejoindre Medilink via email.

## Fonctionnalités
- ✅ Header avec icône Gmail et titre "Invite Your Friends to Join Medilink!"
- ✅ Description encourageante
- ✅ Section d'invitation par email
- ✅ Champ de saisie email avec placeholder "Enter their email"
- ✅ Bouton d'envoi avec icône SVG
- ✅ Validation et gestion d'état
- ✅ Design responsive avec effets de survol
- ✅ Styling exact selon les spécifications fournies

## Structure des fichiers
```
InviteFriendsSection/
├── InviteFriendsSection.jsx          # Composant principal
├── InviteFriendsSection.css          # Styles CSS
├── InviteFriendsSectionTest.jsx      # Page de test
└── README.md                         # Documentation
```

## Utilisation

```jsx
import InviteFriendsSection from './components/HomePage/InviteFriendsSection/InviteFriendsSection';

function HomePage() {
  return (
    <div>
      <InviteFriendsSection />
    </div>
  );
}
```

## Spécifications CSS implémentées

### Container principal
- Hauteur: 204px
- Padding: 24px 23px
- Gap: 10px
- Border-radius: 8px
- Background: #FFF
- Box-shadow: 0 4px 4px 0 rgba(185, 185, 185, 0.10)

### Titre principal
- Color: #3D4C5E
- Font-family: Poppins
- Font-size: 14px
- Font-weight: 600
- Line-height: 20px
- Width: 305px

### Icône Gmail
- Width: 15px
- Height: 11px
- Aspect-ratio: 15/11
- Couleurs Google (bleu, vert, rouge, jaune)

### Description
- Color: #47586E
- Font-family: Poppins
- Font-size: 12px
- Font-weight: 300
- Line-height: 20px
- Height: 40px

### Titre email
- Color: #3D4C5E
- Font-family: Poppins
- Font-size: 14px
- Font-weight: 400

### Champ email
- Width: 250px
- Height: 45px
- Padding: 17px 24px
- Border: 0.25px solid #B2BBC6
- Border-radius: 8px
- Background: #FFF

### Placeholder email
- Color: #B2BBC6
- Font-family: Poppins
- Font-size: 13px
- Font-weight: 400

### Bouton d'envoi
- Width: 45px
- Height: 45px
- Padding: 12px
- Border-radius: 4px
- Background: #4FC3F7
- Aspect-ratio: 1/1

### Icône d'envoi
- Width: 24px
- Height: 24px
- Couleur: white
- SVG avec path de flèche

## Variables CSS
```css
:root {
  --foundation-dark-color-normal-active: #3D4C5E;
  --foundation-dark-color-normal-hover: #47586E;
  --Foundation-Dark-color-Lighter: #B2BBC6;
  --Foundation-Primary-color-Normal: #4FC3F7;
  --Foundation-Surface-color-White: #FFF;
}
```

## Fonctionnalités interactives
- Saisie d'email avec validation
- Envoi d'invitation au clic ou Entrée
- Effets de survol sur le bouton d'envoi
- Reset du champ après envoi
- État géré avec React hooks
- Console.log pour debug (à remplacer par API)

## Contenu par défaut
- Titre: "Invite Your Friends to Join Medilink!"
- Description: "Don't keep it to yourself, invite your friends and family to join you on Medilink today!"
- Sous-titre: "Invite Your Friends Now Via Email"
- Placeholder: "Enter their email"

## Test du composant
Pour tester le composant, vous pouvez utiliser le fichier `InviteFriendsSectionTest.jsx` :

```jsx
import InviteFriendsSectionTest from './components/HomePage/InviteFriendsSection/InviteFriendsSectionTest';

// Dans votre router ou App.jsx
<InviteFriendsSectionTest />
```

## Compatibilité
- React 16.8+ (hooks)
- Navigateurs modernes supportant CSS Flexbox
- Font: Poppins

## Props (extensibles)
Le composant peut être étendu pour accepter des props :
- `onInviteSent`: Callback lors de l'envoi d'invitation
- `title`: Titre personnalisé
- `description`: Description personnalisée
- `placeholder`: Placeholder personnalisé
- `disabled`: État désactivé
