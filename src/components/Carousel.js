import React, { Fragment, useState } from 'react';
import assets from './assets';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import Modal from './Modal';

const Carousel = () => {
    
    const [current, setCurrent] = useState(0); // tracks current viewed slide
    const [open, setOpen] = useState(false); // determines whether modal is open or close

    // validate data, ensure exisits and not empty
    if(!assets && assets.length > 0){ return 'No Images Found'; };

    const prevSlide = () => {
        // if on the first slide, go to the last slide
        setCurrent(current === 0 ? assets.length - 1 : current -1 );
    }

    const nextSlide = () => {
        // if on the last slide, go back to the first slide
        setCurrent(current === assets.length-1 ? 0 : current + 1);
    }

    const jumpToSlide = (index) => {
        setCurrent(index);
    }

    const toggleModal = () => {
        setOpen(!open);
    }
    
    return (
            <div className="carousel">
                <div className="slider">
                    {/* left/right navigation */}
                    <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
                    <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />

                    {/* iterate over assets and return image based on value of current state */}
                    {assets.map( (asset, index) => (

                        <div key={index} className="slide" onClick={toggleModal}>
                            {index === current ? (
                                <Fragment>
                                    <img src={asset.image} alt={asset.alt} className="image"/>

                                    <Modal show={open} handleClose={toggleModal}>
                                        <img src={asset.image} alt={asset.alt} className="modal-content"/>
                                    </Modal>
                                    
                                </Fragment>

                            ) : ''}
                        </div>
                    ))}
                </div>
                <div className="links">
                    {/* populates slide navigation jumps */}
                    {assets.map((assets, index) => (
                        <span onClick={() => jumpToSlide(index) } style={current === index ? {color: 'grey'} : {color:'#000'}}>&bull;</span>
                    ))}
                </div>
            </div>
    )
}

export default Carousel;