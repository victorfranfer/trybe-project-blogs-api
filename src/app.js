const express = require('express');
const routersLogin = require('./routes/login.router');
const routesUser = require('./routes/user.router');
const routesCategory = require('./routes/category.router');

// ...

const app = express();

app.use(express.json());

app.use('/login', routersLogin);
app.use('/user', routesUser);
app.use('/categories', routesCategory);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
