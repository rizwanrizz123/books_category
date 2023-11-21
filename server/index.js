//import json-server library in index.js file 
const jsonServer = require('json-server')

//create json-server
const booksServer = jsonServer.create()

//create path to json file
const router = jsonServer.router('db.json')

//middleware to convert json to js
const middleware = jsonServer.defaults()

//use middleware and router in server
booksServer.use(middleware)
booksServer.use(router)

//setup part for running server
const port = 5000 || process.env.PORT 

//to listen server for resolving request from client
booksServer.listen(port,()=>{
    console.log(`booksServer started at ${port} and waiting for the request`);
 })