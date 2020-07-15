const express = require("express");
const helmet = require("helmet");
const morgan = require('morgan')
const carRouter =require('./routes/carRouter')

const server = express();
server.use(helmet());
server.use(express.json());

server.use('/api/car-dealer', carRouter)

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));