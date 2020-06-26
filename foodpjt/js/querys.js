var totalearning = 0;
var total =0;
var orders=0;
var users = 0;
var size =0;
   db.collection("tiffen_service_details/saibhavadeesh@gmail.com/acceptedOrders").get().then(function(querySnapshot) {

       querySnapshot.forEach(function(doc) {
        totalearning += doc.data().totalCost;
        });
       earning.innerHTML += "<h3>" + totalearning + "</h3>";
    });


  
    db.collection("tiffen_service_details/saibhavadeesh@gmail.com/acceptedOrders").get().then(function(querySnapshot) {
    
        querySnapshot.forEach(function(doc) {
            total += doc.data().totalCost;
        });
        earnings.innerHTML += "<h3>" + total + "</h3>";
    });

    db.collection("tiffen_service_details").get().then(snap => {
        size = snap.size // will return the collection size
        totalvendors.innerHTML += "<h3>" + size + "</h3>";
     });


   db.collection("customer_collection").get().then(function(querySnapshot){
        querySnapshot.forEach(function(doc){
            users++;
         });
         totalusers.innerHTML += "<h3>" + users + "</h3>";
   });

   db.collection("tiffen_service_details/saibhavadeesh@gmail.com/acceptedOrders").get().then(function(querySnapshot){
        querySnapshot.forEach(function(doc){
            orders++;
          });
        totalorders.innerHTML += "<h3>" + orders + "</h3>";
    });
    
    db.collection("tiffen_service_details").get().then(snap => {
        size = snap.size // will return the collection size
        totalvendor.innerHTML += "<h3>" + size + "</h3>";
     });