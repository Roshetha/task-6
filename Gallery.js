import React, { useState } from 'react';
import './Gallery.css'; 
import Img1 from './Assets/1.jpg';
import Img2 from './Assets/2.jpg';
import Img3 from './Assets/3.jpg';
import Img4 from './Assets/4.jpg';
import Img5 from './Assets/5.jpg';
import Img6 from './Assets/6.jpg';
import Img7 from './Assets/7.jpg';
import Img8 from './Assets/8.jpg';
import Img9 from './Assets/9.jpg';
import Img10 from './Assets/10.jpg';
import Img11 from './Assets/11.jpg';
import Img12 from './Assets/12.jpg';
import Img13 from './Assets/13.jpg';
import Img14 from './Assets/14.jpg';
import Img15 from './Assets/15.jpg';
import Img31 from './Assets/31.jpg';
import Img32 from './Assets/32.jpg';
import Img18 from './Assets/18.jpg';
import Img19 from './Assets/19.jpg';
import Img20 from './Assets/20.jpg';
import Img21 from './Assets/21.jpg';
import Img22 from './Assets/22.jpg';
import Img23 from './Assets/23.jpg';
import Img24 from './Assets/24.jpg';
import Img25 from './Assets/25.jpg';
import Img26 from './Assets/26.jpg';
import Img27 from './Assets/27.jpg';
import Img28 from './Assets/28.jpg';
import Img29 from './Assets/29.jpg';
import Img30 from './Assets/30.jpg';

const Gallery = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState('');
    const [modalAltText, setModalAltText] = useState('');

    // List of images with their alt text
    const images = [
        { id: 1, src: Img1, alt: 'a traditional drums form' },
        { id: 2, src: Img2, alt: 'Alt text for image 2' },
        { id: 3, src: Img3, alt: 'Alt text for image 3' },
        { id: 4, src: Img4, alt: 'Alt text for image 4' },
        { id: 5, src: Img5, alt: 'Alt text for image 5' },
        { id: 6, src: Img6, alt: 'Alt text for image 6' },
        { id: 7, src: Img7, alt: 'Alt text for image 7' },
        { id: 8, src: Img8, alt: 'Alt text for image 8' },
        { id: 9, src: Img9, alt: 'Alt text for image 9' },
        { id: 10, src: Img10, alt: 'Alt text for image 10' },
        { id: 11, src: Img11, alt: 'Alt text for image 11' },
        { id: 12, src: Img12, alt: 'Alt text for image 12' },
        { id: 13, src: Img13, alt: 'Alt text for image 13' },
        { id: 14, src: Img14, alt: 'Alt text for image 14' },
        { id: 15, src: Img15, alt: 'Alt text for image 15' },
        { id: 31, src: Img31, alt: 'Alt text for image 31' },
        { id: 32, src: Img32, alt: 'Alt text for image 32' },
        { id: 18, src: Img18, alt: 'Alt text for image 18' },
        { id: 19, src: Img19, alt: 'Alt text for image 19' },
        { id: 20, src: Img20, alt: 'Alt text for image 20' },
        { id: 21, src: Img21, alt: 'Alt text for image 21' },
        { id: 22, src: Img22, alt: 'Alt text for image 22' },
        { id: 23, src: Img23, alt: 'Alt text for image 23' },
        { id: 24, src: Img24, alt: 'Alt text for image 24' },
        { id: 25, src: Img25, alt: 'Alt text for image 25' },
        { id: 26, src: Img26, alt: 'Alt text for image 26' },
        { id: 27, src: Img27, alt: 'Alt text for image 27' },
        { id: 28, src: Img28, alt: 'Alt text for image 28' },
        { id: 29, src: Img29, alt: 'Alt text for image 29' },
        { id: 30, src: Img30, alt: 'Alt text for image 30' },
    ];

    // Function to handle opening modal
    const openModal = (imageSrc, altText) => {
        setModalImage(imageSrc);
        setModalAltText(altText);
        setModalOpen(true);
    };

    // Function to handle closing modal
    const closeModal = () => {
        setModalOpen(false);
    };

    // Function to handle clicking on gallery item
    const handleItemClick = (imageSrc, altText) => {
        setModalImage(imageSrc);
        setModalAltText(altText);
        setModalOpen(true);
    };

    return (
        <div>
            <h1>Musical Instrument Image Gallery</h1>
            <div className="gallery">
                {/* Map through images and display each */}
                {images.map((image) => (
                    <div key={image.id} className="gallery-item" onClick={() => handleItemClick(image.src, image.alt)}>
                        <img src={image.src} className="gallery-image" alt={image.alt} />
                    </div>
                ))}
            </div>

            {/* Modal */}
            {modalOpen && (
                <div className="modal" id="modal">
                    <span className="close" onClick={closeModal}>&times;</span>
                    <img className="modal-content" src={modalImage} alt={modalAltText} />
                    <div id="modal-description" className="modal-description">{modalAltText}</div>
                </div>
            )}

        
        </div>
    );
};

export default Gallery;
