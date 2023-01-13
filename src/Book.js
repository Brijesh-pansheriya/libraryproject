function Book()
{
    return(
        <>
            <div className="category pt-5 pb-5 mt-5 mb-5">
                <div className="container ">
                    <div className="row">
                        {/* <div className="col-lg-12 mb-5 text-center">
                            <h1 className='heading1'>BOOK'S</h1>
                            <span className='heading2'>CATEGORY</span>
                        </div> */}
                        <div className="col-lg-12 mb-5 text-center">
                            <h6 className='bg_text'>OUR BOOKS</h6>
                            <h4 className='bg_text_h4'>Book's Category</h4>
                            <p className='bg_text_p'>Lorem ipsum dolor sit amet, in quodsi vulputate pro. Ubique maluisset vel te, in quodsiUbique his dico <br></br> vituperata ut. in quodsiUbique maluisset te, his dico vituperata ut.</p>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="box text-center">
                                <div className="box-img">
                                    <a href="#">
                                        <img className='img-fluid' src={require('./img/arts.jpg')} alt="" />
                                    </a>
                                </div>
                                <div className="img-content">
                                    <h4>Arts & Photography</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="box text-center">
                                <div className="box-img">
                                    <a href="#">
                                        <img className='img-fluid' src={require('./img/biography&memory.jpg')} alt="" />
                                    </a>
                                </div>
                                <div className="img-content">
                                    <h4>Biography & Memory</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="box text-center">
                                <div className="box-img">
                                    <a href="#">
                                        <img className='img-fluid' src={require('./img/business&money.jpg')} alt="" />
                                    </a>
                                </div>
                                <div className="img-content">
                                    <h4>Business & Money</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="box text-center">
                                <div className="box-img">
                                    <a href="#">
                                        <img className='img-fluid' src={require('./img/politics&socialscience.jpg')} alt="" />
                                    </a>
                                </div>
                                <div className="img-content">
                                    <h4>Politics & Socialscience</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
export default Book