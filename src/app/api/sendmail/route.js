import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'

export async function POST(request) {

    const {email, text} = await request.json();

    if(!email || !text) return NextResponse.json({message:'Por favor, rellena todo el formulario.'}, {status:404})
    
    const message = {
        from: email,
        to: "aadrimachado1@gmail.com",
        subject: `Portfolio. Alguien te ha escrito algo.`,
        html: `<p>Correo: ${email}<br/>Texto: ${text}</p>`,
    }

    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
          user: "aadrimachado1@gmail.com",
          pass: "rzqyfrekbpyhcnpq",
        },
    });
    try {
        const info = await transporter.sendMail(message);
        return NextResponse.json({message:'Mensaje enviado correctamente!'}, {status:200})
    } catch (error) {
        console.log(error)
        return NextResponse.json({message:'Ha ocurrido un error. Inténtalo nuevamente.'}, {status:404})
    }
}