// Permet d'éviter tout import récursif
module.exports = {
  rules: {
    "no-restricted-imports": [
      "error",
      {
        paths: ["services"],
        patterns: ["services*", "services"]
      }
    ]
  }
};
