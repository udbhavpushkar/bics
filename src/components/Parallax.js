import React, {useEffect} from 'react';
import Materialize from "materialize-css";

const Parallax = ({data, image}) => {

    return (
        <div id="index-banner" className="parallax-container">
            <div className="section no-pad-bot">
                <div className="container">
                    <br/><br/>
                    <h1 className="header center red-text text-darken-2 white-text-shadow">{data.title}</h1>
                    <div className="row center">
                        <h4 className="header col s12 light white-text red-text-shadow">{data.content}</h4>
                    </div>
                    {data.button?
                        <div className="row center">
                        <a href="#" id="download-button"
                        className="btn-large waves-effect waves-light red darken-2">Get Started</a>
                        </div>:""}
                    <br/><br/>
                </div>
            </div>
            <div className="parallax">
                {data.video ?
                    <video autoPlay muted loop style={{"width": "100%"}}>
                        <source src={data.video} type="video/mp4"/>
                    </video> :
                    <img src={data.image} alt="background"/>
                }
            </div>
        </div>
    );
};

export default Parallax;