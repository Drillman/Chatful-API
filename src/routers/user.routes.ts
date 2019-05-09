import * as express from 'express'
import {Router} from 'express'

const router = Router()

router.post('/user/register', function(req: express.Request, res: express.Response){
  const result:object = {
    "messages": [
      {"text": "You are registered, to complete the process please check your inbox to define your password. :)"},
    ]
   }
  res.send(result)
})


export default router
