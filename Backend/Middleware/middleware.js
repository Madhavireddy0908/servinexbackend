let jwt = require("jsonwebtoken");

let middleware = (req,res,next)=>{
    let token = req.header("x-token");
    if(!token){
        res.send("Token not Found");
    }
    let decode = jwt.verify(token,"jwtstring");
    req.user = decode.user;
    next();
}

module.exports = middleware;