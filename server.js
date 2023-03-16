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

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://atomic-design-e-commerce-angular.vercel.app/')
  res.header('Access-Control-Allow-Headers', '*')
  next()
})
