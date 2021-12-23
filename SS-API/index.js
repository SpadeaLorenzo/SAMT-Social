const express = require ("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts")
const conversationRoute = require("./routes/conversations");
const messageRoute = require("./routes/messages");

const app = express();

dotenv.config();

mongoose.connect(process.env.MONGO_URL , {useNewUrlParser : true},()=>{
    console.log("DB connected");
});

//middelware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));


//routes
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/conversations", conversationRoute);
app.use("/api/messages", messageRoute);

app.listen(8080, () =>{
    console.log("Backend running");
})