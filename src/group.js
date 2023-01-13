function Group() {
    return (
        <>
            <section className='section_y pt-5 pb-5 mt-5 mb-5'>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div>
                                <h6 className='bg_text'>our team</h6>
                                <h4 className='bg_text_h4'>Our Creative Mindes</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-sm-4">
                            <div className='team-item'>
                                <img src={require('./img/asset 1.jpeg')} alt="" className='img-fluid ' />
                                <div className="infor">
                                    <div className="v-middle text-center">
                                        <h6 className=''>john Doe</h6>
                                        <h5>web Designer</h5>
                                        <div className="social-icon mt-4">
                                            <a href="#">
                                                <span>
                                                    <i class="fa-brands fa-facebook-f"></i>
                                                </span>
                                            </a>
                                            <a href="#">
                                                <span>
                                                    <i class="fa-brands fa-twitter"></i>
                                                </span>
                                            </a>
                                            <a href="#">
                                                <span>
                                                    <i class="fa-brands fa-linkedin-in"></i>
                                                </span>
                                            </a>
                                            <a href="#"><span><i class="fa-brands fa-pinterest-p"></i></span></a>
                                            <a href="#"><span><i class="fa-brands fa-instagram"></i></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className='team-item'>
                                <img src={require('./img/asset 2.jpeg')} alt="" className='img-fluid' />
                                <div className="infor">
                                    <div className="v-middle text-center">
                                        <h6>john Doe</h6>
                                        <h5>Manager</h5>
                                        <div className="social-icon">
                                            <a href="#">
                                                <span>
                                                    <i class="fa-brands fa-facebook-f"></i>
                                                </span>
                                            </a>
                                            <a href="#">
                                                <span>
                                                    <i class="fa-brands fa-twitter"></i>
                                                </span>
                                            </a>
                                            <a href="#">
                                                <span>
                                                    <i class="fa-brands fa-linkedin-in"></i>
                                                </span>
                                            </a>
                                            <a href="#"><span><i class="fa-brands fa-pinterest-p"></i></span></a>
                                            <a href="#"><span><i class="fa-brands fa-instagram"></i></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className='team-item'>
                                <img src={require('./img/asset 3.jpeg')} alt="" className='img-fluid' />
                                <div className="infor">
                                    <div className="v-middle text-center">
                                        <h6>john Doe</h6>
                                        <h5>Seo</h5>
                                        <div className="social-icon">
                                            <a href="#">
                                                <span>
                                                    <i class="fa-brands fa-facebook-f"></i>
                                                </span>
                                            </a>
                                            <a href="#">
                                                <span>
                                                    <i class="fa-brands fa-twitter"></i>
                                                </span>
                                            </a>
                                            <a href="#">
                                                <span>
                                                    <i class="fa-brands fa-linkedin-in"></i>
                                                </span>
                                            </a>
                                            <a href="#"><span><i class="fa-brands fa-pinterest-p"></i></span></a>
                                            <a href="#"><span><i class="fa-brands fa-instagram"></i></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col col-6">
                            <div>
                                <h4>Why choose our library books ?</h4>
                                <p className='mt-4'>Lorem ipsum dolor sit amet, in quodsi vulputate pro. Ubique maluisset vel te, in quodsiUbique his dico vituperata ut. in quodsiUbique maluisset te,quodsiUbique his dico vituperata ut.</p>

                                <a href="#"><button className='btn3 mt-5'>purchase Now</button></a>

                            </div>
                        </div>
                        <div className="col col-6">
                            <div>
                                <span className='ps-5'>Non-Fiction</span>
                                <div className="line">
                                    <span className='circle_line ps-2'>90%</span>
                                </div>
                                <span className='ps-5'>Edited(Non-Fictiion)</span>
                                <div className="line2">
                                    <span className='circle_line2 ps-2'>80%</span>
                                </div>
                                <span className='ps-5'>Reference(Non-Fictiion)</span>
                                <div className="line2">
                                    <span className='circle_line4 ps-2'>83%</span>
                                </div>
                                <span className='ps-5'>Fiction</span>
                                <div className="line3">
                                    <span className='circle_line3 ps-2'>85%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
export default Group