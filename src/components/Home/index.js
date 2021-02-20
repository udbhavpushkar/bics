import React, {useEffect} from 'react';
import {Col, Row} from "react-materialize";
import Materialize from "materialize-css";


const Home = () => {
    useEffect(()=>{
        Materialize.AutoInit()
    })
    return (
        <Row>
            <div className="col m9 s12 push-m3" style={{"padding": "0"}}>
                <div className="carousel carousel-slider">
                    <a key="1" className="carousel-item">
                        <img alt="img2"
                             style={{"height": "400px"}}
                             src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"/>
                        </a>
                    <a key="2" className="carousel-item">
                        <img alt="img3"
                             style={{"height": "400px"}}
                             src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"/>
                    </a>
                    <a key="3" className="carousel-item">
                        <img alt="img3"
                             style={{"height": "400px"}}
                             src="https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"/>
                    </a>
                </div>
            </div>
            <div className="col m3 s12 pull-m9">
                <div className="center" style={{"padding": "10px 5px"}}>Notice</div>
            </div>
        </Row>
    );
};

export default Home;