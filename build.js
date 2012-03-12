var opra = require('opra');

opra.build(__dirname + '/public/index.html', { inline: true, compress: true }, function(err, result) {
  if (err) {
    console.log(err);
  } else {
    console.log(result);
  }
});
