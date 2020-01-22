# React start

Ce projet est un start-pack pour mes projets. Basé sur un `create-react-app` avec typescript.
Il y a plusieurs lib déjà installées, et divers settings déjà rajoutés.
Ce repo est voué à évoluer au fil du temps.

## Get Started

- `npm run install && npm run start`

## Architecture

Le code est séparé en plusieurs dossiers / sous dossiers :

- components &rarr; contient tout les `dumb components` de l'application
- containers &rarr; contient tout les composants `liés à redux` de l'application
- store
  - actionTypes &rarr; contient toutes les `actionsTypes` du store
  - actions &rarr; contient toutes les actions du store
  - reducer &rarr; contient tous les reducers du store
- theme
  - `<GlobalStyle />` &rarr; pour appliquer du style aux élément en dehors de l'app.
  - theme &rarr; contient toutes les constantes, couleurs, et marges de l'applications.

## Lib installées

- <a href="https://styled-components.com/">Styled-components</a>, pour la création de composant.
- <a href="https://redux.js.org/">Redux</a>, pour la gestion du state de l'application.
- <a href ="https://github.com/zalmoxisus/redux-devtools-extension">Redux-devtools-extension</a>, pour debugger plus facilement le store redux.

## Modification apportées à la configuration

- Gestion des imports absolus
  - `"baseUrl": "src"` dans les `compilerOptions` du `tsconfig.json`
