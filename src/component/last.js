import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Container,Col,Row}  from 'react-bootstrap';
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import {BsInstagram } from "react-icons/bs";

function Last (){
    return (
   
  <div  className="last-sec"     mx-auto text-md-start>
  <Container  className="last-card">
   <Row className="align-items-center">
      <p className="last-para"> Enter Your Email for more Projects</p>
   <Form  className="form2">
      <Form.Group  controlId="formBasicEmail">
         <Form.Control   className="email-text"  type="text" placeholder="Enter your E-mail :"   />
         </Form.Group>
</Form>
</Row>
<Row className="align-items-center" >
  <Col>
  <div className="last-icon"> 
    <a href="https://www.facebook.com/profile.php?id=100075393140308&mibextid=ZbWKwL" ><BsFacebook  className="icon1" /></a> 
    <a href="https://www.linkedin.com/in/shady-elbordeny-6290b520b/" ><BsLinkedin  className="icon1" /></a>
    <a href="https://instagram.com/shadyelbordeny?igshid=ZGUzMzM3NWJiOQ==" ><BsInstagram  className="icon1" /></a>
  <div className="copy-div">
  <p className="l-para">
   Developed by Shady Elbordeny
  </p>
  </div>
  </div>
</Col>
</Row>
</Container>
</div>
);

};

export default Last;