import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap'
import { AuthContext } from '../context/AuthProvider';
const title = "register"
const socialTitle = "login with social media"
const btnText = "signup now"
const SignUp = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const { signUpWithGmail, createUser  } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from.pathname || "/";
    const handleRegister = () => {
        signUpWithGmail().then((result) => {
            const user = result.user;
            navigate(from, { replace: true })
        }).catch((error) => {
            const errorMsg = error.message;
            setErrorMessage("Please provide valid email & password")
        })
    }
    const handleSignup = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value
        // console.log(email , password , confirmPassword)
        if (password !== confirmPassword){
            setErrorMessage("Password doesn't match , please provide a correct password")
        }else{
            setErrorMessage("")
            createUser(email , password).then((userCredientail)=>{
                const user = userCredientail.user;
                alert("Account created successfully done")
                navigate(from , {replace:true})
            }).catch((error)=>{
                alert(`${error.message}`)
            })
        }
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
                            <input type="password" name='confirmPassword' id='confirmPassword' placeholder='Confirm Password *' required />
                        </div>
                        {/* shoing message */}
                        <div className="">
                            {
                                errorMessage && (
                                    <div className="error-message text-danger mb-1">
                                        {errorMessage}
                                    </div>
                                )
                            }
                        </div>
                        <div className="form-group">
                            <button type='submit' className='d-block lab-btn'><span className='text-capitalize'>{btnText}</span></button>
                        </div>
                    </form>
                    {/* account bottom */}
                    <div className="account-bottom">
                        <span className='text-capitalize d-block cate pt-10'>have an account ? <Link to="/login">login</Link></span>
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