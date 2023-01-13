import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function Contactus() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <>

            <section className="bg-img2 img-fluid img_bg">
                <div className="layer">
                    <div className="row">
                        {/* <div className="col">
                            <div className='v-middle content_first text-center'>
                                <h3>New News And Blog</h3>
                                <h2>From Our Library</h2>
                                <button className='btn1 mt-4'>Watch News</button>
                                <button className='btn2 ms-2'>Watch Blog</button>
                            </div>
                            <div className="box_round">
                                <span></span>
                            </div>
                        </div> */}
                        {/* <div className="row text-center mt-5">
                            <div className="col">
                                <div className='social-icon1'>
                                    <i class="fa-solid fa-mobile iconphone text-color"></i>
                                    <h6 className='pt-3 text-color'>phone</h6>
                                    <p className='text-color'>+20 01025178918</p>
                                </div>
                            </div>
                            <div className="col">
                                <div className='social-icon1'>
                                    <i class="fa-regular fa-envelope iconphone text-color"></i>
                                    <h6 className='pt-3 text-color'>MAIL</h6>
                                    <p className='text-color'>Hisham beidea@gmail.com</p>
                                </div>
                            </div>
                            <div className="col">
                                <div className='social-icon1'>
                                    <i class="fa-solid fa-location-dot iconphone text-color"></i>
                                    <h6 className='pt-3 text-color'>ADDRESS</h6>
                                    <p className='text-color'>21 Jumpe Street</p>
                                </div>
                            </div>
                        </div> */}


                        
                    </div>
                </div>
            </section>

            <div className="container">
                <div className="bg-img">
                    <div className='row justify-content-center'>
                        {/* <div className="col-lg-12 pt-5 pb-5 mb-5 text-center">
                            <h1 className='heading1'>CONTACT</h1>
                            <span className='heading2 '>US</span>

                        </div> */}
                        <div className='col-lg-12 pt-5 text-center'>
                            <h6 className='bg_text'>Contact us</h6>
                            <h4 className='bg_text_h4'>get in thoch</h4>
                        </div>

                        <div className='col-auto'>

                            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                <Row className="mb-3">
                                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                                        <Form.Label className='text-color'>First name</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="First name"
                                            defaultValue=""
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                                        <Form.Label className='text-color'>Last name</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Last name"
                                            defaultValue=""
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                                        <Form.Label className='text-color'>Username</Form.Label>
                                        <InputGroup hasValidation>
                                            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                            <Form.Control
                                                type="text"
                                                placeholder="Username"
                                                aria-describedby="inputGroupPrepend"
                                                required
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Please choose a username.
                                            </Form.Control.Feedback>
                                        </InputGroup>
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                                        <Form.Label className='text-color'>City</Form.Label>
                                        <Form.Control type="text" placeholder="City" required />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a valid city.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="3" controlId="validationCustom04">
                                        <Form.Label className='text-color'>State</Form.Label>
                                        <Form.Control type="text" placeholder="State" required />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a valid state.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    {/* <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>Zip</Form.Label>
            <Form.Control type="text" placeholder="Zip" required />
            <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
            </Form.Control.Feedback>
            </Form.Group> */}
                                </Row>
                                <Form.Group className="mb-3">
                                    <Form.Check
                                        className='text-color'
                                        required
                                        label="Agree to terms and conditions"
                                        feedback="You must agree before submitting."
                                        feedbackType="invalid"
                                    />
                                </Form.Group>
                                <Button type="submit" className='mb-5'>Submit form</Button>
                            </Form>

                        </div>

                    </div>
                </div>
            </div>

        </>
    );
}

// render(<Contact />);

export default Contactus