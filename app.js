const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');

const app = express();

//Setting pug as view engine
// app.set("view engine", "pug");
// app.set("views", "views");

//Setting Handlerbar Template Engine
app.engine("hbs", expressHbs({layoutsDir: "views/layouts/", defaultLayout: "main-layout", extname: "hbs"}));
app.set("view engine", "hbs");
app.set("views", "views");


const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const rootDir = require('./util/path');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    // res.status(404).sendFile(path.join(rootDir, 'views', 'page-not-found.html'));
    res.render('404', {docTitle: 'Page Not Found'});
});

app.listen(3000);
