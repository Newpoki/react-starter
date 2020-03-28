# **Portfolio**

## **Qu'est-ce que le projet**

Ce projet est tout simplement mon site personnel. Il me permet de partager mon CV, et de pouvoir montrer à qui le souhaite comment j'aime organiser mon code lors de projet `React`.

## **Installation du projet**

Rien de plus simple.

- Téléchargez le projet
- Allez dans le dossier &rarr; `npm i && npm run start`

## **Les Icones**

Pour la gestion des icones, j'utilise le génialissime et très connu site <a href="https://icomoon.io/">Icomoon</a> qui permet de créer une `font-icon` à partir de plusieurs bibliothèques d'icones. Ainsi, contrairement à d'autres solutions, certes plus simples à mettre en place, on ne se retrouve pas avec 5000 icones dont 4980 que l'on n'utilise pas.

Pour rajouter des icones :

- Se rendre sur l'application <a href="https://icomoon.io/app/#/select">Icomoon</a>
- Cliquer sur le bouton `Import Icons` en haut de page
- Séléctionner dans le dossier `public/fonts/icomoon` le fichier `selection.json` afin de pré-selectionner dans l'appli les icones déjà présentes sur le projet
- Séléctionner les nouvelles icones à ajouter puis générer la nouvelle font.
- Mettre dans `public/fonts/icomoon` les fichiers `.eot` `.svg` `.ttf` et `.woff` fraichement obtenus.
- Dans `/src/components/Icon/index.style.ts`, rajouter les nouvelles icones.
- Mettre à jour l'interface typescript du composant `<Icon />`
- You're done.

## **Lib utilisées**

Ce projet est créé à partir du superbe outil que `Facebook` met à disposition <a href="https://github.com/facebook/create-react-app">create-react-app</a>, donc il contient toutes les libs que celui ci contient de base, plus quelques unes qui facilitent la vie (et car je n'aime pas ré-inventer la roue sans raisons particulières) :

- <a href="http://zetcode.com/javascript/dayjs/">DayJs</a> pour la gestion des dates
- <a href="https://redux.js.org/basics/usage-with-react">React Redux</a> pour la gestion centralisée des données
- <a href="https://www.npmjs.com/package/react-animate-height">React-animate-height </a>pour gérer les animations de hauteur automatiquement
- <a href="https://github.com/rexxars/react-markdown">React markdown </a>pour convertir du markdown en composant react
- <a href="https://reacttraining.com/react-router/web/guides/quick-start">React router </a>en tant que router de mon app
- <a href="https://www.npmjs.com/package/react-typist">React typist </a>pour l'animation du texte type rédaction
- <a href="https://www.styled-components.com/">Styled component </a> pour styliser mes composants

## **Archi type d'un composant**

On retrouvera en général 4 fichiers:

- Un `index.ts` qui me servira de `barrel index`
- Un `index.style.ts` où seront déclarer tout les `styled-components` utilisés dans le composant
- Un fichier du même nom que mon composant. Ex: `Header.tsx` si le composant exporté s'appelle `Header`
- Un fichier `interface.d.ts` contenant les déclarations typescript liées au composant, notament pour les props qu'il reçoit.
- Parfois un 5ème fichier, contenant des données utilisées dans le composant. Normalement, ce fichier n'a pas lieux d'être dans une app traditionelle où les données sont stockées en base de données puis récupérées et placées dans des stores redux.
