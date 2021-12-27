import React from 'react'
import { Link } from 'react-router-dom';

const FooterItem = (props) => {
    return (
        <div className='footerLinks'>
            <p className='linkTitle'>{props.title}</p>
            <hr style={{border:'1px solid gray'}}/>
            <ul className='linksContainer'>
                <li className='link-item'><Link to='/' className='links'>{props.link1}</Link></li>
                <li className='link-item'><Link to='/' className='links'>{props.link2}</Link></li>
                <li className='link-item'><Link to='/' className='links'>{props.link3}</Link></li>
                <li className='link-item'><Link to='/' className='links'>{props.link4}</Link></li>
                <li className='link-item'><Link to='/' className='links'>{props.link5}</Link></li>
            </ul>
        </div>
    )
}

export default FooterItem
