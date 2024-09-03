const mongoose = require("mongoose")
mongoose.connect('mongodb+srv://root:root@cluster0.xjcqad6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(() => {
    console.log("Mongodb connection successfull")
})
.catch((err) =>{
    console.log(`No Connection ${err}`)
})
const signupsch=new mongoose.Schema({
    fname:{
        type:String,
        required:true,
        trim:true
    },
    lname:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    DOB:{
        type:String,
        required:true,
        trim:true
    },
    address:{
        type:String,
        required:true,
        trim:true 
    },
    gender:{
        type:String,
        required:true,
        trim:true
    },
    state:{
        type:String,
        required:true,
        trim:true
    },
    animal:{
        type:String,
        required:true,
        trim:true
    },
    allergies:{
        type:String,
        required:true,
        trim:true
    }


})
const student=mongoose.model("Candidates",signupsch);
module.exports=student;