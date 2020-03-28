// Permet d'éviter tout import récursif
module.exports = {
  rules: {
    "no-restricted-imports": [
      "error",
      {
        paths: ["common-interfaces"],
        patterns: ["common-interfaces*", "common-interfaces"]
      }
    ]
  }
};
