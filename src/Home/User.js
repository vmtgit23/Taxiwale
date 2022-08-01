import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';


function User() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const loginAlert = () => {<Alert key='success' variant='success'>You have successfully logged in. </Alert>}

  return (
    <div>
      <Button variant="primary" onClick={handleShow} className="me-2">
        User
      </Button>
      <Offcanvas show={show} onHide={handleClose} keyboard='true' placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Welcome!</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Login
          <Form>
            <Form.Group>
              <Form.Control type='email' placeholder='Enter your email-id' name='email'/>
            </Form.Group>
            <Form.Group>
              <Form.Control type='password' placeholder='Enter your password' name='pwd'/>
            </Form.Group>

            <Button variant='primary' onClick={loginAlert} > Login </Button>
          </Form>
          <hr/>

          Register
          <Form>
            <Form.Group>
              <Form.Control type='text' placeholder='Enter your name' name='name' />
            </Form.Group>
            <Form.Group>
              <Form.Control type='email' placeholder='Enter your email-id' name='email' />
            </Form.Group>
            <Form.Group>
              <Form.Control type='number' placeholder='Enter your mobile number' name='mobileNumber' />
            </Form.Group>
            <Form.Group>
              <Form.Control type='password' placeholder='Enter a password' name='pwd' />
            </Form.Group>
            <Form.Group>
              <Form.Control type='password' placeholder='Confirm the password' name='cnfPwd' />
            </Form.Group>
            <Button variant='primary' key='primary'>Register</Button>
          </Form>

        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default User;