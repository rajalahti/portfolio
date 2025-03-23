module.exports = {
  plugins: [
    require('autoprefixer')({
      overrideBrowserslist: [
        'last 2 versions',
        '> 1%',
        'not dead'
      ],
      flexbox: 'no-2009',
      grid: 'autoplace',
      // Disable the warnings
      ignoreUnknownVersions: true,
      silent: true
    })
  ]
};