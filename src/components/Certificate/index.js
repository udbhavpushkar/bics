import React, {useEffect} from 'react';
import Parallax from "../Parallax";
import Materialize from "materialize-css";
import {Col, Container, Row, Section, TextInput, Button} from "react-materialize";

const Certificate = () => {
    let para = {
        title: "Certificate",
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
                    <form>
                        <Row>
                            <TextInput
                                s={12}
                                m={10}
                                label="Certificate No."
                            />
                            <Button
                                style={{"marginTop":"20px"}}
                                s={12}
                                m={2}
                                node="button"
                                type="submit"
                                waves="light"
                            >Search</Button>
                        </Row>
                    </form>
                </Container>
            </Section>
        </div>
    );
};

export default Certificate;