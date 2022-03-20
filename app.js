/* Imports / setup */
const express = require('express');
const typeorm = require('typeorm');
require('dotenv').config();
const app = express();

/* Views setup */
app.set('view engine', 'ejs');
app.set('views', './src/views/pages');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

/* App listen and database connection */
app.listen(process.env.SERVER_PORT, process.env.SERVER_HOSTNAME, (err) => {
    if (err) throw err;
    console.info("[HTTP SERVER :80] Server listening on " + process.env.SERVER_HOSTNAME + ":" + process.env.SERVER_PORT);

    typeorm.createConnection({
        type: process.env.DATABASE_TYPE,
        host: process.env.DATABASE_HOSTNAME,
        port: process.env.DATABASE_PORT,
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        synchronize: false,
        entities: [ './src/entities/*.js' ]
    }).then(connection => console.info("[MYSQL DATABASE :3306] Connection has been established successfully")
    ).catch(error => console.error(error));
});

/* [ROUTING] External routes */
const indexRoutes = require('./src/routes/indexRoutes');

/* [ROUTING] Routes calls */
app.use('/', indexRoutes);

app.use((req, res) => {
    res.status(404).render('404.html.ejs');
});