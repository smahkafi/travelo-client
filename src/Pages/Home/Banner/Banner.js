import React from 'react';
import { Carousel } from 'react-bootstrap';
import sajek from '../../../images/Carusel/sajek.jpg'
import rangamati from '../../../images/Carusel/Rangamati2.jpg'
import Cox from '../../../images/Carusel/Coxs-bazar-banner.jpg'
import saintMartin from '../../../images/Carusel/saintmartin.jpg'
import sundorban from '../../../images/Carusel/sundorban.jpg'
import kuakata from '../../../images/Carusel/kuakata.jpg'
import './Banner.css'

const Banner = () => {
    return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carosel-img"
                        src={sajek}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1>Sajek Vally</h1>
                        <p>Sajek Valley is one of the popular tourist spots in Bangladesh situated among the hills of the Kasalong range of mountains in Sajek union, Baghaichhari Upazila in Rangamati District. </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carosel-img"
                        src={rangamati}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1>Second slide label</h1>
                        <p>Kaptai Lake is the largest lake in Bangladesh. It is located in the Kaptai Upazila under Rangamati District of Chittagong Division.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carosel-img"
                        src={Cox}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1 className="">Cox's Bazar Beach</h1>
                        <h6 className="">Cox's Bazar Beach, located at Cox's Bazar, Bangladesh, is the longest natural sea beach in the world running 150 kilometres, and 3rd longest beach after Praia do Cassino of Brazil and Ninety Mile Beach of Australia.</h6>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carosel-img"
                        src={saintMartin}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1>St. Martin's Island</h1>
                        <p>St. Martin's Island is a small island in the northeastern part of the Bay of Bengal, about 9 km south of the tip of the Cox's Bazar-Teknaf peninsula, and forming the southernmost part of Bangladesh</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carosel-img"
                        src={sundorban}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1>Sundarban</h1>
                        <p>Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carosel-img"
                        src={kuakata}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1>Kuakata Sea Beach</h1>
                        <p>Kuakata Beach is a beach situated in Kuakata, Patuakhali District, Bangladesh.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
    );
};

export default Banner;