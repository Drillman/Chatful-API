import {Schema, model} from 'mongoose'

const userSchema:Schema = new Schema({
  firstname : String,
  lastname : String,
  email: String,
  password: String,

  registrationDate: Date
})

const User = model('User', userSchema)
export default User
