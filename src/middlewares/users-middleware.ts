import * as express from 'express'

const userId = function(req: express.Request, res: express.Response, next){
  console.log(req.params)
  next()
}

export default userId