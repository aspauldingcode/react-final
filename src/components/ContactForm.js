import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function ContactForm() {
    return (
        <div className='form-wide'>
            <Form>
                <Row>
                    <Col>
                        <Form.Group className="container" controlId="formBasicEmail">
                            <Form.Label><h5>Email address</h5></Form.Label>
                            <Row className="justify-content-md-center">
                                <Col>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Col>
                            </Row>
                            <Form.Text className="text-muted">
                                We'll sell your email to everyone else.
                            </Form.Text>
                        </Form.Group>
                        <br />
                        <Form.Group className="container" controlId="Form.ControlTextarea">
                            <Form.Label><h5>Message</h5></Form.Label>
                            <Row className="justify-content-md-center">
                                <Col>
                                    <Form.Control as="textarea" placeholder='What would you like to say?' rows={3} />
                                </Col>
                            </Row>
                        </Form.Group>
                        <br />
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Col>

                    <Form.Text className="text-muted">
                        Joke's on you, this Contact Form only submits your data into the void.
                    </Form.Text>
                </Row>
            </Form>
        </div>
    )
}
