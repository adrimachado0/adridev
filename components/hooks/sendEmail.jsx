import axios from 'axios';

const sendEmail = async (email, text) => {
  const res = await axios.post(process.env.API_ROUTE, {
    email:email,
    text:text,
  })
  return res
};

export default sendEmail;