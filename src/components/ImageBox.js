import React, {useEffect} from 'react';
import {Col} from "react-materialize";
import Materialize from "materialize-css";

const ImageBox = ({src}) => {
    let url = src.split("/")
    url.splice(-2,2)
    url = url.join("/")+"/250/160"

    useEffect(()=>{
        Materialize.AutoInit()
    })



    return (
        <>
            <Col s={6} m={4} style={{"marginBottom":"20px"}}>
                <img src={url}
                     className="materialboxed"
                     alt="hjh"
                     style={{"width":"100%"}}
                />
            </Col>
        </>
    );
};

export default ImageBox;