module.exports = {
  extends: ["react-app"],
  plugins: ["react-hooks"],
  rules: {
    "react-hooks/exhaustive-deps": "warn",
    "import/no-duplicates": ["error", { considerQueryString: true }]
  }
};
