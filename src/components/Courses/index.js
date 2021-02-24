import React, {useEffect} from 'react';
import Parallax from "../Parallax";
import img from "../../assets/course.jpeg"
import Materialize from "materialize-css";
import CourseCard from "../CourseCard";

const Courses = () => {
    const data = {
        title: "Courses",
        image: img,
        content: null,
        video: false
    }
    useEffect(()=>{
        Materialize.AutoInit()
    })
    return (
        <>
            <Parallax data={data}/>
            <div className="section">
                <div className="container">
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                </div>
            </div>
        </>
    );
};

export default Courses;