import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthProvider'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const title = "login"
const socialTitle = "login with social media"
const btnText = "login now"
const socialList = [
    {
        iconName: 'icofont-facebook',
        siteLink: '#',
        className: 'facebook',
    },
    {
        iconName: 'icofont-twitter',
        siteLink: '#',
        className: 'twitter',
    },
    {
        iconName: 'icofont-linkedin',
        siteLink: '#',
        className: 'linkedin',
    },
    {
        iconName: 'icofont-instagram',
        siteLink: '#',
        className: 'instagram',
    },
    {
        iconName: 'icofont-pinterest',
        siteLink: '#',
        className: 'pinterest',
    },
]

const Login = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const { signUpWithGmail, login } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from.pathname || "/";

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email , password).then((result)=>{
            const user = result.user;
            alert("Login successfull");
            navigate(from , {replace:true})
        }).catch((error)=>{
            const errorMsg = error.message;
            setErrorMessage("Please provide valid email & password")
        })
    }
    const handleRegister=()=>{
        signUpWithGmail().then((result)=>{
            const user = result.user;
            navigate(from , {replace:true})
        }).catch((error)=>{
            const errorMsg = error.message;
            setErrorMessage("Please provide valid email & password")
        })
    }

    return (
        <div>
            <div className="login-section padding-tb section-bg">
                <Container>
                    <div className="account-wrapper">
                        <h3 className='title'>{title}</h3>
                        <form className='account-form' onSubmit={handleLogin}>
                            <div className="form-group">
                                <input type="email" name='email' id='email' placeholder='Email Address *' required />
                            </div>
                            <div className="form-group">
                                <input type="password" name='password' id='password' placeholder='Password *' required />
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
            </div>
        </div>
    )
}

export default Login