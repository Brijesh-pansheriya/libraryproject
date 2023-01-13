import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Slider() {
    return (
        <>

            <OwlCarousel className='owl-theme' loop items={1} nav _>
                <div class='item sider_content'>
                    <a href="#" className='text-decoration-none'>
                        <img className='img-fluid' src={require('./img/slider.jpg')} alt="" />
                        <p className='animate__fadeInDown slogan  display-5'>Expand Your Mind,</p>
                        <p className='slogan2 display-5'>Read A Book</p>
                    </a>
                </div>
                <div class='item sider_content'>
                    <a href="#" className='text-decoration-none'>
                        <img className='img-fluid' src={require('./img/slider.jpg')} alt="" />
                        <p className='animate__fadeInDown slogan display-5'>Travel to the stars,</p>
                        <p className='slogan2 display-5'> Read books!</p>
                    </a>
                </div>
                <div class='item sider_content'>
                    <a href="#">
                        <img className='img-fluid' src={require('./img/slider2.jpg')} alt="" />
                        <p className='slogan display-5'>Today a reader.</p>
                        <p className='slogan3 display-5'>Tomorrow a leader</p>
                    </a>
                </div>
            </OwlCarousel>

        </>
    )
}
export default Slider