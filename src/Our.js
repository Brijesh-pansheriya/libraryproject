import {Col, Row} from "react-bootstrap"
function Our()
{
    return(
        <>
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
                <img src={require('./img/gallary4.jpg')} alt="" srcset="" className='img-fluid mt-5 ' />
              </div>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}
export default Our