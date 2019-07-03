import * as express from 'express'
import {Router} from 'express'
import * as request from "request-promise";
import * as config from '../../config'
import ChatfulHelper from '../helpers/chatful.helper';

const router = Router()

router.post('/weather', function(req: express.Request, res: express.Response) {
  const city = req.body.city
  request
    .get(`${config.WEATHER_API_URL}/weather?APPID=${config.WEATHER_API_KEY}&q=${city}&units=metric`)
    .then(result =>{
      try {
        result = JSON.parse(result)
      } catch (err) {
        console.error(result)
        console.error(err)
      }
      const response = ChatfulHelper.createMessage(`Currently in ${city} there's ${result.weather[0].description} and the temperature is ${result.main.temp} degres celcius`)
      res.json(response)
    })
    .catch(error => {
      console.error(error)
      if (error.statusCode == 404) {
        const response = ChatfulHelper.createMessage(`It seems that ${city} does not exist`)
        return res.json(response)
      }
      const response = ChatfulHelper.createMessage('An error occure while fetching the weather. Sorry ...')
      res.json(response)
    })
})


export default router
