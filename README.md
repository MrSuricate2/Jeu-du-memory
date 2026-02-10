# Jeu du memory

Un jeu de memory et responsive avec des emojis, développé en HTML, CSS et JavaScript vanilla.

[![Live Demo](https://img.shields.io/badge/demo-live-success)](https://memory.kevin-ferraretto.fr)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/fr/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/fr/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/fr/docs/Web/JavaScript)

## Fonctionnalités

-  **3 niveaux de difficulté** : Facile (8 cartes), Moyen (16 cartes), Difficile (24 cartes)
-  **Chronomètre** en temps réel
-  **Compteur de coups** pour suivre vos performances
-  **Système de scores** sauvegardés localement
-  **Mode sombre** avec sauvegarde de préférence
-  **Responsive design** : mobile, tablette et desktop
-  **Animations fluides** avec effets 3D
-  **30 emojis variés** pour une expérience ludique
-  **PWA ready** : installable comme application

## 🚀 Démo en ligne

Essayez le jeu en direct : [memory.kevin-ferraretto.fr](https://memory.kevin-ferraretto.fr)

## 🛠️ Technologies utilisées

- **HTML5** : Structure sémantique
- **CSS3** : Variables CSS, Grid, Flexbox, Animations
- **JavaScript ES6+** : Logique du jeu, gestion du DOM
- **LocalStorage** : Sauvegarde des scores et préférences
- **PWA** : Web App Manifest pour l'installation

## 📦 Installation

1. **Cloner le repository**
```bash
git clone https://github.com/MrSuricate2/Jeu-du-memory.git
cd Jeu-du-memory
```

2. **Ouvrir le jeu**
```bash
# Option 1 : Ouvrir directement index.html dans votre navigateur

# Option 2 : Utiliser un serveur local
npx serve
# ou
python -m http.server 8000
```

3. **Accéder au jeu**
```
http://localhost:8000
```

## 📂 Structure du projet

```
Jeu-du-memory/
├── index.html          # Page principale
├── styles.css          # Feuille de styles
├── script.js           # Logique du jeu
├── site.webmanifest    # Manifest PWA
├── robots.txt          # Instructions pour les moteurs de recherche
├── sitemap.xml         # Plan du site pour le SEO
├── .htaccess           # Configuration Apache (optionnel)
├── README.md           # Documentation
└── assets/             # Images et favicons
    ├── favicon-16x16.png
    ├── favicon-32x32.png
    ├── apple-touch-icon.png
    ├── icon-192x192.png
    ├── icon-512x512.png
    └── og-image.png
```

## 🎮 Comment jouer

1. **Choisis ton niveau** de difficulté au démarrage
2. **Clique sur les cartes** pour les retourner
3. **Trouve les paires** d'emojis identiques
4. **Finis le plus vite possible** avec le moins de coups
5. **Bats tes records** et améliore-toi !

## 🌟 Fonctionnalités techniques

### Mode sombre
Le jeu détecte et sauvegarde automatiquement votre préférence de thème. Cliquez sur l'icône 🌙/☀️ en haut à droite pour basculer entre les modes.

### Système de scoring
Le score est calculé selon la formule :
```
Score = (Nombre de coups × 10) + Temps en secondes
```
Plus le score est bas, meilleure est votre performance !

### Responsive Design
Le jeu s'adapte automatiquement :
- **Desktop** : Grille optimale avec grand écran
- **Tablette** : Layout adapté pour le tactile
- **Mobile** : Interface ajustée pour petit écran

### Animations
- Retournement de cartes en 3D
- Effet de zoom au survol
- Animation de victoire
- Transitions fluides entre les écrans

## 🔧 Personnalisation

### Ajouter des emojis
Modifiez le tableau `emojis` dans `script.js` :
```javascript
const emojis = [
    '🎮', '🎯', '🎪', '🎨', '🎭', '🎬',
    // Ajoutez vos emojis ici
];
```

### Modifier les couleurs
Utilisez les variables CSS dans `styles.css` :
```css
:root {
    --bg-color: #f5f5f5;
    --text-color: #333;
    --card-bg: white;
}

body.dark-mode {
    --bg-color: #1a1a2e;
    --text-color: #eee;
    --card-bg: #16213e;
}
```

### Ajuster la difficulté
Modifiez `difficultyConfig` dans `script.js` :
```javascript
const difficultyConfig = {
    easy: { pairs: 4, gridClass: 'easy' },
    medium: { pairs: 8, gridClass: 'medium' },
    hard: { pairs: 12, gridClass: 'hard' }
};
```

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

1. **Fork** le projet
2. **Créer une branche** (`git checkout -b feature/AmazingFeature`)
3. **Commit** vos changements (`git commit -m 'Add some AmazingFeature'`)
4. **Push** vers la branche (`git push origin feature/AmazingFeature`)
5. **Ouvrir une Pull Request**

## 📝 Idées d'amélioration

- [ ] Ajouter des effets sonores
- [ ] Implémenter un système de niveaux progressifs
- [ ] Ajouter un mode multijoueur local
- [ ] Créer des thèmes personnalisables
- [ ] Ajouter des achievements/trophées
- [ ] Implémenter un leaderboard en ligne
- [ ] Ajouter des power-ups

## 🐛 Bugs connus

Aucun bug connu actuellement. Si vous en trouvez un, merci de [créer une issue](https://github.com/MrSuricate2/Jeu-du-memory/issues).

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 👨‍💻 Auteur

**Kevin Ferraretto**
- Portfolio : [kevin-ferraretto.fr](https://kevin-ferraretto.fr)
- GitHub : [@kevin-ferraretto](https://github.com/MrSuricate2)
- LinkedIn : [Kevin Ferraretto](https://www.linkedin.com/in/kevin-ferraretto)

## 🙏 Remerciements

- Emojis fournis par Unicode
- Inspiration design moderne et ludique
- Communauté open source

---

⭐ N'oubliez pas de mettre une étoile si vous aimez ce projet !

**Made with ❤️ by Kevin Ferraretto**