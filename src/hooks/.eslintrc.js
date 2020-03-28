// Permet d'éviter tout import récursif
module.exports = {
  rules: {
    "no-restricted-imports": [
      "error",
      {
        paths: ["hooks"],
        patterns: ["hooks*", "hooks", "components*", "router", "theme"]
      }
    ]
  }
};
