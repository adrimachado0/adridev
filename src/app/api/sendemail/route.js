import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'

export async function POST(request) {

    const {email, text} = await request.json();
    
    if(!email || !text) return NextResponse.json({message:'Por favor, rellena todo el formulario.'})
    
    console.log('prueba')

    const message = {
        from: email,
        to: 'aadrimachado1@gmail.com',
        subject: text,
        html: `<p>${text}</p>`,
    }

    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
          user: 'aadrimachado1@gmail.com',
          pass: 'rzqyfrekbpyhcnpq',
        },
    });
    try {
        const info = await transporter.sendMail(message);
        return NextResponse.json({message:'Email enviado'}, {status:200})
    } catch (error) {
        console.log(error)
        return NextResponse.json({message:error.message}, {status:404})
    }
}