import pg from "pg";

const {Pool} = pg;

const connectionDB = new Pool({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "123456",
    database: "narutin-db"
});

export {connectionDB}