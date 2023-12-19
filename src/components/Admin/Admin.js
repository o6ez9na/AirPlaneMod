import React, { Component } from 'react'
import { Row, Col, Container, Form, InputGroup, Button } from 'react-bootstrap';
import './index.css'

export class Admin extends Component {
  render() {
    return (
      <div class='align_vertical center'>
        <h1 class='center'>admin panel</h1>
        <Container className="justify-content-center align-items-center mt-2 w-25">
          <div>
            <Row>
              <Col>
                <InputGroup size='sm' className='w-40'>
                  <Form.Control placeholder='login' />
                </InputGroup>
              </Col>
            </Row>
          </div>
          <div>
            <Row>
              <Col>
                <InputGroup className='mt-2' size='sm'>
                  <Form.Control placeholder='password' />
                </InputGroup>
              </Col>
            </Row>
          </div>
          

        </Container>
        <Button className='justify-content-center align-items-center mt-2' variant="primary">Sing In</Button>
      </div>
    )
  }
}

export default Admin