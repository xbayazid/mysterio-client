import React from 'react';
import Banner from './Banner/Banner';
import Facilites from './Facilites/Facilites';
import Category from './Category/Category';
import BannerTwo from './BannerTwo/BannerTwo';
import Trending from './Trending/Trending';
import NewArrival from './NewArrival/NewArrival';
import Brands from './Brands/Brands';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Facilites/>
            <Category/>
            <BannerTwo/>
            <Trending/>
            <NewArrival/>
            <Brands/>
        </div>
    );
};

export default Home;