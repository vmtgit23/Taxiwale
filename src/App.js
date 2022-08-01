import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarHeader from './Home/NavbarHeader';
import Home from './Home/Home';
import AboutUs from './AboutUs/AboutUs';
import Blog from './Blog/Blog';
import ContactUs from './ContactUs/ContactUs';


function App() {
  return (
    <div className="App">
      <div id='Home'>
        <Home />
      </div>

      <div id='AboutUs'>
        <AboutUs />
      </div>

      <div id='Blog'>
        <Blog />
      </div>

      <div id='ContactUs'>
        <ContactUs />
      </div>

    </div>
  );
}

export default App;
