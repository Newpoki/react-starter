// Permet d'éviter tout import récursif
module.exports = {
  rules: {
    "no-restricted-imports": [
      "error",
      {
        paths: ["components"],
        patterns: ["components*", "components", "store", "services"]
      }
    ]
  }
};
