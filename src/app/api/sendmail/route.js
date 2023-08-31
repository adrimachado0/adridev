import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'

export async function POST(request) {

    const {email, text} = await request.json();

    if(!email || !text) return NextResponse.json({message:'Por favor, rellena todo el formulario.'}, {status:404})
    
    const message = {
        from: email,
        to: process.env.NODEMAILER_EMAIL,
        subject: text,
        html: `<p>${text}</p>`,
    }

    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
          user: process.env.NODEMAILER_EMAIL,
          pass: process.env.NODEMAILER_PW,
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