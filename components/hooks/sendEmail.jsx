import axios from 'axios';

const sendEmail = async (email, text) => {
  const res = await axios.post('http://localhost:3000/api/sendemail', {
    email:email,
    text:text,
  })
  return res
};

export default sendEmail;