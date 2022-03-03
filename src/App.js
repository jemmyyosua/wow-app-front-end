import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './css/style.css';
import icon from './assets/icon.png';
import vector from './assets/vector.png';
import {Row, Col, Button } from 'react-bootstrap';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';


function App(){
    return  (
        <div>
           <img className="img1" src={vector} alt="" />
           <Col className="ms-5" lg="7">
           <div className="col ms-5">
                    <img className="icon mt-4" src={icon} alt="" />
                    <p>Sign-up now and subscribe to enjoy all the cool 
                       <br/> and latest books - The best book rental service 
                       <br /> provider in Indonesia</p>
                    <Col lg="8">
                    <Row className="mt-5">
                        <Col><SignUp/></Col>
                        <Col><SignIn/></Col>
                    </Row>   
                    </Col> 
            </div>
            </Col>
        </div>
    )
}

export default App;
