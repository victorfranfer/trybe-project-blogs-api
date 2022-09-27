const express = require('express');
const routesUser = require('./routes/user.routes');

// ...

const app = express();

app.use(express.json());

app.use('/login', routesUser);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
