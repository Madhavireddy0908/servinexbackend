let express = require("express");
let Adminlogin = require("../Modal/adminloginModal");
let jwt = require("jsonwebtoken");
let adminloginRouting = express.Router();
const middleware = require("../Middleware/middleware");

adminloginRouting.post("/", async (req,res)=>{
    let user = new Adminlogin(req.body);
    let result = await user.save();
    res.send(result);
});

adminloginRouting.post("/login", async (req,res)=>{
    let {email,password} = req.body;
    let user = await Adminlogin.findOne({email: email});
    if(!user){
        res.send("User not Found");
    }
    else if(user.password !== password){
        res.send("Invalid Password");
    }
    else{
        let payload = {
            user: {
                id: user._id,
            }
        }
        jwt.sign(payload,"jwtstring",{expiresIn:36000},(err,token)=>{
            if(err) throw err;
            res.send({token});
        });
    }
});

adminloginRouting.get(("/admindashboard"), middleware, (req,res)=>{
    res.send("Welcome Admin");
})

module.exports = adminloginRouting;