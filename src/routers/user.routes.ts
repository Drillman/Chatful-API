import * as express from 'express'
import ChatfulHelper from '../helpers/chatful.helper'
import {Router} from 'express'
import User from '../models/user.schema'

const router = Router()

router.post('/user/register', function(req: express.Request, res: express.Response){
  let newUser = new User(req.body)
  newUser.save(function(err){
    if(err){
      console.error(err)
    }
  })
  const result:object = ChatfulHelper.createMessage("You are registered, to complete the process please check your inbox. You shloud have received an email to set your password. :)")
  res.send(result)
})


export default router
