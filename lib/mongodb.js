import mongoose from "mongoose"
import { NextResponse } from "next/server";

const connectMongoDB = async () => {

    try {        
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('MONGODB CONNECTED')
    } catch (error) {
        NextResponse.json({message:'Mongodb no se pudo conectar'})
        console.log(error, 'error de ruta')
    }
};

export default connectMongoDB;