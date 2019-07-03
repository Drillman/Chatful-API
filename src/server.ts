import * as express from "express"
import * as mongoose from 'mongoose'
import * as config from '../config'
// import Router from './routers/router-test'
import UserRouter from './routers/user.routes'
import WeatherRouter from './routers/weather.routes'
// import UserMiddleware from './middlewares/users-middleware'

export default class Server {
  readonly port: number

  constructor(port: number){
    this.port = port
  }

  start(){
    const app = express()

    app.use(express.json());       // to support JSON-encoded bodies
    app.use(express.urlencoded()); // to support URL-encoded bodies

    // app.use('/:userId', UserMiddleware)

    // app.use('/', Router)
    app.use('/',UserRouter)
    app.use('/',WeatherRouter)

    mongoose.connect(`mongodb://${config.DB_USERNAME}:${config.DB_PASSWORD}@${config.DB_URL}`, {useNewUrlParser: true});
    app.listen(this.port, ()=>{
      console.log(`Server is live on port -> ${this.port}`)
    })
  }
}
