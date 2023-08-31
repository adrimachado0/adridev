import { NextResponse } from "next/server";
import connectMongoDB from "../../../../lib/mongodb";
import mongoose from "mongoose";
import Proyectos from "../../../../models/proyectosSchema";

export async function GET () {
    try {        
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('MONGODB CONNECTED')
    } catch (error) {
        NextResponse.json({message:'Mongodb no se pudo conectar'})
        console.log(error)
    }
    try {
        const projects = await Proyectos.find({}).exec();
        mongoose.disconnect();
        return NextResponse.json(projects, {status:201});
    } catch (error) {
        console.log(error)
    }
}