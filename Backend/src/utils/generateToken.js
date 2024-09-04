const jwToken = require("jsonwebtoken");

const generateToken = (res, userId) =>{
     const token = jwToken.sign({userId}, process.env.JWT_SECRET_KEY, {
        expiresIn: "10d",
     })

     res.cookie("jwt", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        sameSite: "strict",
        maxAge: 864000000 
     })
    }

module.exports = generateToken;