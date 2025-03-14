const express = require('express');
const app = express();
//order of routes are matters
//....

// This will only handele GET call to /user 
app.get("/user", (req, res)=> {
  
    res.send({firstname:"Rajesh",Lastname:"Narwade"}); 
});


 app.post("/user", (req, res)=> {
    // saving data to the database
   res.send('data susccessfully saved to the database');
 }); 
 app.delete("/user", (req, res)=> {
    // delete data from the database
   res.send('data susccessfully deleted from the database');
 });  


//this will match all the http methods API calls to /test
app.use("/test", (req, res)=> {
  
    res.send('Hello from the server side... Test');
});



// app.use("/login", (req, res)=> {
  
//     res.send('Hello from the server side... for login');
// });
// app.use("/dashboard", (req, res)=> {
  
//     res.send('Hello from the server side... for dashboard');
// });
// app.use("/", (req, res)=> {
  
//     res.send('Hello from the server side... for home ');
// });
app.listen(3000 ,()=> { 
    console.log('Server is running on port 3000');
});