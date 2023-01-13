import { Row,Container} from "react-bootstrap"

function contact(){
    return(
        <>
            <section className='section_y'>
        <Container>
          <div>
            <h6 className='bg_text'>Contact us</h6>
            <h4 className='bg_text_h4'>get in thoch</h4>
          </div>
          <div className="col-md-12 text-center">
            <p className='col-md-offset-2 col-md-8 text_p mt-4'>Lorem ipsum dolor sit amet, in quodsi vulputate pro. Ubique maluisset vel te, in quodsiUbique his dico vituperata ut. in quodsiUbique maluisset te, his dico vituperata ut.</p>
          </div>
          
          <div className="row text-center mt-5">
            <div className="col">
              <div className='social-icon1'>
              <i class="fa-solid fa-mobile iconphone "></i>
              <h6 className='pt-3'>phone</h6>
              <p>+20 01025178918</p>
              </div>
            </div>
            <div className="col">
              <div className='social-icon1'>
              <i class="fa-regular fa-envelope iconphone"></i>
              <h6 className='pt-3'>MAIL</h6>
              <p>Hisham beidea@gmail.com</p>
              </div>
            </div>
            <div className="col">
              <div className='social-icon1'>
              <i class="fa-solid fa-location-dot iconphone"></i>
              <h6 className='pt-3'>ADDRESS</h6>
              <p>21 Jumpe Street</p>
              </div>
            </div>
          </div>

          <div className="main-form">
              <div className="offset-md-2 col-md-8 offset-sm-1 col-sm-10">
                <form>
                <Row>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input placeholder='name*'></input>
                    </div>
                  </div>
                  <div className="col-md-6">
                  <div className="form-group">
                      <input placeholder='email*'></input>
                  </div>
                  </div>
                </Row>
                <Row>
                  <div className="col-md-12">
                    <div className="form-group">
                      <input type="text" placeholder='Subject*'/>
                    </div>
                  </div>
                </Row>
                <Row>
                <div className="col-md-12">
                    <div className="form-group">
                      <textarea name="message" placeholder='message*' cols="30" rows="4"></textarea>
                    </div>
                </div>
                <div className="col-sm-4">
                  <input type="submit" value="Send Message" />
                </div>
                </Row>
                </form>
              </div>
            </div>
        </Container>
      </section>
        </>
    )
}
export default contact