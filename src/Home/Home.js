import NavbarHeader from './NavbarHeader';
import BookTaxi from './BookTaxiModal';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Home.css';


function Home() {
  return (
    <div className='home'>

      <NavbarHeader />;
      <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>

      <div className='right'>
        <BookTaxi/>
      </div>

    </div>
  );
}

export default Home;