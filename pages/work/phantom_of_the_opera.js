import React, { useState } from 'react'
import Header from '../../components/Header'
import Modal from '../../components/Modal'
import Grid from '../../components/Grid'
import { client } from '../../utils/prismicClient'
import Prismic from 'prismic-javascript'
import { RichText } from 'prismic-reactjs'

export default function workContent({ work }) {
    const [isModalOpen, setModalIsOpen] = useState(false);
    const [imageName, setImageName] = useState('');
    const [imageURL, setImageURL] = useState('');

    const handleModalOpen = (image) => {
        setModalIsOpen(true);
        setImageName(image.alternativeText);
        setImageURL(image.url);
    }

    const handleModalClose = () => {
        setModalIsOpen(false);
        setImageName('');
        setImageURL('');
    }

    const workImages = work.results.data;

    return (
        <div>
            <Header />
            {workImages && <Grid images={workImages} handleModalOpen={handleModalOpen}/>}
            <div className={isModalOpen ? "transition ease-in-out duration-500 flex bg-gray-500 bg-opacity-75 w-full h-full top-0 left-0 fixed justify-center items-center" : null}>
                {isModalOpen 
                    ? <div>
                        <Modal
                        handleModalClose={handleModalClose} 
                        imageName={imageName}
                        imageURL={imageURL}
                        />
                    </div>
                    : null
                }
            </div>
        </div>
    )
}

export async function getStaticProps() {
    let work = await client.query(
        Prismic.Predicates.at('document.type', 'phantom_of_the_opera')
    )

    return {
      props: {
        work
      }
    }
}

