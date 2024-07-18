import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap'
const title = "register"
const socialTitle = "login with social media"
const btnText = "signup now"
const SignUp = () => {
    const [errorMessage , setErrorMessage] = useState("")
    const handleRegister =(event)=>{

    }
    const handleSignup = ()=>{

    }
    return (
        <div><div className="login-section padding-tb section-bg">
        <Container>
            <div className="account-wrapper">
                <h3 className='title'>{title}</h3>
                <form className='account-form' onSubmit={handleSignup}>
                    <div className="form-group">
                        <input type="text" name='name' id='name' placeholder='Full Name' required />
                    </div>
                    <div className="form-group">
                        <input type="email" name='email' id='email' placeholder='Email Address *' required />
                    </div>
                    <div className="form-group">
                        <input type="password" name='password' id='password' placeholder='Password *' required />
                    </div>
                    <div className="form-group">
                        <input type="password" name='confirmPassword' id='confirmPassword' placeholder='Password *' required />
                    </div>
                    {/* shoing message */}
                    <div className="">
                        {
                            errorMessage &&(
                                <div className="error-message text-danger mb-1">
                                    {errorMessage}
                                </div>
                            )
                        }
                    </div>
                    <div className="form-group">
                        <div className="d-flex justify-content-between flex-wrap pt-sm-2">
                            <div className="checkgroup">
                                <input type="checkbox" name='remember' id='remember' />
                                <label htmlFor="remember" className='text-capitalize'>remember me</label>
                            </div>
                            <Link to="/forgetpass" className='text-capitalize'>forget password</Link>
                        </div>
                    </div>
                    <div className="form-group">
                        <button type='submit' className='d-block lab-btn'><span className='text-capitalize'>{btnText}</span></button>
                    </div>
                </form>
                {/* account bottom */}
                <div className="account-bottom">
                    <span className='text-capitalize d-block cate pt-10'>don't have an account ? <Link to="/sign-up">sign up</Link></span>
                    <span className='or'>
                        <span>or</span>
                    </span>

                    {/* social login */}
                    <h5 className='subtitle text-capitalize'>{socialTitle}</h5>
                    <ul className='lab-ul social-icons justify-content-center'>
                        <li>
                            <button className='github' onClick={handleRegister}><i className='icofont-github'></i></button>
                        </li>
                        <li>
                            <a href='#' className='facebook text-decoration-none'><i className='icofont-facebook'></i></a>
                        </li>
                        <li>
                            <a href='#' className='twitter text-decoration-none'><i className='icofont-twitter'></i></a>
                        </li>
                        <li>
                            <a href='#' className='linkedin text-decoration-none'><i className='icofont-linkedin'></i></a>
                        </li>
                        <li>
                            <a href='#' className='instagram text-decoration-none'><i className='icofont-instagram'></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </Container>
    </div></div>
    )
}

export default SignUp