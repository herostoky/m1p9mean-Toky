const express    = require('express');
const app        = express();
const bodyParser = require('body-parser');
// ========================
// Controllers
// ========================
const userController = require('../controller/userController');

// ========================
// Middlewares
// ========================
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ========================
// Routes
// ========================
app.post('/user/login', userController.login);
app.get('/users', userController.findAllUser);

// ========================
// Listen
// ========================
const port = 3000;
app.listen(port, function () {
    console.log(`listening on ${port}`)
})