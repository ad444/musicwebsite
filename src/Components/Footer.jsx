import React from 'react'
import FooterItem from './FooterItem'
import footerLinks from '../JSON/footerJSON';
import Copyright from './Copyright';
const Footer = () => {
    return (
        <>
        <div id='footer'>
            {
                footerLinks.map((elem, index)=>{
                    return <FooterItem key={index} title={elem.linkTitle} link1={elem.link1} link2={elem.link2} link3={elem.link3} link4={elem.link4} link5={elem.link5}/>
                })
            }
        </div>
        <Copyright />
        </>
    )
}

export default Footer
