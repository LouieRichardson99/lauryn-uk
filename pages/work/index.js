import Image from 'next/image'
import Header from '../../components/Header'
import Link from 'next/link'

export default function work() {
    return (
        <div className="font-serif text-gray-800">      
            <Header />
            <h2 className="-mt-4 mb-8 lg:mb-12 md:mt-3 text-xl text-center">My Work</h2>
            <div className="block md:flex m-4 justify-center">
                <div className="w-11/12 mx-auto md:mx-3 md:w-1/2 max-w-lg relative">
                    <Link href="/work/1">
                        <a><Image 
                            src={'http://localhost:1337/uploads/1_0700699a22.png'} 
                            width={1000} 
                            height={1000} 
                            alt="Travel Through Literature" 
                            className="rounded-lg hover:bg-gray-800 hover:opacity-60 transition ease-in-out duration-200"
                        /></a>
                    </Link>
                    <p className="text-right md:text-left mt-1 font-bold md:ml-1 mb-3 text-red-700">Travel Through Literature</p>
                </div>
                <div className="w-11/12 mx-auto md:mx-3 md:w-1/2 max-w-lg relative text-center">
                    <Link href="/work/2">
                        <a><Image 
                            src={'http://localhost:1337/uploads/4_1c65c229a4.png'} 
                            width={1000} 
                            height={1000} 
                            alt="Phantom of the Opera" 
                            className="rounded-lg hover:bg-gray-800 hover:opacity-60 transition ease-in-out duration-200"
                        /></a>
                    </Link>
                    <p className="text-right mt-1 mb-3 text-red-700 font-bold">Phantom of the Opera</p>
                </div>
            </div>
        </div>
    )
}