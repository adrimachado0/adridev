import axios, { AxiosError } from 'axios';
import { NextResponse } from 'next/server';

const sendEmail = async (email, text) => {
  try {    
    const res = await axios.post(process.env.NEXT_PUBLIC_API_ROUTE, {
      email:email,
      text:text,
    })
    return res
  } catch (error) {
    NextResponse.json({message:'Ocurrió un error, inténtalo nuevamente.'}, {status: 404})
  }
};

export default sendEmail;