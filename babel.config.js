module.exports = {
  sourceMaps: 'both',
  presets: [
    [
      '@babel/preset-env',
      {
        targets: 'node 12',
        useBuiltIns: 'usage',
        corejs: 3,
      },
    ],
  ],
};
