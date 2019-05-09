import * as express from 'express'
import {Router} from 'express'

const router = Router()

router.get('/', function(req: express.Request, res: express.Response){
  res.send('coucou')
})

router.get('/test', function(req: express.Request, res: express.Response){
  res.send('this is the test route')
})

export default router
