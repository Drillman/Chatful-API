config =  {
  DB_URL: process.env.DB_URL || 'ds153556.mlab.com:53556/chatful',
  DB_USERNAME: process.env.DB_USERNAME || 'apiuser',
  DB_PASSWORD: process.env.DB_PASSWORD || 'apiuser1',
  WEATHER_API_KEY: 'aaef115d2738ce542bb9078dcfba9474',
  WEATHER_API_URL: 'https://api.openweathermap.org/data/2.5'
}

module.exports = config
