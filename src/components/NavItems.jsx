import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import logo from "../assets/images/logo/logo.png";

export default function NavItems() {
    const [menuToggle, setMenuToggle] = useState(false);
    const [socialToggle, setSocialToggle] = useState(false);
    const [headerFixed, setHeaderFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setHeaderFixed(true);
            } else {
                setHeaderFixed(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <header className={`header-section style-4 ${headerFixed ? "header-fixed fadeInUp" : ""}`}>
                {/** header top start **/}
                <div className={`header-top d-md-none ${socialToggle ? "open" : ""}`}>
                    <Container>
                        <div className="header-top-area">
                            <NavLink to="/signup" className="text-capitalize lab-btn me-3 text-decoration-none"><span>create account</span></NavLink>
                            <NavLink to='/login' className='text-capitalize text-decoration-none'>login</NavLink>
                        </div>
                    </Container>
                </div>

                {/** header bottom **/}
                <div className="header-bottom">
                    <Container>
                        <div className="header-wrapper">
                            {/** logo **/}
                            <div className="logo-search-acte">
                                <div className="logo">
                                    <Link to="/">
                                        <img src={logo} alt="img" />
                                    </Link>
                                </div>
                            </div>

                            {/* menu area */}
                            <div className="menu-area">
                                <div className="menu">
                                    <ul className={`lab-ul ${menuToggle? "active":""}`}>
                                        <li><Link lo="/" className='text-capitalize text-decoration-none'>home</Link></li>
                                        <li><Link lo="/shop" className='text-capitalize text-decoration-none'>shop</Link></li>
                                        <li><Link lo="/blog" className='text-capitalize text-decoration-none'>blog</Link></li>
                                        <li><Link lo="/about" className='text-capitalize text-decoration-none'>about</Link></li>
                                        <li><Link lo="/contact" className='text-capitalize text-decoration-none'>contact</Link></li>
                                    </ul>

                                    <Link to="/signup" className='text-capitalize'>create account</Link>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </header>
        </>
    );
}
