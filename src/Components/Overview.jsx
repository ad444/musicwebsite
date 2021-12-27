import React,{useEffect, useContext} from 'react'
import '../Animation.css';
import WebsiteContext from '../Context/WebsiteContext';

const Overview = () => {
    let context = useContext(WebsiteContext);

    useEffect(() => {
        console.log(context)
        // context.getPathName(window.location.pathname);
    });

    return (
        <>
        <div id="overview">
            <div id='overviewTextSection' className='bg-textSection'>
                <p  className='bg-title'>
                    <span id='myTune1'>m</span>
                    <span id='myTune2'>y</span> 
                    <span id='myTune3'>T</span> 
                    <span id='myTune4'>u</span> 
                    <span id='myTune5'>n</span> 
                    <span id='myTune6'>e</span> 
                    <span id='myTune7'>s</span>
                </p>
                <p  className='bg-subTitle'>Your music, movies, and TV shows take center stage.</p>
                <p className='bg-text'>myTunes is the best way to organize and enjoy the music, movies, and TV shows you already have — and shop for the ones you want. Enjoy all the entertainment myTunes has to offer on your Mac and PC.</p>
            </div>
        </div>
       </>
    )
}

export default Overview
