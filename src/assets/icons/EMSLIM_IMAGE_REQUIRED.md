# Image EMSLIM Required

## 📁 **Emplacement requis :**
```
doctorparty/frontend/src/assets/icons/emslim.png
```

## 🔧 **Import dans le composant :**
```jsx
import emslimImage from '../../../assets/icons/emslim.png';

// Utilisation :
<img 
  src={emslimImage} 
  alt="EMSLIM Pro Technology" 
  className="emslim-img"
/>
```

## 🎨 **Spécifications de l'image :**

### **Dimensions recommandées :**
- **Largeur** : 400-600px
- **Hauteur** : 273px (selon CSS)
- **Format** : PNG avec transparence ou JPG
- **Ratio** : Environ 2:1 (largeur:hauteur)
- **Taille fichier** : < 500KB pour optimisation web

### **Contenu de l'image :**
Basé sur votre design, l'image devrait contenir :
- **Machine EMSLIM Pro** - Appareil médical professionnel
- **Écran tactile** - Interface utilisateur visible
- **Design moderne** - Couleurs blanches/grises/bleues
- **Qualité professionnelle** - Image haute résolution

### **Style visuel :**
- **Background** : Transparent ou blanc
- **Éclairage** : Professionnel, bien éclairé
- **Angle** : Vue de face ou 3/4
- **Qualité** : Haute résolution pour affichage web

## 🎯 **CSS appliqué à l'image :**

```css
.emslim-image {
  height: 273px;
  align-self: stretch;
  border-radius: 8px;
  flex-shrink: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: lightgray; /* Fallback si image manquante */
}

.emslim-img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Remplit le container en gardant les proportions */
  border-radius: 8px;
}
```

## 📱 **Responsive :**

L'image s'adaptera automatiquement aux différentes tailles d'écran :
- **Desktop** : 273px de hauteur
- **Tablet** : 200px de hauteur  
- **Mobile** : 160px de hauteur
- **Small mobile** : 120px de hauteur

## 🔄 **Fallback :**

Si l'image n'est pas trouvée :
- **Background gris** (`lightgray`) s'affichera
- **Alt text** "EMSLIM Pro Technology" pour l'accessibilité
- **Pas d'erreur** dans la console

## 📝 **Instructions :**

1. **Placez votre image** `emslim.png` dans le dossier :
   ```
   doctorparty/frontend/src/assets/icons/
   ```

2. **Vérifiez le nom** : Le fichier doit s'appeler exactement `emslim.png`

3. **Testez l'affichage** : L'image apparaîtra automatiquement dans le composant AdBanner

4. **Optimisez si nécessaire** : Compressez l'image pour de meilleures performances web

## ✅ **Avantages de cette approche :**

- ✅ **Import ES6** - Meilleure gestion des assets par Vite
- ✅ **Optimisation automatique** - Vite optimise les images importées
- ✅ **Cache busting** - Hash automatique pour le cache navigateur
- ✅ **Type safety** - TypeScript peut vérifier l'existence du fichier
- ✅ **Bundle optimization** - Image incluse dans le build optimisé
- ✅ **Alt text** - Meilleure accessibilité avec balise img
- ✅ **Object-fit cover** - Contrôle précis du redimensionnement

## 🚀 **Résultat :**

Une fois l'image placée, le composant AdBanner affichera :
- **Image EMSLIM** parfaitement dimensionnée et responsive
- **Coins arrondis** (8px border-radius)
- **Redimensionnement intelligent** (object-fit: cover)
- **Fallback élégant** si image manquante
