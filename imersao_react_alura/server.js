/* eslint-disable linebreak-style */
/* eslint-disable no-console */
const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewres = jsonServer.defaults();

const port = process.env.PORT || 8080;

server.use(middlewres);
server.use(router);
server.listen(port, () => {
  console.log(`JSON Server is running in ${port}`);
});
