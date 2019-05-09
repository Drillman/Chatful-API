import Server from './server'

let port:number = parseInt(process.env.PORT) || 8080
console.log(`The port fetch is -> ${process.env.PORT}`)
const server = new Server(port);
server.start()
