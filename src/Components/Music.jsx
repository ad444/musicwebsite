import React,{useEffect, useState}  from 'react'
import musicImage from '../Images/musicImage.png';
import Footer from './Footer';

const Music = () => {
    const [footerDisplay, setFooterDisplay] = useState('false');

    useEffect(() =>{
       if(window.location.href.includes('music')){
           console.log('matched');
           setFooterDisplay('true');
       }
    },[]);

    return (
        <>
        <div id='music'>
            <p id='musicTitle'><i className='fas fa-music' id='musicIcon'/>&nbsp;Music</p>
            <p id='musicSubTitle'>45 million songs. Zero ads.</p>
            <p id='musicText'>Stream over 45 million songs, ad-free. Or download albums and tracks to listen to offline. All the music in your personal myTunes library — no matter where it came from — lives right alongside the Orange Music catalog. Start your free three-month trial with no commitment, and cancel anytime.</p>
            <button id='musicButton'>Start Your Trial Now</button>
            <p id='musicSubText'>Orange Music is available in myTunes, and for iOS and Android devices.</p>
            <div id='musicImageContainer'>
                <img src={musicImage} alt='image_loading_error' id='musicImage'/>
            </div>
        </div>
        {
          footerDisplay === 'true' && <Footer />
        }
        </>
    )
}

export default Music;
