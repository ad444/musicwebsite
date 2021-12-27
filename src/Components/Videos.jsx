import React,{useEffect, useState} from 'react'
import videosImage from '../Images/videosImage.png';
import Footer from './Footer';

const Videos = () => {
    const [footerDisplay, setFooterDisplay] = useState('false');

    useEffect(() =>{
       if(window.location.href.includes('videos')){
           console.log('matched');
           setFooterDisplay('true');
       }
    },[]);
    return (
        <>
        <div id='videos'>
            <p id='videosTitle'>The movie and TV collection you always wished for. Granted.</p>
            <p id='videosText'>With over 100,000 movies and TV shows to choose from, there’s always something great to watch on myTunes and if you watch on Orange TV 4K, you’ll be able to enjoy a tremendous selection of your favorite content in 4K HDR. So get ready to enjoy episodes of your favorite TV shows or hit movies you’ve been waiting to see — anytime, anywhere. Just tap to play, or even download if you’re going somewhere you won’t have Wi-Fi.</p>
            <button id='videosButton'>Read More</button>
            <div id='videosImageContainer'>
                <img src={videosImage} alt='image_loading_error' id='videosImage'/>
            </div>
        </div>
        {
            footerDisplay === 'true' && <Footer />
        }
        </>
    )
}

export default Videos
