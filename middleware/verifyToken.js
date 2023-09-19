const User = require("../models/User");

const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token;
    if(authHeader){
        const token = authHeader.split(" ")[1]; //Bearer token

        jwt.verify(token, process.env.JWT_SEC, async (err, user) => {
            if(err) res.status(403).json('Invalid token')
            req.user = user;

            console.log(user)

            next();
            console.log("ok")
                
        })
    }else{    
        return res.status(401).json("You are not authenicated");
    }
}


const verifyandAuthorization = ((req, res, next) => {
    verifyToken(req, res, () => {
        if(req.user.id === req.params.id){
            next();
        }else{
            res.status(403).json("You are restricted from performing this operation")
        }
    })
})


const verifyandAdmin = ((req, res, next) => {
    verifyToken(req, res, () => {
        if(req.user.isAdmin){
            next();
        }else{
            res.status(403).json("You are restricted from performing this operation")
        }
    })
})

module.exports = {verifyToken, verifyandAuthorization, verifyandAdmin};
