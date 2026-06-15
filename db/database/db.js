import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config()

const mongouri = process.env.mongouri;

async function connectDB() {
    try{
        await mongoose.connect(mongouri)

        console.log('connected')
    }catch(err){
        console.log('unable to connect to db')
        process.exit(1)
    }
}

export default connectDB