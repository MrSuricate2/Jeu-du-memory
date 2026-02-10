# 🤝 Contributing to Memory Game

Merci de ton intérêt pour contribuer au Memory Game ! Voici comment tu peux aider.

## 🐛 Signaler un bug

Si tu trouves un bug, merci de :

1. Vérifier que le bug n'a pas déjà été signalé dans les [issues](https://github.com/kevin-ferraretto/memory-game/issues)
2. Créer une nouvelle issue avec :
   - Un titre clair et descriptif
   - Les étapes pour reproduire le bug
   - Le comportement attendu vs le comportement actuel
   - Des captures d'écran si pertinent
   - Ton navigateur et version

## 💡 Proposer une fonctionnalité

Pour proposer une nouvelle fonctionnalité :

1. Ouvre une issue avec le tag `enhancement`
2. Décris clairement la fonctionnalité
3. Explique pourquoi elle serait utile
4. Propose une implémentation si possible

## 🔧 Contribuer au code

### Prérequis

- Connaissance de HTML, CSS et JavaScript
- Un navigateur moderne pour tester
- Git installé sur ta machine

### Workflow

1. **Fork le repository**
   ```bash
   # Clique sur le bouton "Fork" sur GitHub
   ```

2. **Clone ton fork**
   ```bash
   git clone https://github.com/TON-USERNAME/Jeu-du-memory.git
   cd memory-game
   ```

3. **Crée une branche**
   ```bash
   git checkout -b feature/ma-super-feature
   # ou
   git checkout -b fix/correction-bug
   ```

4. **Fais tes modifications**
   - Respecte le style de code existant
   - Commente ton code si nécessaire
   - Teste sur plusieurs navigateurs

5. **Teste tes modifications**
   - Vérifie que le jeu fonctionne correctement
   - Teste sur mobile et desktop
   - Teste en mode clair et sombre

6. **Commit tes changements**
   ```bash
   git add .
   git commit -m "feat: ajout de la fonctionnalité X"
   ```
   
   Types de commit :
   - `feat:` Nouvelle fonctionnalité
   - `fix:` Correction de bug
   - `docs:` Documentation
   - `style:` Changements de style (CSS)
   - `refactor:` Refactoring
   - `perf:` Amélioration des performances
   - `test:` Ajout de tests

7. **Push vers ton fork**
   ```bash
   git push origin feature/ma-super-feature
   ```

8. **Ouvre une Pull Request**
   - Va sur GitHub
   - Clique sur "New Pull Request"
   - Décris tes changements clairement
   - Attends la review

## 📝 Standards de code

### HTML
- Utilise des balises sémantiques
- Indentation : 4 espaces
- Attributs entre guillemets doubles

### CSS
- Utilise les variables CSS existantes
- Nomme les classes de manière descriptive
- Groupe les propriétés logiquement
- Commente les sections importantes

### JavaScript
- Utilise ES6+ (const, let, arrow functions, etc.)
- Nomme les variables de manière descriptive
- Commente les fonctions complexes
- Évite les variables globales inutiles
- Utilise camelCase pour les variables et fonctions

### Exemple de style :
```javascript
// ✅ Bon
function calculateScore(moves, time) {
    const baseScore = moves * 10;
    return baseScore + time;
}

// ❌ Mauvais
function calc(m,t){
return m*10+t
}
```

## 🧪 Tests

Avant de soumettre ta PR, vérifie :

- [ ] Le jeu fonctionne sur Chrome, Firefox, Safari
- [ ] Le responsive fonctionne (mobile, tablette, desktop)
- [ ] Le mode sombre fonctionne correctement
- [ ] Les animations sont fluides
- [ ] Pas d'erreurs dans la console
- [ ] Le code est propre et commenté

## 📋 Checklist de la Pull Request

- [ ] J'ai testé mes modifications
- [ ] Mon code suit le style du projet
- [ ] J'ai commenté les parties complexes
- [ ] Ma PR a un titre descriptif
- [ ] J'ai décrit mes changements dans la PR
- [ ] J'ai mis à jour la documentation si nécessaire

## 💬 Questions ?

Si tu as des questions, n'hésite pas à :
- Ouvrir une issue
- Me contacter via [LinkedIn](https://www.linkedin.com/in/kevin-ferraretto)
- Commenter sur une PR existante

## 🌟 Remerciements

Merci pour ta contribution ! Chaque contribution, petite ou grande, est appréciée. 🙏

---

**Happy coding! 🎮**
