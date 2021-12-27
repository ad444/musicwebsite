import React,{useEffect, useState} from 'react'
import Cards from '../Images/cards.png';
import Footer from './Footer';

const GiftCards = () => {
    const [footerDisplay, setFooterDisplay] = useState('false');

    useEffect(() =>{
       if(window.location.href.includes('giftcards')){
           console.log('matched');
           setFooterDisplay('true');
       }
    },[]);

    return (
        <>
        <div id='giftCards'>
           <div id='giftCardsImageSection'>
               <div id='giftCardsImageContainer'>
                 <img src={Cards} alt="image_loading_error" id="giftCardsImage"/>
               </div>
           </div>
           <div id='giftCardsTextSection'>
               <div id='giftCardsTextContainer'>
                    <p className='bg-subTitle'>Gift Cards</p>
                    <p id="giftCardsText">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque expedita tempore quasi omnis a aut et totam illo fuga accusamus dolorum vero, ut harum consectetur. Minima molestias officiis culpa non sed dicta itaque. Et aliquam illo obcaecati molestias veritatis porro.</p>
                    <p id='giftCardsSubText'>Already have an Orange MyTunes Music Gift Card?</p>
                    <hr />
                    <button id='giftCardsButton'>Redeem</button>
               </div>
           </div>
        </div>
        {
            footerDisplay === 'true' && <Footer />
        }
        </>
    )
}

export default GiftCards
