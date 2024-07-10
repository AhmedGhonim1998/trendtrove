import React from 'react'
import { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
const CheckOutPage = () => {
    const [show, setShow] = useState(false);
    const [activeTab, setActiveTab] = useState("visa");


    //handle tab change
    const handleTabchange = (tabId) => {
        setActiveTab(tabId);
    }
    const handleShow = () => {
        setShow(true);
    }
    const handleClose = () => {
        setShow(false);
    }
    //direct to home page
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/"
    const handleOrderConfirm = () => {
        alert("Your Order is placed successfully!");
        localStorage.removeItem("cart");
        navigate(from, { replace: true })
    }
    return (
        <div className='modalCard'>
            <Button className='text-capitalize py-2' variant='primary' onClick={handleShow}>proceed to checkout</Button>
            <Modal
                show={show}
                onHide={handleClose}
                animation={false}
                className='modal fade'
                centered
            >
                <div className="modal-dialog">
                    <h5 className='text-capitalize px-3 mb-3'>select your paymanet method</h5>
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="tabs mt-3">
                                <ul className='nav nav-tabs' id='myTab' role='tablist'>
                                    <li className='nav-item' role='presentation'>
                                        <a className={`nav-link ${activeTab === "visa" ? "active" : ""}`}

                                            id='visa-tab'
                                            data-toggle="tab"
                                            role='tab'
                                            aria-controls='visa'
                                            aria-selected={activeTab === "visa"}
                                            onClick={() => handleTabchange("visa")}
                                            href="#visa"><img src="https://i.imgur.com/sB4jftM.png" alt="img" width="80" /></a>
                                    </li>
                                    <li className='nav-item' role='presentation'>
                                        <a className={`nav-link ${activeTab === "paypal" ? "active" : ""}`}

                                            id='paypal-tab'
                                            data-toggle="tab"
                                            role='tab'
                                            aria-controls='paypal'
                                            aria-selected={activeTab === "paypal"}
                                            onClick={() => handleTabchange("paypal")}
                                            href="#paypal"><img src="https://i.imgur.com/yK7EDD1.png" alt="img" width="80" /></a>
                                    </li>
                                </ul>
                                {/* content */}
                                <div className="tab-content" id='myTabContent'>
                                    {/* visa content */}
                                    <div className={`tab-pane fade ${activeTab === "visa" ? "show active" : ""}`}
                                        id='visa'
                                        role='tabpanel'
                                        aria-labelledby='visa-tab'
                                    >
                                        {/* visa tab content */}
                                        <div className="mt-4 mx-4">
                                            <div className="text-center">
                                                <h5 className='text-capitalize'>credit card</h5>
                                            </div>
                                            <div className="form mt-3">
                                                <div className="inputbox">
                                                    <input type="text" name='name' id='name' className='form-control' required />
                                                    <span className='text-capitalize'>card folder name</span>
                                                </div>
                                                <div className="inputbox">
                                                    <input type="number" name='number' id='number' className='form-control' min="1" max="999" required placeholder='Enter your card number'/><i className='fa fa-eye'></i>
                                                </div>
                                                <div className="d-flex flex-row ">
                                                    <div className="inputbox">
                                                        <input type="date" name='number' id='number' className='form-control' min="1" max="999" required />

                                                    </div>
                                                    <div className="inputbox">
                                                        <input type="text" name='number' id='number' className='form-control' min="1" max="999" required />
                                                        <span className='text-capitalize'>cvv</span>
                                                    </div>
                                                </div>
                                                <div className="px-5 pay">
                                                    <button className='text-capitalize btn btn-success btn-block' onClick={handleOrderConfirm}>order now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    {/* paypal content */}
                                    <div className={`tab-pane fade ${activeTab === "paypal" ? "show active" : ""}`}
                                        id='paypal'
                                        role='tabpanel'
                                        aria-labelledby='paypal-tab'
                                    >
                                        <div className="mt-4 mx-4">
                                            <div className="text-center">
                                                <h5 className='text-capitalize'>paypal account info</h5>
                                            </div>
                                            <div className="form mt-3">
                                                <div className="inputbox">
                                                    <input type="text" name='name' id='name' className='form-control' required />
                                                    <span className='text-capitalize'>enter your email</span>
                                                </div>
                                                <div className="inputbox">
                                                    <input type="text" name='number' id='number' className='form-control' min="1" max="999" required />
                                                    <span className='text-capitalize'> your name</span>
                                                </div>
                                                <div className="d-flex flex-row">
                                                    <div className="inputbox">
                                                        <input type="text" name='number' id='number' className='form-control' min="1" max="999" required />
                                                        <span className='text-capitalize'>card number</span>
                                                    </div>
                                                    <div className="inputbox">
                                                        <input type="text" name='number' id='number' className='form-control' min="1" max="999" required />
                                                        <span className='text-capitalize'>extra info</span>
                                                    </div>
                                                </div>
                                                <div className="px-5 pay">
                                                    <button className='text-capitalize btn btn-success btn-block' onClick={handleOrderConfirm}>add paypal</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* payment desclaimer */}
                                <p className='mt-3 px-4 p-Disclaimer'><em className='text-capitalize'>payment disclaimer : </em>In no event shall payment by owner for any material or service</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default CheckOutPage