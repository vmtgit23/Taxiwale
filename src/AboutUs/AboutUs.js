import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className='AboutUsBody'>
      <br/> <br/> <br/> <br/> <br/> <br/>
      <Breadcrumb className='center'>
        <Breadcrumb.Item href='#'>Home</Breadcrumb.Item>
        <Breadcrumb.Item active>About Us</Breadcrumb.Item>
      </Breadcrumb>
      <div className='text-center'>About Us</div>
      <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>

      <p className='heading'> Our Mission: Affordable and Reliable cab service for all</p>
      <p className='padding-l'>
        We are a team of developers who are determined to make cab service reliable and affordable. We conceptualized this startup after we suffered from highly unreliable cab aggregators. We used to face problems like cancellation, price surge and technical glitches very often. So we set out to address this issue by taking matters into our own hand.
      </p> <br/> <br/>

      <div>
        <Carousel fade className='center'>
          <Carousel.Item>
            <Card>
              <Card.Img variant='top' src={require('./person1.png')} className='center-h300'/>
              <Card.Body>
                <Card.Title> Vikas Mani Tripathi </Card.Title>
                <Card.Text>
                  Hey there! I am a Trainee Analyst at Wissen. I help my team maintain software and build exciting new features for the client.
                </Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Item>
          <Carousel.Item>
            <Card>
              <Card.Img variant='top' src={require('./person2.png')} className='center-h300'/>
              <Card.Body>
                <Card.Title> Aishika Saha </Card.Title>
                <Card.Text>
                  Hey there! I am a Trainee Analyst at Wissen. I help my team maintain software and build exciting new features for the client.
                </Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Item>
          <Carousel.Item>
            <Card>
              <Card.Img variant='top' src={require('./person3.png')} className='center-h300'/>
              <Card.Body>
                <Card.Title> Tulyank Tejul Gautam </Card.Title>
                <Card.Text>
                  Hey there! I am a Trainee Analyst at Wissen. I help my team maintain software and build exciting new features for the client.
                </Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Item>
          <Carousel.Item>
            <Card>
              <Card.Img variant='top' src={require('./person4.png')} className='center-h300'/>
              <Card.Body>
                <Card.Title> Shreya Pandey </Card.Title>
                <Card.Text>
                  Hey there! I am a Principal Engineer at Wissen. I manage a team of seven people to build automation tool for our client.
                </Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default AboutUs;