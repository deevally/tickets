var mongoose    = require("mongoose");


//SET SCHEMA

var TicketSchema = new mongoose.Schema({
    name:String,
    description: String,
    typeOfTicket: String,
    price: String,
    quantity: String,
    
});

var ticket = mongoose.model("ticket",TicketSchema );

module.exports = ticket;
