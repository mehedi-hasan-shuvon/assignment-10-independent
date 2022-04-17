import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';
import banner1 from '../../../Images/banner/banner-1.png'
import banner2 from '../../../Images/banner/banner-2.png'
import banner3 from '../../../Images/banner/banner-3.png'

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} >
            <Carousel.Item>
                <img
                    className="d-block w-75"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 className='text-primary'>2 Years Work Experience</h3>
                    <p className='text-primary'>Student Tutor of Brac University</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img

                    className="d-block w-75"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3 className='text-primary'>Online Class based</h3>
                    <p className='text-primary'>No need of Physical Class</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-75"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3 className='text-primary'>Taught in Group</h3>
                    <p className='text-primary'>
                        Can be taught privatly or in a group.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};
export default Banner;