// Permet d'éviter tout import récursif
module.exports = {
  rules: {
    "no-restricted-imports": [
      "error",
      {
        patterns: ["store", "components", "theme/*"]
      }
    ]
  }
};
