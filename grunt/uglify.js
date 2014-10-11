module.exports = {
  dist: {
    options: {
      compress: {
        drop_console: false
      }
    },
    files: {
      '<%= distPath %>/chInfiniteScroll.min.js': [
        '<%= distPath %>/chInfiniteScroll.js'
      ]
    }
  }
};