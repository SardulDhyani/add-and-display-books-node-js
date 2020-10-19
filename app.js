const express = require('express');
const bodyParser = require('body-parser');

const libraryRoutes = require('./routes/library');

const app = express();

// Configuring default templating engine
app.set('view engine', 'ejs');
app.set('views', 'views');

// Configuring Body Parser
app.use(bodyParser.urlencoded( { extended : false } ));


app.use(libraryRoutes);

app.listen(3000);