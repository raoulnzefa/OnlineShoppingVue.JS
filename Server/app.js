// require
let express = require("express"),
  mongoose = require("mongoose"),
  path = require("path"),
  body_parse = require("body-parser"),
  cors = require('cors'),
  
  authrouter = require(path.join(__dirname,"routes","authroute"))
  productRouter = require(path.join(__dirname,'routes','product','productroute.js'));

//open
let app = express();
mongoose.connect("mongodb://localhost:27017/OnlineShoppingVue", {useFindAndModify:false, useNewUrlParser: true, useUnifiedTopology: true });
// middle ware
app.use((request, response, next) => {
  console.log(request.url+" "+ request.method);
  next();
});
//Uses
app.use(body_parse.urlencoded({ extended: false }));
app.use(cors());
app.use(body_parse.json());
app.use('/public',express.static('public'));
app.use(express.static(path.join(__dirname,'public')));

//Routes
app.use(authrouter);
app.use(productRouter);

app.use((request, response, next) => {
  response.send("Sorr, Page in maintanance ...");
  next();
});

app.use((error, request, response, next, ) => {
  response.send(error + "");
});

// listen 
let port = process.env.port || 8088;
app.listen(port, () => {
  console.log("I am listening ...");
});