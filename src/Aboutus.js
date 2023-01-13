import React from 'react'

function Aboutus() {
    return (
        <>
            <section className="bg_img img-fluid img_bg">
                <div className="layer">
                    <div className="row">
                        <div className="col">
                            <div className='v-middle content_first text-center'>
                                <h3>Today a reader.</h3>
                                <h2>Tomorrow a leader</h2>
                                <button className='btn1 mt-4'>Read more</button>
                                {/* <button className='btn2 ms-2'>Watch Blog</button> */}
                            </div>
                            <div className="box_round">
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="service pt-5 pb-5 mt-3 mb-3">
                <div className="container">
                    <div className="row">
                        
                        <div className="col-lg-12 mb-5 text-center">
                            <div>
                                <h6 className='bg_text'>About us</h6>            
                                <h4 className='bg_text_h4'>About our library</h4>
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
            <section className='section_y pt-5 pb-5 mt-3 mb-3'>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className='text-center'>
                <h6 className='bg_text'>who we are</h6>
                <h4 className='bg_text_h4'>We Are Louiseville public library</h4>
                <p className='bg_text_p'>Lorem ipsum dolor sit amet, in quodsi vulputate pro. Ubique maluisset vel te, in quodsiUbique his dico <br></br> vituperata ut. in quodsiUbique maluisset te, his dico vituperata ut.</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className='d-flex justify-content-center'>
                <img src={require('./img/gallary6.jpg')} alt="" srcset="" className='img-fluid mt-5 ' />
              </div>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}

export default Aboutus