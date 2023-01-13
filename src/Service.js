import {Col, Row} from "react-bootstrap"
function Services()
{
    return(
        <>
            <div className="service pt-5 pb-5 mt-3 mb-3">
                <div className="container">
                    <div className="row">
                        {/* <div className="col-lg-12 mb-5 text-center">
                            <h1 className='heading1'>OUR</h1>
                            <span className='heading2'>SERVICES</span>
                        </div> */}
                        <div className="col-lg-12 mb-5 text-center">
                            <h6 className='bg_text'>OUR SERVICES</h6>
                            <h4 className='bg_text_h4'>What Can We Do ?</h4>
                        </div>
                    </div>
                    <Row className=""  sm={1} md={2} lg={4} xl={4} xs={1} >
                        <Col className="mb-5">
                            <div className="box2">
                                <div className="ibox">
                                    <div className="icon isize">
                                        <i class="fa-solid fa-book"></i>
                                    </div>
                                </div>
                                <div className="iservice">
                                        <h5>
                                            <a href="#" className="text-decoration-none">School & Library Services</a>
                                        </h5>
                                        <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod
                                        </p>
                                    </div>
                            </div>
                        </Col>
                        <Col className="mb-5">
                            <div className="box2">
                                <div className="ibox">
                                    <div className="icon isize">
                                        <i class="fa-solid fa-house-laptop"></i>
                                    </div>
                                </div>
                                <div className="iservice">
                                    <h5>
                                        <a href="#" className="text-decoration-none">Homeschooling Resources</a>
                                    </h5>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod
                                    </p>
                                </div>                
                            </div>
                        </Col>
                        <Col className="mb-5">
                            <div className="box2">
                                <div className="ibox">
                                    <div className="icon isize">
                                        <i class="fa-solid fa-computer"></i>
                                    </div>
                                </div>
                                <div className="iservice">
                                    <h5>
                                        <a href="#" className="text-decoration-none">Teacher Resources Books</a>
                                    </h5>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod
                                    </p>
                                </div>                
                            </div>
                        </Col>
                        <Col className="mb-5">
                            <div className="box2">
                                <div className="ibox">
                                    <div className="icon isize">
                                        <i class="fa-solid fa-user-pen"></i>
                                    </div>
                                </div>
                                <div className="iservice">
                                    <h5>
                                        <a href="#" className="text-decoration-none">Publishers & Authors</a>
                                    </h5>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}
export default Services