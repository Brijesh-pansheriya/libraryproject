import Book from './Book';
import Footer from './Footer';
import Header from './Header';
import Our from './Our';
import Services from './Service';
import Slider from './Slider';
import Group from './group';
import About from './About';
import Contact from './Contact';

function Home() {
    return (
        <>
            {/* <Header /> */}
            <Slider />
            <Services></Services>
            <Our></Our>
            <Book></Book>
            <About></About>
            <Group></Group>
            <Contact></Contact>

            {/* <Footer/> */}
        </>
    )
}
export default Home