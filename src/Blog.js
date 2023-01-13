import { Container } from "react-bootstrap"

function Blog() {
  return (
    <>
      <section className="bg_img img-fluid img_bg">
        <div className="layer">
          <div className="row">
            <div className="col">
              <div className='v-middle content_first text-center'>
                <h3>New News And Blog</h3>
                <h2>From Our Library</h2>
                <button className='btn1 mt-4'>Watch News</button>
                <button className='btn2 ms-2'>Watch Blog</button>
              </div>
              <div className="box_round">
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='section_y section3'>
        <Container>
          <div>
            <h6 className='bg_text'>OUR BLOG</h6>
            <h4 className='bg_text_h4'>Latest News</h4>
          </div>

          <div className="row mt_5">
            <div className="col-md-4">
              <div className="post">
                <div className="post-img">
                  <a href="#"><img src={require('./img/blog5.jpg')} alt="" srcset="" className='img-fluid' /></a>
                </div>
                <div className="post-content">
                  <a href="#"><h6>Wyden, Eshoo question “big five” publishers over</h6></a>
                  <p>Lorem ipsum dolor sit amet, consec tetur elit. In maximus ligula semper.</p>
                  <a href="#"><span>Read more..</span></a>
                  <div className="inform">
                    <ul>
                      <li className='list-unstyled'>
                        <a href="#">
                          <span><i class="fa-solid fa-user"></i></span>
                          admin
                        </a>
                      </li>
                      <li className='list-unstyled'>
                        <a href="#">
                          <span><i class="fa-regular fa-clock"></i></span>
                          6 august
                        </a>
                      </li>
                      <li className='list-unstyled'>
                        <a href="#">
                          <span>
                            <i class="fa-solid fa-tag"></i>
                          </span>
                          web
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="post">
                <div className="post-img">
                  <a href="#"><img src={require('./img/blog5.jpg')} alt="" srcset="" className='img-fluid' /></a>
                </div>
                <div className="post-content">
                  <a href="#"><h6>Book News: Egypt Bans Ridley Scott’s ‘Exodus’ For ‘Historical</h6></a>
                  <p>Lorem ipsum dolor sit amet, consec tetur elit. In maximus ligula semper.</p>
                  <a href="#"><span>Read more..</span></a>
                  <div className="inform">
                    <ul>
                      <li className='list-unstyled'>
                        <a href="#">
                          <span><i class="fa-solid fa-user"></i></span>
                          admin
                        </a>
                      </li>
                      <li className='list-unstyled'>
                        <a href="#">
                          <span><i class="fa-regular fa-clock"></i></span>
                          6 august
                        </a>
                      </li>
                      <li className='list-unstyled'>
                        <a href="#">
                          <span>
                            <i class="fa-solid fa-tag"></i>
                          </span>
                          web
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="post">
                <div className="post-img">
                  <a href="#"><img src={require('./img/blog6.jpg')} alt="" srcset="" className='img-fluid' /></a>
                </div>
                <div className="post-content">
                  <a href="#"><h6>There is a method to this book-buying madness</h6></a>
                  <p>Lorem ipsum dolor sit amet, consec tetur elit. In maximus ligula semper.</p>
                  <a href="#"><span>Read more..</span></a>
                  <div className="inform">
                    <ul>
                      <li className='list-unstyled'>
                        <a href="#">
                          <span><i class="fa-solid fa-user"></i></span>
                          admin
                        </a>
                      </li>
                      <li className='list-unstyled'>
                        <a href="#">
                          <span><i class="fa-regular fa-clock"></i></span>
                          6 august
                        </a>
                      </li>
                      <li className='list-unstyled'>
                        <a href="#">
                          <span>
                            <i class="fa-solid fa-tag"></i>
                          </span>
                          web
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </Container>
      </section>
    </>
  )
}
export default Blog