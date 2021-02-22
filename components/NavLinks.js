import Link from 'next/link'

export default function NavLinks() {
    return (
        <div className="sm:flex sm:space-x-20 mb-6 font-serif justify-center mt-2">
            <Link href="/about"><a className="hover:text-red-700 block mb-3 sm:mb-0 font-bold">About</a></Link>
            <Link href="/work"><a className="hover:text-red-700 block mb-3 sm:mb-0 font-bold">Work</a></Link>
            <Link href="/blog"><a className="hover:text-red-700 block mb-3 sm:mb-0 font-bold">Blog</a></Link>
            <Link href="/contact"><a className="hover:text-red-700 block -mb-2 sm:mb-0 font-bold">Contact</a></Link>
        </div>
    )
}
