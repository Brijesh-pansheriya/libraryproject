import { Col, Container, Row } from "react-bootstrap"

function Header() {
    return (
        <>
            <div className="info p-2">
                <Container>
                    <Row className="d-flex justify-content-between align-items-center ">
                        <Col className="col-auto"><div className="email"><i class="fa-regular fa-envelope white"></i>&nbsp;eloi@gmail.com</div></Col>
                        <Col className="col-auto"><div className="contact">contact us +91 9898989898</div></Col>
                        <Col className="col-auto">
                            <div className="icon">
                                <i class="fa-brands fa-instagram white me-3"></i>
                                <i class="fa-brands fa-facebook white me-3"></i>
                                <i class="fa-brands fa-twitter white me-3"></i>
                                <i class="fa-solid fa-right-to-bracket white"></i>
                            </div>
                        </Col>
                    </Row>

                </Container>
            </div>
            <Container>
                <Row className="justify-content-between align-items-center">
                    <Col className="col-auto">
                    <div className="logo text-center">
                        <a href="#" >
                            <img src={require('./img/logo2.png')} alt="" />
                        </a>
                    </div>


                    </Col>
                    <Col className="col-auto ">
                        <header className="d-none d-md-block">
                            <ul className="main_menu d-flex list-unstyled ">
                                <li><a href="/Home" className="me-3">HOME</a></li>
                                <li><a href="/Blog" className="me-3">BLOG</a></li>
                                <li><a href="/Gallary" className="me-3">GALLARY</a></li>
                                <li><a href="/Aboutus" className="me-3">ABOUT US</a></li>
                                <li><a href="/Contactus" className="me-3">CONTACT US</a></li>
                            </ul>
                        </header>
                        <div className=" d-md-none">
                        <i class="fa-solid fa-bars"></i>
                        </div>
                    </Col>
                    <Col className="col-auto d-none d-md-block">
                        <div className="search">
                            {/* <input type="search" name="" id="" /> */}
                            {/* <i class="fa-solid fa-magnifying-glass"></i> */}
                        </div>
                    </Col>

                </Row>
            </Container>
        </>
    )
}

export default Header