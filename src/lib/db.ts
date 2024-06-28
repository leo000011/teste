import mongoose from 'mongoose'


const MONGODB_URL = process.env.DATABASE_URL

const connect = async () => {
    const connectionState = mongoose.connection.readyState;

    if (connectionState === 1) {
        console.log("already connected!")
        return
    }

    if (connectionState === 2) {
        console.log('connecting...')
        return
    }

    try {
        mongoose.connect(MONGODB_URL, {
            dbName: "LojaDaInternet",
            bufferCommands: false
        })

        console.log('connected')
    } catch (err) {
        console.log('Error in connecting in database', err)
        throw new Error(`Error connecting to database: ${err}`)
    }

}

export default connect