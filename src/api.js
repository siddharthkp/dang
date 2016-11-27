const marked = require('marked');
const handlebars = require('handlebars');
const helpers = require('handlebars-helpers')();

const api = (content, options) => {
    handlebars.registerHelper(helpers.is);
    return marked(handlebars.compile(content)(options));
};

module.exports = api;
