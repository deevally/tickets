var express     = require("express"),

     app        = express(),

mongoose        = require("mongoose"),
    

methodOverride  = require("method-override"),


bodyParser      = require("body-parser"),



ticket      = require("./models/ticket");


//Requiring Routes

   var ticketRoute = require("./routes/ticketroute");

mongoose.connect("mongodb://localhost/tickets", {useNewUrlParser: true});


app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));

// USE TICKET  ROUTE

app.use(ticketRoute);







app.listen(3000, function(){
    console.log("Ticket Server has started");
  
  });