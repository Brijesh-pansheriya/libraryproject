

function Gallary() {
    return (
        <>
            <section className="bg_img img-fluid img_bg">
                <div className="layer">
                    <div className="row">
                        <div className="col">
                            <div className='v-middle content_first text-center'>
                                <h3>Expand Your Mind,</h3>
                                <h2>Read A Book</h2>
                                <button className='btn1 mt-4'>View Photos</button>
                                {/* <button className='btn2 ms-2'>Watch Blog</button> */}
                            </div>
                            <div className="box_round">
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="gallary-sec pt-5 pb-5 mt-3">
                <div className="container">
                    <div className="row">
                        {/* <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="title-part text-center mb-4">
                                    <h2 className="m-0">Gallary</h2>
                                </div>
                            </div> */}

                        <div className="col-lg-12 mb-5 text-center">
                            <h6 className='bg_text'>OUR GALLARY</h6>
                            <h4 className='bg_text_h4'>Photo Gallary</h4>
                            <p className='bg_text_p'>Lorem ipsum dolor sit amet, in quodsi vulputate pro. Ubique maluisset vel te, in quodsiUbique his dico <br></br> vituperata ut. in quodsiUbique maluisset te, his dico vituperata ut.</p>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="gallary-box mt-4">
                                <a href="#">
                                    <div className="gel-box-img">
                                        <img src={require('./img/gallary1.jpg')} alt="" />
                                        <div className="gel-box-img-content">
                                            <h4>.....</h4>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="gallary-box mt-4">
                                <a href="#">
                                    <div className="gel-box-img">
                                        <img src={require('./img/gallary2.jpg')} alt="" />
                                        <div className="gel-box-img-content">
                                            <h4>.....</h4>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="gallary-box mt-4">
                                <a href="#">
                                    <div className="gel-box-img">
                                        <img src={require('./img/gallary3.jpg')} alt="" />
                                        <div className="gel-box-img-content">
                                            <h4>..... </h4>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="gallary-box mt-4">
                                <a href="#">
                                    <div className="gel-box-img">
                                        <img src={require('./img/gallary4.jpg')} alt="" />
                                        <div className="gel-box-img-content">
                                            <h4>.....</h4>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="gallary-box mt-4">
                                <a href="#">
                                    <div className="gel-box-img">
                                        <img src={require('./img/gallary5.jpg')} alt="" />
                                        <div className="gel-box-img-content">
                                            <h4>.....</h4>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="gallary-box mt-4">
                                <a href="#">
                                    <div className="gel-box-img">
                                        <img src={require('./img/gallary6.jpg')} alt="" />
                                        <div className="gel-box-img-content">
                                            <h4>.....</h4>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="gallary-box mt-4">
                                <a href="#">
                                    <div className="gel-box-img">
                                        <img src={require('./img/gallary7.jpg')} alt="" />
                                        <div className="gel-box-img-content">
                                            <h4>.....</h4>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="gallary-box mt-4">
                                <a href="#">
                                    <div className="gel-box-img">
                                        <img src={require('./img/gallary8.jpg')} alt="" />
                                        <div className="gel-box-img-content">
                                            <h4>.....</h4>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Gallary