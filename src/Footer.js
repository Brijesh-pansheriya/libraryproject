import { Col, Container, Row } from "react-bootstrap"

function Footer() {
    return (
        <>

            <footer className='section13 section13_y'>
            <Container>
            <div className="logo text-center">
              <a href="#" >
                <img src={require('./img/logo2.png')} alt="" />
              </a>
            </div>
            
            <div className="main-footer text-center">
                <h4 className='footer_logo'><span></span>Follow us</h4>
            </div>
            <div className="footer-icon text-center mt-4">
                <a href="#"><span><i class="fa-brands fa-facebook-f"></i></span></a>
                <a href="#"><span><i class="fa-brands fa-twitter"></i></span></a>
                <a href="#"><span><i class="fa-brands fa-linkedin-in"></i></span></a>
                <a href="#"><span><i class="fa-brands fa-pinterest-p"></i></span></a>
                <a href="#"><span><i class="fa-brands fa-instagram"></i></span></a>
            </div> 
            <div>
              <div className="row">
                <div className="col">
                  <div className="sub-footer">
                      <p>Copy Right © By  2017 | All Rights Reserved.</p>

                  </div>
                </div>
              </div>
            </div>
            </Container>
          </footer>
        </>

    )
}

export default Footer