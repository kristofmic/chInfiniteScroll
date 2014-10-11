module.exports = {
  dev: {
    options: {
      process: function(src, filepath) {
        return '\n// ' + filepath + '\n' + src;
      }
    },
    src: [
      '<%= jsPath %>/infinite_scroll_module.js',
      '<%= jsPath %>/**/*.js'
    ],
    dest: '<%= distPath %>/chInfiniteScroll.js'
  }
};
