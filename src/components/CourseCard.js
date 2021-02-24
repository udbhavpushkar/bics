import React from 'react';

const CourseCard = () => {
    return (
        <>
            <div className="card hoverable" style={{"borderRight": "10px"}}>
                <div className="card-content">
                    <h5 className="blue-text text-darken-4" style={{"fontWeight": "600"}}>Course Name</h5>
                    <h6><strong>Duration : </strong> 3 months</h6>
                    <p className="grey-text text-darken-2">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi asperiores
                        consequatur consequuntur corporis cumque distinctio dolores, illum ipsa magnam obcaecati
                        porro quasi quia, quo ratione rem totam ullam velit vero.
                    </p>
                </div>
            </div>
        </>
    );
};

export default CourseCard;