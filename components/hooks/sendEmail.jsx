import axios, { AxiosError } from 'axios';
import { NextResponse } from 'next/server';

const sendEmail = async (email, text) => {   
    const res = await axios.post(process.env.NEXT_PUBLIC_API_ROUTE, {
      email:email,
      text:text,
    })

    if(res.data.message) throw new Error(res.data.message)

    return res
};

export default sendEmail;