import './ContactUs.css'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function ContactUs() {
  return (
    <div className='ContactUsBody'>
      <br/> <br/> <br/> <br/> <br/> <br/>
      <Breadcrumb className='center'>
        <Breadcrumb.Item href='#'>Home</Breadcrumb.Item>
        <Breadcrumb.Item active>ContactUs</Breadcrumb.Item>
      </Breadcrumb>
      <div className="text-center" id='backdropText' style={{ fontSize: '36px', color: 'white', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>Contact Us</div>
      <br/> <br/> <br/> <br/> <br/>

      <div className='solid-white'>


        <div className='left-w40'>
          <p className='heading'> Get in Touch </p>
          <p className='padding-l20'> How can we help you?</p>
          <Form className='padding-l20'>
            <Form.Group>
              <Form.Control type='text' placeholder='Enter your name' name='name'/>
            </Form.Group>
            <Form.Group>
              <Form.Control type='email' placeholder='Enter your email-id' name='email'/>
            </Form.Group>
            <Form.Group className='h30'>
              <Form.Control type='text' placeholder='Go ahead, we are listening...' name='message' />
            </Form.Group>
            <br/>
            <Button variant='primary' type='submit'>Submit</Button>
          </Form>
        </div>

        <div className='right-w50 padding-t20'>
          <a href='https://www.facebook.com/' target='_blank' className='sm'> <img src={require('./facebook.png')} className='w50-h50'/> </a> &nbsp; &nbsp; &nbsp;
          <a href='https://www.instagram.com/' target='_blank' className='sm'> <img src={require('./instagram.png')} className='w50-h50'/> </a> &nbsp; &nbsp; &nbsp;
          <a href='https://www.linkedin.com/' target='_blank' className='sm'> <img src={require('./linkedin.png')} className='w50-h50'/> </a> &nbsp; &nbsp; &nbsp;
          <a href='https://www.twitter.com/' target='_blank' className='sm'> <img src={require('./twitter.png')} className='w50-h50'/> </a> <br/><br/><br/>

          <p>
            <img src={require('./location.png')} className='w50-h50'/> &nbsp; &nbsp; &nbsp;
            Taxiwala, Global Technology Park, Bellandur, Bengaluru, Karnataka
          </p>

          <p>
            <img src={require('./phone.png')} className='w50-h50'/> &nbsp; &nbsp; &nbsp;
            +91 7722947935
          </p>

          <p>
            <img src={require('./email.png')} className='w50-h50'/> &nbsp; &nbsp; &nbsp;
            vikas.tripathi@wissen.com
          </p>
        </div>
      </div>
      <br/><br/>

    </div>

  );
}

export default ContactUs;