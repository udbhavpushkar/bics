import React, {useEffect} from 'react';
import Materialize from "materialize-css";
import Parallax from "../Parallax";
import {Card, Col, Container, Icon, Row, Section} from "react-materialize";

const About = () => {
    let para = {
        title: "About Us",
        content: null,
        image: "https://images.pexels.com/photos/2292837/pexels-photo-2292837.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        video: false
    }
    const about = [
        {
            title: "Our Mission",
            content: `Starting from 1994 to 2020 we nurture ourselves with 108 branches across the nation. Our mission is
            to offer quality education which will ultimately lead the young minds to a successful career. We do not limit
            ourselves only to classroom teaching but we think beyond it. We also make our presence on all the social platforms.`
        },
        {
            title: "Our Vision",
            content: `We believe that the maximum we explore from a student's mind, the maximum positive outcome we
             receive. Hence to ensure your success, we constantly focus on excavating the best out of you because your
              success is our success.`
        },
        {
            title: "Our Values",
            content: `With the vision to digitalize every corner of our organization, we provide all the digital 
            facilities to our students. This will not only ensure the overall development of students but also make 
            sure the effective implementation of the knowledge gained by them during the theoretical sessions.`
        }
    ]
    useEffect(()=>{
        Materialize.AutoInit()
    })
    return (
        <div>
            <Parallax data={para}/>
            <Section>
                <Container style={{"width":"90%"}}>
                    <Row>
                        <Col m={8} s={12}>
                            <Icon style={{"fontSize":"4rem"}} className="red-text text-darken-2">format_quote</Icon>
                            <p className="flow-text">For the new aspirant, choosing an institute that has a
                            clear success path is extremely important and we are the dedicated one.
                            </p>
                        </Col>
                        <Col m={4}>
                            <img alt="card" src="https://images.pexels.com/photos/2265488/pexels-photo-2265488.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                 style={{"height":"auto","width":"100%", "borderTopRightRadius":"20px"}}
                                 className="card-image hide-on-small-and-down"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col s={12} m={5}>
                            <Card className="grey darken-3 white-text">
                                <h5><strong>Medium Institute : The most innovative institute ever in the market</strong></h5>
                                <p>Our tagline <span className="red-text text-lighten-1">"Your Success is our Success"</span>
                                    defines our mission clearly.
                                </p>
                                <p>
                                    We at <strong>Medium</strong> specifically provide Full Stack Web Development, Data Structure
                                    & other competitive programming classes and believe in preparing candidates by
                                    amalgamating the traditional techniques of teaching with the digital world. Our concern
                                    is to impart knowledge to all the candidates by implementing digital strategies to
                                    facilitate quality education and to transform the candidates' potential into a
                                    positive outcome.
                                </p>
                            </Card>
                        </Col>
                        <Col s={12} m={7}>
                            {about.map(da=>(
                                <div>
                                    <h5><strong>{da.title}</strong></h5>
                                    <p>{da.content}</p>
                                </div>
                            ))}
                        </Col>
                    </Row>
                </Container>
            </Section>
        </div>
    );
};

export default About;