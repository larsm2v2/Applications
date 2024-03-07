const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "workingATL7!",
    host: "locahost",
    port: 5432,
    database: "p-lightsout"
});