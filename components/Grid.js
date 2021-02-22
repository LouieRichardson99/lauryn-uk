import React from 'react'
import Image from 'next/image'

export default function Grid(props) {
    return (
        <div>
            <div className="w-11/12 -mt-6 sm:mt-0 grid-cols-2 md:grid-cols-3 max-w-4xl mx-auto grid">
                {props.images.map(image => (
                    <div key={image.id} className="px-1 sm:p-2">
                        <Image 
                            alt={image.alternativeText} 
                            src={image.url} 
                            width="400" 
                            height="300" 
                            className="rounded-lg hover:bg-gray-800 hover:opacity-60 transition ease-in-out duration-200"
                            onClick={() => props.handleModalOpen(image)}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
