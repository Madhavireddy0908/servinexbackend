let express = require("express");
let Bookservicelogin = require("../Modal/bookserviceModal");
let jwt = require("jsonwebtoken");
let bookserviceloginRouting = express.Router();
const middleware = require("../Middleware/middleware");

bookserviceloginRouting.post("/", async (req,res)=>{
    let user = new Bookservicelogin(req.body);
    let result = await user.save();
    res.send(result);
});

bookserviceloginRouting.post("/login", async (req,res)=>{
    let {email,password} = req.body;
    let user = await Bookservicelogin.findOne({email: email});
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

bookserviceloginRouting.get(("/bookservice"), middleware, (req,res)=>{
    res.send("Welcome Service Provider");
})

module.exports = bookserviceloginRouting;