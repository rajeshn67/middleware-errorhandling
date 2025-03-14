const express = require("express");
const app = express();
const {adminauth , userauth}=require("./middlewares/auth");
// handle auth middleware for all requests
app.use("/admin" , adminauth);

app.get("/admin/getAllData", (req, res) => {
    //logic of request is coming from an admin (authorizzation)  
    res.send("got all data");
 });


 app.get("/admin/deleteUser", (req, res) => {  
      //logic of request is coming from an admin (authorizzation) 
    res.send("deleted a user");
});
app.get("/user", userauth, (req, res) => {
    
    res.send("user");
 });
 app.get("/user/login", (req, res) => {
    
    res.send("user login");
 });
 app.get("/user/data",userauth, (req, res) => {
    
    res.send("user data");
 });
app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });


  

// app.use("/", (req, res,next) => {
//     console.log("handleing");
//     next();
//  //res.send("response! 1");
//    });

// middleware
// app.get("/user", (req, res,next) => {
//      console.log("handleing the user  route 1");
//      next();
//   //res.send("response! 1");
    
// },

//  (req, res, next) => {
//   console.log("handleing the user  route 2");
//   //res.send("response 2!");
//   next();
// },
// (req, res,next) => {
//     console.log("handleing the user  route 2");
//    // res.send("response 3!");
//     next();
//   },
//   (req, res,next) => {
//     console.log("handleing the user  route 2");
//    res.send("response 4!");
//    // next();
//   }
// );



