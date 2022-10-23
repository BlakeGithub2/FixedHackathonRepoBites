import React from 'react'
import {AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai'; 

const HeroBanner = () => {
    return (
        <div className="footer-container">
            <p>Grab a bite to go!</p>
            <p className="icons">
                <AiFillInstagram />
                <AiOutlineTwitter />
            </p>
        </div>
    )
}

export default HeroBanner