import express from "express";
import cors from "cors";
import ninjaRoute from "./routes/ninjas-route.js"

const server = express();
server.use(express.json());
server.use(cors());

server.use(ninjaRoute);

server.listen(4000, () => {
    console.log(`Server running!`);
})