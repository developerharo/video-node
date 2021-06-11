const express = require('express');
const initDB = require('./config/db');
const app = express();

const port = 3001;

const userRoutes = require('./app/routes/user');
const itemsRoutes = require('./app/routes/items');

// for parsing json
app.use(express.json());

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(userRoutes);
app.use(itemsRoutes);

app.listen(port, () => {
    console.log('App on line!');
});

initDB();
