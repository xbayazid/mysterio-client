import React from 'react';
import Banner from './Banner/Banner';
import Facilites from './Facilites/Facilites';
import Category from './Category/Category';
import BannerTwo from './BannerTwo/BannerTwo';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Facilites/>
            <Category/>
            <BannerTwo/>
        </div>
    );
};

export default Home;