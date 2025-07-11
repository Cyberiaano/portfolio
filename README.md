# Portfolio Personnel

Un portfolio professionnel moderne construit avec React, TypeScript et Tailwind CSS.

## Technologies utilisées

- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- React Router
- React Icons

## Fonctionnalités

- Design responsive (mobile-first)
- Mode sombre / clair
- Animations fluides
- Formulaire de contact
- Sections pour projets, compétences, expérience et formation
- SEO optimisé

## Prérequis

- Node.js (version 16 ou supérieure)
- npm ou yarn

## Installation

1. Clonez le dépôt :
```bash
git clone <votre-repo-url>
cd portfolio
```

2. Installez les dépendances :
```bash
npm install
# ou
yarn install
```

3. Lancez le serveur de développement :
```bash
npm run dev
# ou
yarn dev
```

4. Ouvrez [http://localhost:5173](http://localhost:5173) dans votre navigateur.

## Personnalisation

1. Modifiez les informations personnelles :
   - Remplacez les textes dans chaque composant
   - Ajoutez vos propres images dans `src/assets`
   - Mettez à jour les liens vers vos réseaux sociaux

2. Personnalisez le style :
   - Les couleurs principales sont définies dans `tailwind.config.js`
   - Les styles globaux sont dans `src/styles/globals.css`

3. Ajoutez vos projets :
   - Modifiez le tableau `projects` dans `src/pages/Projects.tsx`
   - Ajoutez vos captures d'écran dans `public/projects`

## Déploiement

Pour créer une version de production :

```bash
npm run build
# ou
yarn build
```

Les fichiers de production seront générés dans le dossier `dist`.

## Structure des dossiers

```
src/
  ├── components/     # Composants réutilisables
  ├── pages/         # Pages/Routes de l'application
  ├── styles/        # Styles globaux et utilitaires
  ├── assets/        # Images, fonts, etc.
  ├── App.tsx        # Composant racine
  └── main.tsx       # Point d'entrée
```

## Licence

MIT
