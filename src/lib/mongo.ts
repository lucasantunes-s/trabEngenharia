import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost:27017')

const referralSchema = new mongoose.Schema({
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

export const MongoClient = mongoose.model('referralSchema', referralSchema)
