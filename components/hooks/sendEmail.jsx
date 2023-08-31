import axios from 'axios';

const sendEmail = async (email, text) => {
  const res = await axios.post('https://portfolio-2023-psi-self.vercel.app/api/sendemail', {
    email:email,
    text:text,
  })
  return res
};

export default sendEmail;