const express=require("express");
const mongoose=require("mongoose");




const connect= ()=>
{
    return mongoose.connect("mongodb+srv://aniket:aniket_123@cluster0.lvpjs.mongodb.net/test?retryWrites=true&w=majority")
}

const app=express();

app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded());


app.set("view engine","ejs");

app.listen(1777,async()=>
{
    await connect();
    console.log("listening on port no 1777");
})



const courseController= require("./controllers/course.controller")
const bookmarkController= require("./controllers/bookmark.controller");
const { urlencoded } = require("express");


app.use("/courses",courseController);
app.use("/bookmarks",bookmarkController);