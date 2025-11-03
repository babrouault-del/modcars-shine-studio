# Mod'Cars – Site vitrine

Application React/Tailwind destinée à promouvoir les services de detailing automobile Mod'Cars (Binic-Étables-sur-Mer).

## Démarrage rapide

```bash
npm install
npm run dev
```

L'application est servie via Vite sur `http://localhost:5173` par défaut.

## Scripts disponibles

- `npm run dev`: lance le serveur de développement.
- `npm run build`: génère la version de production dans `dist/`.
- `npm run preview`: prévisualise la build de production.
- `npm run lint`: exécute ESLint.

## Structure principale

- `src/pages/`: pages principales (Accueil, Services, À propos, Contact).
- `src/components/`: éléments réutilisables (en-tête, pied de page, UI shadcn).
- `src/assets/`: visuels utilisés dans les sections du site.
- `public/`: assets servis statiquement (favicon, images de partage, robots.txt).

## Personnalisation

- Adapter les couleurs globales via `src/index.css` (design tokens Tailwind).
- Mettre à jour les métadonnées SEO/Open Graph dans `index.html`.
- Remplacer/ajouter des visuels dans `src/assets/` ou `public/`.

## Déploiement

Construire le projet avec `npm run build` puis déployer le contenu de `dist/` sur l'hébergement de votre choix (Netlify, Vercel, OVH, etc.).
