// // babel.config.js
// module.exports = function (api) {
//   api.cache(true);
//   return {
//     presets: ["babel-preset-expo"],
//   };
// };
module.exports = function (api) {
  api.cache(true); // Caches the configuration for better performance
  return {
    presets: ["babel-preset-expo"], // Uses the Expo preset for Babel
  };
};