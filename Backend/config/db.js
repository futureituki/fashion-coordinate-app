const mongoose = require('mongoose')

const connectDB = async () =>{
    try {
      await mongoose.connect(`mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@fashion-db.n9wpwxr.mongodb.net/?retryWrites=true&w=majority`)
      console.log('MongoDB Connected')
    } catch (err){
        console.error(err)
        process.exit(1)
    }
}
module.exports = connectDB