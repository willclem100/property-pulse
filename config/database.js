import mongoose from 'mongoose'

let connected = false

const connectDB = async () => {
  // only fields in schema are saved to the database
  mongoose.set('strictQuery', true)

  // If the database is already connected, don't connect again
  if (connected) {
    console.log('MongoDB is connected')
    return
  }

  //connect to MongoDb
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    connected = true
  } catch (error) {
    console.log(error)
  }
}

export default connectDB
