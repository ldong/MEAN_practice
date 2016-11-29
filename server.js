var express = require('express'),
  path = require('path'),
  bodyParser = require('body-parser'),
  root = __dirname,
  port = process.env.PORT || 1337,
  app = express();

app.use(express.static(path.join(root, './client')));
app.use(express.static(path.join(root, './bower_components')));

require('./server/config/mongoose.js');

var routes_setter = require('./server/config/routes.js');
routes_setter(app);

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
