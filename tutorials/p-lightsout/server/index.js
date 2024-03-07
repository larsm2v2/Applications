const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const server_port = 5000

//MIDDLEWARE//
app.use(cors);
app.use(express.json());

//ROUTES//


//SERVER LISTENER//
app.listen(server_port, () => {
    console.log(`The server has started on port ${server_port}`)
})
