import React, {useEffect} from 'react';
import Materialize from "materialize-css";
import Parallax from "../Parallax";
import {Col, Container, Icon, Row, Section} from "react-materialize";

const About = () => {
    let para = {
        title: "About Us",
        content: null,
        image: "https://images.pexels.com/photos/2292837/pexels-photo-2292837.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        video: false
    }
    useEffect(()=>{
        Materialize.AutoInit()
    })
    return (
        <div>
            <Parallax data={para}/>
            <Section>
                <Container>
                    <Row>
                        <Col m={4}>
                            <img alt="card" src="https://images.pexels.com/photos/2265488/pexels-photo-2265488.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            style={{"height":"auto","width":"100%", "borderTopRightRadius":"20px"}}
                                 className="card-image hide-on-small-and-down"
                            />
                        </Col>
                        <Col m={8} s={12}>
                            <Icon style={{"fontSize":"4rem"}} className="red-text text-darken-2">format_quote</Icon>
                            <p className="flow-text">For the new aspirant, choosing an institute that has a
                            clear success path is extremely important and we are the dedicated one.
                            </p>
                        </Col>
                    </Row>
                    <Row>

                    </Row>
                </Container>
            </Section>
        </div>
    );
};

export default About;