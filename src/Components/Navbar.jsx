import React,{useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import WebsiteContext from '../Context/WebsiteContext';

const Navbar = () => {
    let context  = useContext(WebsiteContext);

    const[sideNavPosition, setSideNavPosition] = useState('100%');
    
    const openSideNav = ()=>{
         setSideNavPosition('0%');
    };

    const closeSideNav = ()=>{
        setSideNavPosition('100%');
    }
    return (
        <>
        <div id='navbar'>
            <div id="navbrand">
                <ul id='menu_link'>
                    <li className={context.pathName === "/"?"active-list-items":"list-items"}><Link style={{textDecoration:'none'}} to='/'><span className='list-itemsText'>myTunes</span></Link></li>
                    <li className={context.pathName === "/overview"?"active-list-items":"list-items"}><Link style={{textDecoration:'none'}} to='/overview'><span className='list-itemsText'>Overview</span></Link></li>
                    <li className={context.pathName === "/music"?"active-list-items":"list-items"}><Link style={{textDecoration:'none'}} to='/music'><span className='list-itemsText'>Music</span></Link></li>
                    <li className={context.pathName === "/videos"?"active-list-items":"list-items"}><Link style={{textDecoration:'none'}} to='/videos'><span className='list-itemsText'>Videos</span></Link></li>
                    <li className={context.pathName === "/entertainment"?"active-list-items":"list-items"}><Link style={{textDecoration:'none'}} to='/entertainment'><span className='list-itemsText'>Entertainment</span></Link></li>
                    <li className={context.pathName === "/giftcards"?"active-list-items":"list-items"}><Link style={{textDecoration:'none'}} to='/giftcards'><span className='list-itemsText'>Gift Cards</span></Link></li>
                </ul>
            </div>
            <div id='mobileNavbarFirstSection'>
                <p id='mobileNavbrand'><Link to='/' style={{textDecoration:'none'}}><span style={{cursor:'pointer', color:"#f5f5f5"}}>myTunes</span></Link></p>
            </div>
            <div id='mobileNavbarSecondSection'>
                <i id='mobileNavIcon' className='fas fa-bars' onClick={openSideNav}/>
            </div>
        </div>
        
        <div id='sideMenuBar' style={{right:sideNavPosition}}>
            <i className='fas fa-times' id='closeIcon' onClick={closeSideNav}/>
            <ul id='sideMenuLinkContainer'>
                <li className='sideMenu-list-items'><Link style={{textDecoration:'none'}} to='/' onClick={closeSideNav}><span className='sidelist-itemsText'>myTunes</span></Link></li>
                <li className='sideMenu-list-items'><Link style={{textDecoration:'none'}} to='/overview' onClick={closeSideNav}><span className='sidelist-itemsText'>Overview</span></Link></li>
                <li className='sideMenu-list-items'><Link style={{textDecoration:'none'}} to='/music' onClick={closeSideNav}><span className='sidelist-itemsText'>Music</span></Link></li>
                <li className='sideMenu-list-items'><Link style={{textDecoration:'none'}} to='/videos' onClick={closeSideNav}><span className='sidelist-itemsText'>Videos</span></Link></li>
                <li className='sideMenu-list-items'><Link style={{textDecoration:'none'}} to='/entertainment' onClick={closeSideNav}><span className='sidelist-itemsText'>Entertainment</span></Link></li>
                <li className='sideMenu-list-items'><Link style={{textDecoration:'none'}} to='/giftcards' onClick={closeSideNav}><span className='sidelist-itemsText'>Gift Cards</span></Link></li>
            </ul>
        </div>
       </>
    )
}

export default Navbar;
