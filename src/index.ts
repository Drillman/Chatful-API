import Server from './server'

let port:number = parseInt(process.env.PORT) || 3000
const server = new Server(port);
server.start()
