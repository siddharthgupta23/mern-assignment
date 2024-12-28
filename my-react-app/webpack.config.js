module.exports = {
    resolve: {
      fallback: {
        process: require.resolve('node-libs-browser/mock/process'),
      },
    },
  };
  