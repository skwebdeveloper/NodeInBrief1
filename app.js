const express = require("express");
const app = express();
const path = require("path");
// Here we have added admin.js
const adminRouter = require("./routes/admin");
const shopRouter = require("./routes/shop");
const bodyParser = require("body-parser");
// Files system module
const fs = require("fs");


// To import static CSS file we use
app.use(express.static(path.join(__dirname, 'public')));



// This is for body-parser
app.use(bodyParser.urlencoded({extended: false}));
// Here I use the admin router
app.use(adminRouter);
// Here I use shop router
app.use(shopRouter);


// This is for 404 Page 
app.use((req, res ,next) => {
     res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});



 app.listen(3000);