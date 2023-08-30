import Link from "next/link"

import Image from "next/image"
import Linkedin from '@/app/assets/linkedin.png'
import Github from '@/app/assets/github.png'
import Instagram from '@/app/assets/instagram.png'
import Twitter from '@/app/assets/twitter.png'

const Navbar = () => {
  return (
    <div className="flex gap-2">
        <div className="w-12 h-12 flex items-center justify-center rounded-full cursor-pointer hover:border border-red">
            <Link href="/">
                <Image src={Linkedin} width={25} alt="Icon red" />
            </Link>
        </div>
        <div className="w-12 h-12 flex items-center justify-center rounded-full cursor-pointer hover:border border-red">
            <Link href="/">
                <Image src={Github} width={25} alt="Icon red" />
            </Link>
        </div>
        <div className="w-12 h-12 flex items-center justify-center rounded-full cursor-pointer hover:border border-red">
            <Link href="/">
                <Image src={Instagram} width={25} alt="Icon red" />
            </Link>
        </div>
        <div className="w-12 h-12 flex items-center justify-center rounded-full cursor-pointer hover:border border-red">
            <Link href="/">
                <Image src={Twitter} width={25} alt="Icon red" />
            </Link>
        </div>
    </div>
  )
}

export default Navbar