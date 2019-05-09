import * as express from "express"
import Router from './routers/router-test'
import UserRouter from './routers/user.routes'
import UserMiddleware from './middlewares/users-middleware'

export default class Server {
  readonly port: number

  constructor(port: number){
    this.port = port
  }

  start(){
    const app = express()
    app.use('/:userId', UserMiddleware)
    app.use('/', Router)
    app.use('/',UserRouter)
    app.listen(this.port, ()=>{
      console.log(`Server is live on port -> ${this.port}`)
    })
  }
}
