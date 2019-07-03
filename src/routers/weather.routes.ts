import * as express from 'express'
import {Router} from 'express'
import ChatfulHelper from '../helpers/chatful.helper';

const router = Router()

router.get('/weather', function(req: express.Request, res: express.Response) {
  const result = ChatfulHelper.createMessage(`I'm not the weather man for god sake !`)
  res.send(result);
})


export default router
