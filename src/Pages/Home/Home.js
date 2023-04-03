import React from 'react';
import Banner from './Banner/Banner';
import Facilites from './Facilites/Facilites';
import Category from './Category/Category';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Facilites/>
            <Category/>
        </div>
    );
};

export default Home;