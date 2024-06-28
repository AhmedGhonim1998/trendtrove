import React from 'react'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const title = "More Then 60,000 Customers";

const desc = "Buy products on your any device with our app & enjoy your time what you want. Just download & install & start to shopping";

const clientsList = [
    {
        imgUrl: '/src/assets/images/clients/avater.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'From Canada',
    },
    {
        imgUrl: '/src/assets/images/clients/avater.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'From Green Land',
    },
    {
        imgUrl: '/src/assets/images/clients/avater.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'From Russia',
    },
    {
        imgUrl: '/src/assets/images/clients/avater.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'From Brazil',
    },
    {
        imgUrl: '/src/assets/images/clients/avater.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'From Libya',
    },
    {
        imgUrl: '/src/assets/images/clients/avater.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'From Japan',
    },
    {
        imgUrl: '/src/assets/images/clients/avater.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'From Russia',
    },
]
const LocationMap = () => {
    return (
        <>
            <div className='clients-section style-2 padding-tb'>
                <Container>
                    <div className="section-header text-center">
                        <h2 className='title'>{title}</h2>
                        <p>{desc}</p>
                    </div>
                    {/* main content */}
                    <div className="section-wrapper">
                        <div className="clients">
                            {
                                clientsList.map((val, i) => (<div key={i} className='client-list'>
                                    <Link to="/signup" className='client-content text-decoration-none'>
                                        <span>{val.text}</span>
                                    </Link>
                                    <div className="client-thumb">
                                        <img src={val.imgUrl} alt="img" />
                                    </div>
                                </div>))
                            }
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default LocationMap