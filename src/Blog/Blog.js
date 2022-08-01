import './Blog.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Blog() {
  return (
    <div className='BlogBody'>
      <br/> <br/> <br/> <br/> <br/> <br/>
      <Breadcrumb className='center'>
        <Breadcrumb.Item href='#'>Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Blog</Breadcrumb.Item>
      </Breadcrumb>
      <div className="text-center">Blog</div>
      <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>

      <div className='padding-l'>
        <Card className="left-w25">
          <Card.Body>
            <Card.Title> Categories </Card.Title>
            <Button variant='info' active> Car Repair </Button> <br/>
            <Button variant='light'> Services </Button> <br/>
            <Button variant='light'> Car Features </Button> <br/>
          </Card.Body>
        </Card>
      </div>

      <div className='padding-r'>
        <Card className='right-w25'>
          <Card.Body>
            <Card.Title> Latest Posts </Card.Title>
            <Button variant='info' active> Manage Repair Costs </Button> <br/>
            <Button variant='light'> Broken Headlights! </Button> <br/>
            <Button variant='light'> Essentials of an Engine </Button> <br/>
          </Card.Body>
        </Card>
      </div>

      <div className='center-w65'>
        <p className='heading'>Manage Repair Costs</p>
        <img src={require('./car-repair.jpg')} className='center-h300'/>
        <p>
          By servicing your car on a regular basis and visiting a mechanic as soon as a problem arises, you can reduce the cost and frequency of future repairs. There are other ways to reduce repair costs, as well, such as:
          <br/>
          Learn how to perform regular maintenance yourself: Performing tasks like changing your oil and replacing your filters can help you cut down on visits to the auto shop. If you need some help getting started, check out the information provided in your car’s manual.
          <br/>
          Follow the manufacturer’s recommendations: It can be tempting to use inexpensive parts and vehicle fluids, but doing so could potentially reduce your vehicle’s longevity. Car manufacturers run tests to determine which parts and fluids work best with their models and make recommendations based upon their findings. Even if the higher quality options are more expensive up front, you’ll likely save money down the road if you follow their guidance.
          <br/>
          Adhere to the manual’s maintenance schedule: Just like using the manufacturer’s recommended parts, following the manual’s recommended maintenance schedule helps prevent problems before they arise. Even though nothing may appear wrong with your car on the surface, regularly scheduled maintenance can help lengthen the life of your vehicle and detect small issues before they worsen.
        </p>
      </div>

    </div>
  );
}

export default Blog;