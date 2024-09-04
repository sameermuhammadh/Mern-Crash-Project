const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const expressAsyncHandler = require("express-async-handler");
const checkToken = expressAsyncHandler( async (req,res, next) => {
  let token = req.cookies.jwt;

  if(token){
    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user = await User.findById(decodedToken.userId).select("-password");
        next();
    } catch (error){
        res.status(401);
        throw new Error("Invalid token !");
    }
  } else {
    res.status(401)
    throw new Error("Unauthorized !")
  }
});

module.exports = checkToken;