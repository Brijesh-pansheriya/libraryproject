import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom"
import Header from './Header';
import Home from './Home';
import About from './About';
import Footer from './Footer';
import Services from './Service';
import Blog from './Blog';
import Gallary from './Gallary';
import Aboutus from './Aboutus';
import Contactus from './Contactus';

function App() {
  return (
    <div className="App">
      <Header></Header>
      {/* <Home/> */}
      <Routes>
        <Route path="/Home" element={ <Home></Home>}/>
        <Route path="/" element={ <Home/> } />
        <Route path="/Blog" element={<Blog></Blog>}/>
        <Route path="/Gallary" element={<Gallary></Gallary>}/>
        <Route path="/Aboutus" element={<Aboutus></Aboutus>}/>
        <Route path="/Contactus" element={<Contactus></Contactus>}/>
        {/* <Route path="" element={<Services/>} /> */}
        <Route path="/about" element={ <About/> } />
        {/* <Route path="" element={<Footer/>} /> */}
      </Routes>
      <Footer></Footer>
    </div>


    //   <div className="App">
    //   <Header></Header>
    //   <Routes>
    //   <Route path="/Home" element={<Home></Home>}/>
    //   <Route path="/" element={<Home></Home>}/>
    //   <Route path="/Blog" element={<Blog></Blog>}/>
    //   <Route path="/Gallary" element={<Gallary></Gallary>}/>
    //   <Route path="/Aboutus" element={<Aboutus></Aboutus>}/>
    //   <Route path="/Contactus" element={<Contactus></Contactus>}/>
      

    //   </Routes>
    //   <Footer></Footer>
    // </div>
  );
}

export default App;
