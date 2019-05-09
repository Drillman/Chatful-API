import Server from './server'

let port:number = parseInt(process.env.PORT) ||3000
console.log("The port fetch is -> ${port}")
const server = new Server(port);
server.start()
