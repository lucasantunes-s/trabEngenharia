import mongoose from 'mongoose'

mongoose.connect('mongodb://mongodb:27017/mydb')

const clientSchema = new mongoose.Schema({
  objectID: {
    type: String,
    unique: true,
  },
  name: String,
  cpf: {
    type: String,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  friends: [String],
})

export const MongoClient = mongoose.model('MongoClient', clientSchema)
