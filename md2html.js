const marked = require('marked');

// eslint-disable-next-line arrow-body-style
module.exports = (markdown, cliOptions) => {
  return marked(markdown, {
    gfm: cliOptions.gfm,
  });
};
