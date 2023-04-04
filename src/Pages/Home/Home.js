import React from 'react';
import Banner from './Banner/Banner';
import Facilites from './Facilites/Facilites';
import Category from './Category/Category';
import BannerTwo from './BannerTwo/BannerTwo';
import Trending from './Trending/Trending';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Facilites/>
            <Category/>
            <BannerTwo/>
            <Trending/>
        </div>
    );
};

export default Home;