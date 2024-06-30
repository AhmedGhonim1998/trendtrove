import React from 'react'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import appleImg from '../assets/images/app/01.jpg'
import androidImg from '../assets/images/app/02.jpg'

const btnText = "sign up for free";
const title = "shop anytime any where";
const desc = "take shop on your device with our app & learn all time what you want. just download & install start to learn"
const AppSection = () => {
    return (
        <div className='app-section padding-tb'>
            <Container>
                <div className="section-header text-center">
                    <Link className='text-decoration-none text-capitalize lab-btn mb-4' to="/sign-up">{btnText}</Link>
                    <h2 className='title text-capitalize'>{title}</h2>
                    <p>{desc}</p>
                </div>
                <div className="section-wrapper">
                    <ul className="lab-ul">
                        <li><a href="#"><img src={appleImg} alt="img" /></a></li>
                        <li><a href="#"><img src={androidImg} alt="img" /></a></li>
                    </ul>
                </div>
            </Container>
        </div>
    )
}

export default AppSection