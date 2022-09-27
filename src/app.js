const express = require('express');
const routesUser = require('./routes/user.router');
const routesLogin = require('./routes/login.router');

// ...

const app = express();

app.use(express.json());

app.use('/login', routesUser);
app.use('/user', routesLogin);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
