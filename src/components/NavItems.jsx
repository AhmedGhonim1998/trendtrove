import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import logo from "../assets/images/logo/logo.png";
import { BsInfoSquareFill } from "react-icons/bs";
export default function NavItems() {
    const [menuToggle, setMenuToggle] = useState(false);
    const [socialToggle, setSocialToggle] = useState(false);
    const [headerFixed, setHeaderFixed] = useState(false);
    let scrollUp=()=>{
        window.scroll(0,0);
    }
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
                {/************************ header top start ***************************************/}
                <div className={`header-top d-md-none ${socialToggle ? "open" : ""}`}>
                    <Container>
                        <div className="header-top-area">
                            <NavLink to="/signup" className="text-capitalize lab-btn me-3 text-decoration-none "><span>create account</span></NavLink>
                            <NavLink to='/login' className='text-capitalize text-decoration-none'>login</NavLink>
                        </div>
                    </Container>
                </div>

                {/********************************** header bottom ***********************************/}
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
                                    <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                                        <li onClick={scrollUp}><Link to="/" className='text-capitalize text-decoration-none' onClick={() => setMenuToggle(false)}>home</Link></li>
                                        <li onClick={scrollUp}><Link to="/shop" className='text-capitalize text-decoration-none' onClick={() => setMenuToggle(false)}>shop</Link></li>
                                        <li onClick={scrollUp}><Link to="/blog" className='text-capitalize text-decoration-none' onClick={() => setMenuToggle(false)}>blog</Link></li>
                                        <li onClick={scrollUp}><Link to="/about" className='text-capitalize text-decoration-none' onClick={() => setMenuToggle(false)}>about</Link></li>
                                        <li onClick={scrollUp}><Link to="/contact" className='text-capitalize text-decoration-none' onClick={() => setMenuToggle(false)}>contact</Link></li>
                                    </ul>
                                </div>
                                {/* sign in & login */}
                                <Link to="/signup" className='text-capitalize text-decoration-none lab-btn me-3 d-none d-md-block'>create account</Link>
                                <Link to="/login" className='text-capitalize text-decoration-none d-none d-md-block'>login</Link>

                                {/*menu toggler*/}
                                <div onClick={() => setMenuToggle(!menuToggle)} className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                {/* social toggler */}
                                <div className='ellepsis-bar d-md-none' onClick={()=>setSocialToggle(!socialToggle)}>
                                    <BsInfoSquareFill className='info'/>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </header>
        </>
    );
}
