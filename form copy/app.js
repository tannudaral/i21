const express = require("express");
const app = express();
const path = require('path');


app.use(express.static("./public"));
const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;
let _db;


app.get("/", function(req ,res){
  res.sendFile(path.join(__dirname,'/index.html'));
})
app.post("/register",function(req,res){
  console.log(req.body);
  console.log("hi");
  
})

const mongoConnect = (callback) => {
  mongoClient
    .connect(
      "mongodb+srv://AkshitaSingh:94%40Akshita@cluster0.jq1rn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    )
    .then((client) => {
      _db = client.db();
      console.log(client);
      callback();
    })
    .catch((err) => console.log(err));
};

const getDb = () => {
  if (_db) return _db;
};




mongoConnect((client) => {
  app.listen(3000);
  console.log(client);
  
});

