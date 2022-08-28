module.exports = {
  presets: [
    '@babel/preset-typescript',
    '@babel/preset-react',
    [
      '@babel/preset-env',
      {
        modules: false,
        corejs: false
        // targets: { ie: 10, edge: 17, chrome: 44, opera: 12, firefox: 60, safari: 7 }
      }
    ]
  ],
  plugins: [
    'transform-class-properties',
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: false
      }
    ]
  ]
}
