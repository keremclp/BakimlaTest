// filepath: c:\Users\kerem_can\Desktop\BakimlaTest\babel.config.js
console.log('Babel configuration loaded');
module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      "react-native-iconify/plugin",
    ],
  ],
};