import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as fullStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const SingleService = (props) => {
    const { name, img, price, rating, tourComplete, time, _id } = props.service
    return (
            <div className="col-sm-12 col-md-6 col-lg-4 mt-2">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            <p>{price}</p>
                            <div className="text-start">
                                <Rating readonly
                                    style={{ color: '' }}
                                    initialRating={rating}
                                    emptySymbol={<FontAwesomeIcon icon={emptyStar} />}
                                    fullSymbol={<FontAwesomeIcon icon={fullStar} />}
                                />{' '}
                                <span className="">{rating}</span>
                            </div>
                            <p>{tourComplete}</p>
                            <p>{time}</p>
                        </Card.Text>
                        <Link to={`/booking/${_id}`}>
                            <Button variant="primary">Go somewhere</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </div>
    );
};

export default SingleService;