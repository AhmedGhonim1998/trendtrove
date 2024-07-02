import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const PageHeader = ({title , currentPage}) => {
    return (
        <div className='pageheader-section'>
            <Container>
                <div className="row">
                    <div className="col-12">
                        <div className="pageheader-content text-center">
                            <h2 className='text-capitalize'>{title}</h2>
                            <nav aria-label='breadcrumb'>
                                <ol className='breadcrumb justify-content-center'>
                                    <li className='breadcrumb-item'><Link to="/" className='text-decoration-none text-capitalize'>home</Link></li>
                                    <li className='breadcrumb-item active text-capitalize' aria-current="page">{currentPage}</li>

                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default PageHeader