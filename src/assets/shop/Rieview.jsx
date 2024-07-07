import React from 'react'
import { useState } from 'react';
import Rating from '../../components/Rating';
import descImg from "../images/shop/01.jpg"
const reviwtitle = "Add a Review";

let ReviewList = [
    {
        imgUrl: "/src/assets/images/instructor/01.jpg",
        imgAlt: "Client thumb",
        name: "Ganelon Boileau",
        date: "Posted on Jun 10, 2022 at 6:57 am",
        desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
        imgUrl: "/src/assets/images/instructor/02.jpg",
        imgAlt: "Client thumb",
        name: "Morgana Cailot",
        date: "Posted on Jun 10, 2022 at 6:57 am",
        desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
        imgUrl: "/src/assets/images/instructor/03.jpg",
        imgAlt: "Client thumb",
        name: "Telford Bois",
        date: "Posted on Jun 10, 2022 at 6:57 am",
        desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
        imgUrl: "/src/assets/images/instructor/04.jpg",
        imgAlt: "Client thumb",
        name: "Cher Daviau",
        date: "Posted on Jun 10, 2022 at 6:57 am",
        desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
];
const Rieview = () => {
    const [reviewShow, setReviewShow] = useState(true)
    return (
        <>
            <ul className={`review-nav lab-ul  ${reviewShow ? "RevActive" : "DescActive"}`}>
                <li className='text-capitalize desc' onClick={() => setReviewShow(!reviewShow)}>description</li>
                <li className='text-capitaalize rev' onClick={() => setReviewShow(!reviewShow)}>reviews 4</li>
            </ul>
            {/* desc & review content */}
            <div className={`review-content  ${reviewShow?"review-content-show":"description-show"}`}>
                <div className="review-showing">
                    <ul className='content lab-ul'>
                        {
                            ReviewList.map((review , i)=>(
                                <li key={i}>
                                    <div className="post-thumb">
                                        <img src={review.imgUrl} alt="img" />
                                    </div>
                                    <div className="post-content">
                                        <div className='entry-meta'>
                                            <div className="posted-on">
                                                <a href="#">{review.name}</a>
                                                <p>{review.date}</p>
                                            </div>
                                        </div>
                                        <div className="entry-content">
                                            <p>{review.desc}</p>
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                    {/* add review field */}
                    <div className="client-review">
                        <div className="review-form">
                            <div className="review-title">
                                <h5>{reviwtitle}</h5>
                            </div>
                            <form action="action" className='row'>
                                <div className="col-md-4 col-12">
                                    <input type="text" name='name' id='name' placeholder='Full Name *' />
                                </div>
                                <div className="col-md-4 col-12">
                                    <input type="email" name='email' id='name' placeholder='Your Email *' />
                                </div>
                                <div className="col-md-4 col-12">
                                    <div className="rating">
                                        <span className='text-capitalize me-2'>your rating</span>
                                        <Rating/>
                                    </div>
                                </div>
                                <div className="col-md-12 col-12">
                                    <textarea name="message" id="message" rows="8" placeholder='Type Here Message'></textarea>
                                </div>

                                <div className="col-12">
                                    <button className='text-white default-button text-capitalize' type='submit'>submit review</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {/* description */}
                <div className="description">
                    <p className='fs-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quos velit quaerat laudantium perferendis, maxime eaque at alias voluptatibus maiores blanditiis aspernatur rerum ipsam natus odio consequuntur explicabo, eligendi fugit voluptatem quo. Repellendus error facilis dolorum, facere dolorem vel quo, sed quis, ipsum corrupti nisi totam accusamus aliquid repudiandae. Sapiente! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quos velit quaerat laudantium perferendis, maxime eaque at alias voluptatibus maiores blanditiis aspernatur rerum ipsam natus odio consequuntur explicabo, eligendi fugit voluptatem quo. Repellendus error facilis dolorum, facere dolorem vel quo, sed quis, ipsum corrupti nisi totam accusamus aliquid repudiandae. Sapiente!</p>
                    <div className="post-item">
                        <div className="post-thumb">
                            <img src={descImg} alt="img" />
                        </div>
                        <div className="post-content">
                            <ul className='lab-ul'>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>

                            </ul>
                        </div>
                    </div>
                    <p className='fs-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quos velit quaerat laudantium perferendis, maxime eaque at alias voluptatibus maiores blanditiis aspernatur rerum ipsam natus odio consequuntur explicabo, eligendi fugit voluptatem quo. Repellendus error facilis dolorum, facere dolorem vel quo, sed quis, ipsum corrupti nisi totam accusamus aliquid repudiandae. Sapiente! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quos velit quaerat laudantium perferendis, maxime eaque at alias voluptatibus maiores blanditiis aspernatur rerum ipsam natus odio consequuntur explicabo, eligendi fugit voluptatem quo. Repellendus error facilis dolorum, facere dolorem vel quo, sed quis, ipsum corrupti nisi totam accusamus aliquid repudiandae. Sapiente!</p>
                </div>
            </div>
        </>
    )
}

export default Rieview