import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight:['400', '500','700', '600', '300', '200', '100'] })

export const metadata = {
  title: 'adridev | FullStack Developer',
  description: 'Portfolio de Adriel Machado Developer.',
}

import Header from '../../components/header/header'

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={`${poppins.className} h-screen max-w-[1300px] mx-auto background bg-[#FBFAFE] pt-24 font-medium`}>
        <Header />
          {children}
      </body>
    </html>
  )
}
