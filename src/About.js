import React from 'react'

function About() {
    return (
        <>
            <div className="service pt-5 pb-5 mt-3 mb-3">
                <div className="container">
                    <div className="row">
                        
                        <div className="col-lg-12 mb-5 text-center">
                            <div>
                                <h6 className='bg_text'>OUR BLOG</h6>            
                                <h4 className='bg_text_h4'>Latest News</h4>
                            </div>
                        </div>
                        <div className="row align-item-center">
                            <div className="col-lg-5 col-md-12 col-sm-12">
                                <div className="about-img mt-3">
                                    <a href="#">
                                        <img className="img-fluid" src={require('./img/about us.jpg')} alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className='col-lg-7 col-md-12 col-sm-12 col-12'>
                                <div className='about-content mt-3'>
                                    <p className='m-0'>One web page for every book ever published. It's a lofty but achievable goal.
                                    To build Eastern Library of india, we need hundreds of millions of book records, a wiki interface, and lots of people who are willing to contribute their time and effort to building the site.
                                    To date, we have gathered over 20 million records from a variety of large catalogs as well as single contributions, with more on the way.
                                    Eastern Library of india is an open project: the software is open, the data are open, the documentation is open, and we welcome your contribution. Whether you fix a typo, add a book, or write a widget--it's all welcome. We have a small team of fantastic programmers who have accomplished a lot, but we can't do it alone!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </>
    )
}

export default About