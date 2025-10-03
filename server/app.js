const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
require ("dotenv").config();
require("./conn/conn");
const userApi = require("./routes/user");
const adminApi = require("./routes/admin");


app.use(cors({
    origin:["http://localhost:5173"],
    credentials: true,
}));
app.use(express.json());
app.use(cookieParser());


// app.get("/",(req, res) => {
//     res.send("Hello from server side");
// });

//calling routes
app.use("/api/v1", userApi);
app.use("/api/v1", adminApi);

//server
app.listen(process.env.PORT,()=> {
    console.log(`Server Started AT ${process.env.PORT}`);
});