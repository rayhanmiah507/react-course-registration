import { useEffect } from "react";
import { useState } from "react";
import Coursedata from "../Coursedata/Coursedata";
import './Course.css'


const Course = ({ handerselectBtn }) => {
    const [course, setCourse] = useState([]);

    useEffect(() => {
        fetch('coursedata.json')
            .then(res => res.json())
            .then(data => setCourse(data))

    }, [])


    return (
        <div className="course-container md:w-2/3 my-8">

            {
                course.map(courses => <Coursedata key={courses.id}
                    handerselectBtn={handerselectBtn}

                    courses={courses}> </Coursedata>)
            }

        </div>
    );
};

export default Course;