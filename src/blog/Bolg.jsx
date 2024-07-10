import React from 'react'
import PageHeader from '../components/PageHeader'
import { Container } from 'react-bootstrap'
import blogList from '../utilis/blogdata'
import { Link } from 'react-router-dom'
const Bolg = () => {
    const scrollUp=()=>{
        window.scroll(0,0);
    }
    return (
        <div>
            <PageHeader title="our blog page" currentPage="blog"/>
            <div className="blog-section padding-tb section-bg">
                <Container>
                    <div className="section-wrapper">
                        <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 justify-content-center g-4">
                            {
                                blogList.map((blog , i)=>(
                                    <div key={i} className='col' onClick={scrollUp}>
                                        <div className="post-item h-100">
                                            <div className="post-inner h-100">
                                                <div className="post-thumb">
                                                    <Link to={`/blog/${blog.id}`}><img src={blog.imgUrl} alt="img" /></Link>
                                                </div>
                                                <div className="post-content">
                                                    <Link to={`/blog/${blog.id}`} className='text-decoration-none text-black fw-bold'>{blog.title}</Link>
                                                    <div className="meta-post">
                                                        <ul className='lab-ul'>
                                                            {
                                                                blog.metaList.map((val , i)=>(
                                                                    <li key={i}>
                                                                        <i className={val.iconName}> {val.text}</i>
                                                                    </li>
                                                                ))
                                                            }
                                                        </ul>
                                                    </div>
                                                    <p className='fs-6'>{blog.desc}</p>
                                                </div>
                                                <div className="post-footer">
                                                    <div className="pf-left">
                                                        <Link to={`/blog/${blog.id}`} className='text-decoration-none text-black lab-btn-text'>{blog.btnText} <i className='icofont-external-link'></i></Link>
                                                    </div>
                                                    <div className="pf-right">
                                                        <i className='icofont-comment'><span className='comment-count'>{blog.commentCount}</span></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Bolg