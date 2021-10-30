import React from 'react';
import { Carousel } from 'react-bootstrap';
import Banner1 from '../../../xbg_2.jpg.pagespeed.ic.st0QgdOL7t.webp'
// import Banner1 from '../../../xbg_2.jpg.pagespeed.ic.st0QgdOL7t.webp'
// import Banner1 from '../../../xbg_2.jpg.pagespeed.ic.st0QgdOL7t.webp'

const Banner = () => {
    return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-75 banner"
                        src={Banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner"
                        src={Banner1}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner"
                        src={Banner1}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
    );
};

export default Banner;