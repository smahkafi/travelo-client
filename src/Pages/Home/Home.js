import React from 'react';
import Banner from './Banner/Banner';
import Blog from './Blog/Blog';
import HomeSubBanner from './HomeSubBanner/HomeSubBanner';
import OurServices from './OurServices/OurServices';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurServices></OurServices>
            <HomeSubBanner></HomeSubBanner>
            <Blog></Blog>
        </div>
    );
};

export default Home;