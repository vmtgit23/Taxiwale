import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

function BookTaxiModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const save = () => {
    <Alert variant='success'>
      You have successfully booked a ride.
    </Alert>
    handleClose();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Book Ride
      </Button>

      <Modal show={show} onHide={handleClose} dialogClassName='modal70' >
        <Modal.Header closeButton>
          <Modal.Title>Book a Ride</Modal.Title>
        </Modal.Header>
        <Modal.Body dialogClassName='modalbody'>
          Woohoo, let us book a taxi for you!<br/> <br/>
          <form>
            <input type='text' placeholder='Enter Name' name='name'></input> &nbsp; &nbsp;
            <input type='number' placeholder='Enter Mobile number' name='mobileNumber'></input> &nbsp; &nbsp;
            <input type='text' placeholder='Passengers#' name='passengers'></input>
            <br/> <br/>
            <input type='text' placeholder='Start Destination' name='startDestination'></input> &nbsp; &nbsp;
            <input type='text' placeholder='End Destination' name='endDestination'></input> &nbsp; &nbsp;
            <input type='text' placeholder='Taxi Type' name='taxiType'></input>
            <br/> <br/>
            <input type='text' placeholder='Select Date' name='date'></input> &nbsp; &nbsp;
            <input type='text' placeholder='Select Time' name='time'></input> &nbsp; &nbsp;
            <br/>
          </form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={save}>
            Book
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default BookTaxiModal;