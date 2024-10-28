const express = require("express");
const mongoose = require("mongoose");
const Client = require("./Models/client.models.js");
const clientRoute = require("./Routes/client.routes.js")
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/api/client', clientRoute);

mongoose.connect("mongodb+srv://lucasedu292003:IuG5AAbyNyMs1AqJ@cluster0.bkyu0.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
        console.log("Server is running on port 3000");
    });
})
.catch(() => {
     console.log("Connection failed!");
});