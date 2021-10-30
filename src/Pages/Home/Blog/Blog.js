import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import blog1 from '../../../images/blog/blog1.webp'
import blog2 from '../../../images/blog/blog2.webp'
import blog3 from '../../../images/blog/blog3.webp'
import './Blog.css'

const Blog = () => {
    return (
        <div className="mt-5">
            <Container>
                <h5 className="text-warning">BLOG</h5>
                <h2>Our Blog</h2>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>

                <div className="row d-flex">
                    <div id="service" className="col-sm-12 col-md-6 col-lg-4 mx-1 my-2 border border-primary rounded doctors p-0 mx-auto" style={{ width: "22rem" }}>
                        <div class="card" className='mx-auto'>
                            <img src={blog1} className="card-img-top img-fluid rounded blog-img" alt="Travel Blog" />
                        </div>
                        <div class="card-body doctors-contents">
                            <h5 className="card-title">Why Lead Generation is Key for Business Growth</h5>
                            <p className="card-text" style={{ textAlign: "justify" }}>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                            <Link className="d-flex justify-content-between">
                                <Button>READ MORE</Button> <span>Admin</span>
                            </Link>
                        </div>
                    </div>
                    <div id="service" className="col-sm-12 col-md-6 col-lg-4 mx-1 my-2 border border-primary rounded doctors p-0 mx-auto" style={{ width: "22rem" }}>
                        <div class="card" className='mx-auto'>
                            <img src={blog2} className="card-img-top img-fluid rounded blog-img" alt="Travel Blog" />
                        </div>
                        <div class="card-body doctors-contents">
                            <h5 className="card-title">Why Lead Generation is Key for Business Growth</h5>
                            <p className="card-text" style={{ textAlign: "justify" }}>A small river named Duden flows by their place and supplies it with the necessary.</p>
                            <Link className="d-flex justify-content-between">
                                <Button>READ MORE</Button> <span>Admin</span> 
                            </Link>
                        </div>
                    </div>
                    <div id="service" className="col-sm-12 col-md-6 col-lg-4 mx-1 my-2 border border-primary rounded doctors p-0 mx-auto" style={{ width: "22rem" }}>
                        <div class="card" className='mx-auto'>
                            <img src={blog3} className="card-img-top img-fluid rounded blog-img" alt="Travel Blog" />
                        </div>
                        <div class="card-body doctors-contents">
                            <h5 className="card-title">Why Lead Generation is Key for Business Growth</h5>
                            <p className="card-text" style={{ textAlign: "justify" }}>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                            <Link className="d-flex justify-content-between">
                                <Button>READ MORE</Button> <span>Admin</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Blog;