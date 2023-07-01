import React from 'react'
import  { useTypewriter, Cursor} from 'react-simple-typewriter'
import logo from '../image/logo2.svg';
import {FaArrowCircleRight } from "react-icons/fa";
import {Container,Col,Row} from 'react-bootstrap';

function Home() {
    const [text] = useTypewriter(
        {
            words:['FrontEnd Devloper','BackEnd Devloper','FullStack  Web Devloper'],
            loop:{},
            typeSpeed:120,
            deleteSpeed:100,
            delaySpeed: 3000,
        }
    );
    return (
  <section id="home" >
    <Container>
    <Row >
    <Col lg={8} md={6}  sm={12}>
     <span className="div-home1"> Welcome at My Portfolio</span>
       <div className="para1"> 
       hi! i'm Shady <br></br>
       Elbordeny <br></br>
        ,<span> {text} </span>
       <Cursor/>
     </div>
    <div  id='last-home-div'>
      hello evreyone ,  i have 3 months of experience at web devlopment .
     <p  id='para2'>let's connect  <FaArrowCircleRight   className="icon2"></FaArrowCircleRight></p> 
     </div>
     </Col>
     <Col  lg={4} md={6} sm={12}>
     <div className="animation-div">
    <img src={logo}  alt="pic1"  className='img2'/>
   </div>
   </Col>
   </Row>
   </Container>
   </section>
   
    )
};
export default Home;