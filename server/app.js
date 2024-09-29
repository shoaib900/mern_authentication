require("dotenv").config();
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const routes = require("./router/router");

// middlewares
app.use(cors());
app.use(express.json());
app.use(routes);


mongoose.connect(process.env.DB)
.then(()=> console.log("DB connection established"))



app.get("/", (req, res) => {
    res.send("Welcome to my API!");
})

app.listen(port,()=> console.log(`Server listening...${port}`))