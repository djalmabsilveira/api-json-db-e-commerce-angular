const jsonServer = require("json-server");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

const port = process.env.port || 3001;

const cors = require('cors');

server.use(middlewares);
server.use(router);
server.listen(port, () => {
  console.log("js");
});

const cors = require('cors');

server.use(
    cors({
        origin: true,
        credentials: true,
        preflightContinue: false,
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    })
);
server.options('*', cors());
