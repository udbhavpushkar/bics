import React, {useEffect} from 'react';
import Parallax from "../Parallax";
import Materialize from "materialize-css";
import img1 from "../../assets/pr1.jpg"
import img2 from "../../assets/pr2.jpg"
import img3 from "../../assets/pr3.jpg"
import vdo from "../../assets/videobg.mp4"

const Home = () => {

    useEffect(()=>{
        Materialize.AutoInit()
    })
    let para = [{
            title: "BISC",
            content: "Welcome to BICS, All in One computer institute.",
            image: img1,
            video: null,
            button: true
        },
        {
            title: null,
            content: null,
            image: img2,
            video: false
        },
        {
            title: null,
            content: "A modern Institute for modern students.",
            image: img3,
            video: null
        }
    ]
    return (
        <>
            <Parallax data={para[0]} />
            <div className="amber lighten-3">
                <div className="section container">
                    <div className="row">
                        <div className="center">
                            <h4 className="red-text text-darken-3" style={{"fontWeight": "bolder"}}>
                                Admission Open 10% Off on all courses.
                            </h4>
                        </div>
                        <div className="col s12 center">
                            <h3><i className="mdi-content-send brown-text"/></h3>
                            <p className=" left-align light">
                                <strong style={{"fontSize": "larger !important"}}>
                                    Welcome to <span className="red-text text-darken-2">Bharat Institute Of Computer Science</span>.
                                    How can we help you..!
                                    It is a long established fact that a student will be distract by number
                                    of Computer Training Institute, when looking for the best online and offline
                                    institute
                                    in Ayodhya and Faizabad.
                                </strong>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Parallax data={para[2]} />
            <div className="container">
                <div className="section">
                    <div className="row">
                        <div className="col s12 m4">
                            <div className="icon-block">
                                <h2 className="center brown-text"><i className="material-icons">school</i></h2>
                                <h5 className="center">Quality Instructor</h5>
                            </div>
                        </div>
                        <div className="col s12 m4">
                            <div className="icon-block">
                                <h2 className="center brown-text"><i className="material-icons">local_library</i></h2>
                                <h5 className="center">Well Structured syllabus</h5>
                            </div>
                        </div>
                        <div className="col s12 m4">
                            <div className="icon-block">
                                <h2 className="center brown-text"><i className="material-icons">domain</i></h2>
                                <h5 className="center">Good Infrastructure</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Parallax data={para[1]}/>
        </>
    );
};

export default Home;