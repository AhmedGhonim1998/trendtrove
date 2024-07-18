import React from 'react'
import { useState } from 'react'
import blogList from '../utilis/blogdata'
import { useParams } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { Container } from 'react-bootstrap';
import Tags from '../assets/shop/Tags';
import PopularPost from '../assets/shop/PopularPost';

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

const SingleBlog = () => {
    const [blog, setBlog] = useState(blogList);
    const { id } = useParams();
    const result = blog.filter(b => b.id === Number(id))
    return (
        <div>
            <PageHeader title={"Single Blog Page"} currentPage={"Blog / Blog Details"} />
            <div className="blog-section blog-single padding-tb section-bg">
                <Container>
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-12">
                            <article>
                                <div className="section-wrapper">
                                    <div className="row row-cols-1 justify-content-center g-4">
                                        <div className="col">
                                            <div className="post-item style-2">
                                                <div className="post-inner">
                                                    {
                                                        result.map((item) => (
                                                            <div key={item.id}>
                                                                <div className="post-thumb">
                                                                    <img src={item.imgUrl} alt="" className='w-100' />
                                                                </div>
                                                                <div className="post-content">
                                                                    <h2 className='fw-bold'>{item.title}</h2>
                                                                    <div className="meta-post">
                                                                        <ul className='lab-ul'>
                                                                            {
                                                                                item.metaList.map((val, i) => (
                                                                                    <li key={i}>
                                                                                        <i className={val.iconName}> {val.text}</i>
                                                                                    </li>
                                                                                ))
                                                                            }
                                                                        </ul>
                                                                    </div>
                                                                    <p>Energistia an deliver atactica metrcs after avsionary Apropria trnsition enterpris an sources applications emerging psd template. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, provident sint deserunt deleniti iure necessitatibus ea? Obcaecati suscipit perspiciatis minima voluptatem ducimus aliquam, corrupti, fugit iusto incidunt deleniti recusandae vitae.</p>
                                                                    <blockquote>
                                                                        <p>Dynamically recaputalize destriputed technologies is wherease turnkey channels and onotonectally provide access to resource leveling expertise vias worldwide deliverables uolisticly expented aserser are diverse vortals.</p>
                                                                        <cite>
                                                                            <a href="#" className='text-capitalize text-decoration-none'>...meliassa hunter</a>
                                                                        </cite>
                                                                    </blockquote>
                                                                    <p>whole heart create am alones and feel the charm of exstenceth spot whch the blissouls like mineing am soo happy my dearsi frend absoribed the exquste sense enjoy my whole hearts alone and fee the charm of exstenceths spotsi whch was the blis of soulis mineing amsoing dear frend soingu absoribed the exqust sense tranqui existence neglect my talentsr should ncapable ofing is drawng singe wonderful serenty has taken possesison of my entre soulng these sweet present moment and yet feel that never was greater artst</p>
                                                                    <img src="/images/blog/single/01.jpg" alt="img" />
                                                                    <p>Serenity hasir taken poseson mying entre soung these sweet morngs spring whch enoywith whole heart create am alones and feel the charm of exstenceth spot whch the blissouls like mineing am soo happy my dearsi frend absoribed the exquste sense enjoy my whole hearts alone and fee the charm of exstenceths spotsi whch was the blis of soulis mineing amsoing dear frend soingu absoribed the exqust sense tranqui existence neglect my talentsr should ncapable ofing is drawng singe wonderful serenty has taken possesison of my entre soulng these sweet present moment and yet feel that never was greater artst</p>

                                                                    <div className="video-thumb">
                                                                        <img src="/images/blog/single/02.jpg" alt="img" />
                                                                        <a href="https://youtu.be/jDjvn_6qso8?si=QDo6EWWaCPox8Yax" target='_blank'
                                                                        className='video-button popup text-decoration-none'><i className='icofont-ui-play'></i></a>
                                                                    </div>
                                                                    <p>whole heart create am alones and feel the charm of exstenceth spot whch the blissouls like mineing am soo happy my dearsi frend absoribed the exquste sense enjoy my whole hearts alone and fee the charm of exstenceths spotsi whch was the blis of soulis mineing amsoing dear frend soingu absoribed the exqust sense tranqui existence neglect my talentsr should ncapable ofing is drawng singe wonderful serenty has taken possesison of my entre soulng these sweet present moment and yet feel that never was greater artst</p>

                                                                    <div className="tags-section">
                                                                        <ul className='tags lab-ul'>
                                                                            <li>
                                                                                <a href="#" className='text-capitalize text-decoration-none'>agency</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="#" className='text-capitalize text-decoration-none'>business</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="#" className='text-capitalize text-decoration-none'>personal</a>
                                                                            </li>
                                                                        </ul>
                                                                        <ul className='lab-ul social-icons'>
                                                                            {
                                                                                socialList.map((val ,i)=>(
                                                                                    <li key={i}>
                                                                                        <a href="#" className={`text-decoration-none ${val.className}`}>
                                                                                            <i className={val.iconName}></i>
                                                                                        </a>
                                                                                    </li>
                                                                                ))
                                                                            }
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        <div className="navigations-part">
                                            <div className="left">
                                                <a href="#" className='text-decoration-none prev'>
                                                    <i className='icofont-double-left'></i> Previews Blog
                                                </a>
                                                <a href="#" className='text-decoration-none title'>
                                                Evisculate Parallel Processes via Technica Sound Models Authoritative
                                                </a>
                                            </div>
                                            <div className="right">
                                                <a href="#" className='text-decoration-none prev'>
                                                    Next Article <i className='icofont-double-right'></i>
                                                </a>
                                                <a href="#" className='text-decoration-none title'>
                                                Ovisculate Parallel Processes via Technica Sound Models Authoritative
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div className="col-lg-4 col-12">
                            <aside>
                                <Tags/>
                                <PopularPost/>
                            </aside>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default SingleBlog