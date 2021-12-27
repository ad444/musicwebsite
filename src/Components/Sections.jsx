import React from 'react'
import Music from './Music';
import Videos from './Videos';
import Entertainment from './Entertainment';
import GiftCards from './GiftCards';
import Footer from './Footer';

const Sections = () => {
    return (
        <div id='sections'>
            <Music />
            <Videos />
            <Entertainment />
            <GiftCards />
            <Footer />
        </div>
    )
}

export default Sections;
