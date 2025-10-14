# MonthCalendar Component

## Description
Composant React de calendrier mensuel avec navigation et sélection de dates.

## Fonctionnalités
- ✅ Affichage du mois et de l'année (September 2021)
- ✅ Navigation avec flèches gauche/droite
- ✅ Grille de calendrier 7x6 (jours de la semaine + dates)
- ✅ Sélection de date avec mise en surbrillance (19 septembre)
- ✅ Icônes SVG pour la navigation
- ✅ Design responsive avec effets de survol
- ✅ Styling exact selon les spécifications fournies

## Structure des fichiers
```
MonthCalendar/
├── MonthCalendar.jsx          # Composant principal
├── MonthCalendar.css          # Styles CSS
├── MonthCalendarTest.jsx      # Page de test
└── README.md                  # Documentation
```

## Utilisation

```jsx
import MonthCalendar from './components/HomePage/MonthCalendar/MonthCalendar';

function HomePage() {
  return (
    <div>
      <MonthCalendar />
    </div>
  );
}
```

## Spécifications CSS implémentées

### Container principal
- Largeur: 352px
- Padding: 24px
- Gap: 22px
- Border-radius: 8px
- Background: #FFF
- Box-shadow: 0 4px 4px 0 rgba(185, 185, 185, 0.15)

### Header (September 2021)
- Color: #4A5660
- Font-family: "Avenir Next LT Pro"
- Font-size: 14px
- Font-weight: 600
- Line-height: 14px

### Flèches de navigation
- SVG 16x16px
- Couleur: #B5BEC6
- Effet hover avec opacité

### Jours de la semaine (SUN, MON, etc.)
- Largeur: 30px
- Hauteur: 20px
- Couleur: #B5BEC6
- Font-family: "Avenir Next LT Pro"
- Font-size: 12px
- Font-weight: 500

### Dates du calendrier
- Largeur: 30px
- Hauteur: 30px
- Couleur: #4A5660
- Font-family: "Avenir Next LT Pro"
- Font-size: 14px
- Font-weight: 500

### Date sélectionnée (19)
- Border-radius: 29px
- Background: #4FC3F7
- Couleur: #FFF

## Variables CSS
```css
:root {
  --Base-Gray-80: #4A5660;
  --Foundation-Primary-color-Normal: #4FC3F7;
}
```

## Fonctionnalités interactives
- Navigation entre les mois avec les flèches
- Sélection de date au clic
- Effets de survol sur les dates
- État géré avec React hooks
- Calcul automatique des jours du mois
- Positionnement correct du premier jour

## État par défaut
- Mois: September 2021
- Date sélectionnée: 19
- Navigation fonctionnelle vers les mois précédents/suivants

## Test du composant
Pour tester le composant, vous pouvez utiliser le fichier `MonthCalendarTest.jsx` :

```jsx
import MonthCalendarTest from './components/HomePage/MonthCalendar/MonthCalendarTest';

// Dans votre router ou App.jsx
<MonthCalendarTest />
```

## Compatibilité
- React 16.8+ (hooks)
- Navigateurs modernes supportant CSS Grid
- Font: "Avenir Next LT Pro"

## Props (extensibles)
Le composant peut être étendu pour accepter des props :
- `initialDate`: Date initiale à afficher
- `onDateSelect`: Callback lors de la sélection d'une date
- `highlightedDates`: Array de dates à mettre en surbrillance
- `disabledDates`: Array de dates à désactiver
