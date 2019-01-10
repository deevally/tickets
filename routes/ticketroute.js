var express = require("express");

var router = express.Router();


var ticket = require("../models/ticket");


//=============
//Ticket  ROUTES
//=============

//Route to show Landing page
router.get("/", function(req, res){
    res.render("landing");
})

//INDEX- Show all Tickets

router.get("/tickets", function(req, res){
   ticket.find({}, function(err, allTickets){
       if(err){
           console.log(err);
       }else{
    res.render("ticket/index", {ticket: allTickets});

       }
   });

});

//show form to create new Tickets
router.get("/tickets/new", function(req, res) {
    res.render("ticket/new");
});


//CREATE- Add new Ticket to database

router.post("/tickets",function(req, res){
    var name = req.body.name;
    var price= req.body.price;
    var quantity = req.body.quantity;
    var description = req.body.description;
    var ticketType = req.body.typeOfTicket;
    
    var newTicket = {name:name, price:price, quantity:quantity, description:description,ticketType:ticketType};
    
    //Create a new Ticket and save to DB

    ticket.create(newTicket, function(err, newlycreatedTicket){
        if(err){
            console.log(err);
        } else{
                res.redirect("/tickets");

        }
    });
    
});

//EDIT TICKET ROUTE
router.get("/tickets/:id/edit" , function(req, res) {
              
    ticket.findById(req.params.id, function(err, editTicket){

   res.render("ticket/edit", {editTicket : editTicket});
});

});


//UPDATE TICKET ROUTE

router.put("/tickets/:id",function(req, res){
    ticket.findByIdAndUpdate(req.params.id, req.body.editTC, function(err, updatedTicket){
        if(err){
            res.redirect("/");
        }else{
            res.redirect("/tickets"); //redirect to + req.params.id
        }
    });
    
});


//DELETE TICKET
router.delete("/tickets/:id", function(req, res){
    ticket.findByIdAndRemove( req.params.id, function(err){
        if(err){
            res.redirect("/");
        }else{
             res.redirect("/tickets");
           
        }
    
       
    });
    });
module.exports = router;