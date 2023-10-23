import { NextResponse } from "next/server";
import connectMongoDB from "../../../../lib/mongodb";
import mongoose from "mongoose";
import Proyectos from "../../../../models/proyectosSchema";

export async function GET () {
    await connectMongoDB();
    try {
        const projects = await Proyectos.find({}).exec();
        return NextResponse.json(projects, {status:201});
    } catch (error) {
        console.log(error)
    }
}