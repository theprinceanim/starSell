Meteor.methods({
    sendItemEmail: function(doc){
        var emailText = doc.name + " has sent you an item." + " Name of Item: " + 
                        doc.itemName + ", Category: " + doc.itemCategory + ", Size " + 
                        doc.size + ", Details: " + doc.details + ", Price: " + doc.price + ", Picture: " + doc.picture;
        var emailSubject = doc.name + " has sent you an item."
        Email.send({
              to: "niinyarko@yahoo.com",
              from: doc.email,
              subject: emailSubject,
              text: emailText
            });
        Emails.insert(doc, function(err, id){
        });
    }
})