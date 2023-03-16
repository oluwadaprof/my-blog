import Image from "next/image"
import Link from "next/link"
import avatar from '../assets/fawas.jpeg'
import '../styles/globals.css'

function Header() {
    return (
        <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
            <div className="flex items-center space-x-2">
                <Link href="/">
                    <Image
                        className="rounded-[50%] h-14 w-14"
                        src={avatar}
                        width={50}
                        height={50}
                        alt="avatar"
                    />
                </Link>
                <h1>my-brand-blog</h1>
            </div>
            <div>
                <Link
                    href="https://www.papreact.com/universityofcode"
                    className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#f7ab0a] flex items-center rounded-full text-center "
                >Contact :adeekotobiloba@gmail.com</Link>
            </div>
        </header>
    )
}

export default Header