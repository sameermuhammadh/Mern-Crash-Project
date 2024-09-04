const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cookieParser = require("cookie-parser");
const {notFound, errorHandler} = require("./middleware/errorMiddleware");
const userRoutes = require("./routes/userRoute");
dotenv.config();
connectDB(); 
const PORT = 5000;

const server = express();
server.use(express.json());
server.use(express.urlencoded({extended: true}))
server.use(cookieParser())

server.use("/api/users", userRoutes);

server.get('/', (req, res) => {
    res.send("sent");
});


server.use(notFound) //These two lines should be on the bottom
server.use(errorHandler)
server.listen(PORT, console.log('Server runnning on Port ', PORT));