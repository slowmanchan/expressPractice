var Mustache = require('mustache');
var result = Mustache.render('Hi, {{first}} {{last}}!', {
  first: 'Nicholas',
  last: 'Cage'
});

console.log(result);
