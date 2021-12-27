import React,{useEffect, useState} from 'react'
import Footer from './Footer';

const Entertainment = () => {
    const [footerDisplay, setFooterDisplay] = useState('false');

    useEffect(() =>{
       if(window.location.href.includes('entertainment')){
           setFooterDisplay('true');
       }
    },[]);
    return (
        <>
        <div id='entertainment'>
            <div className='bg-textSection'>
                <p className='bg-title'>A world of entertainment. Available wherever you are.</p>
                <p className='bg-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem veniam nobis, nisi ut expedita, doloribus reprehenderit explicabo non velit repellat alias saepe inventore repellendus? Molestias suscipit eos tempora? Quae quaerat cumque in veritatis impedit dolorum sapiente recusandae minima quo aperiam quam, excepturi quasi totam ad quas? Ipsam laudantium soluta delectus!</p>
            </div>
        </div>
        {
            footerDisplay === 'true' && <Footer />
        }
        </>
    )
}

export default Entertainment;
