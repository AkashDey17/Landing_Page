const express = require("express");
const app = express();
const path = require("path");
const port = 8080;
 

app.use('/public', express.static(path.join(__dirname, 'public')))

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.get("/", (req,res) => {
    res.render("index.ejs");
    
})
app.listen(port, () => {
    console.log(`App is listening to port ${port}`);
});