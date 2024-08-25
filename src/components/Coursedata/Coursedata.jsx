import './Coursedata.css'
import { PiBookmarkSimpleLight } from "react-icons/pi";
import PropTypes from 'prop-types'

const Coursedata = ({ courses, handerselectBtn }) => {
    // const {image,title,description,price,credit} = couses;

    // const handleBothActions = (course) => {
    //     handlerDataPass(course); // Passes the whole course data
    //     handlerAddCredit(course.credit); // Passes just the credit part
    // };


    return (
        <div className='bg-slate-100 rounded-xl p-4 m-4 '>
            <div className='space-y-3'>
                <img className="course-image" src={courses.image} alt="" />
                <h3 className='text-lg'>{courses.title}</h3>
                <p className='text-sm'>{courses.description}</p>
            </div>
            <div className='md:flex justify-between text-base mt-3'>
                <h3>$ Price: {courses.price}</h3>
                <div className='flex mr-4'>
                    <button className='mr-2'><PiBookmarkSimpleLight></PiBookmarkSimpleLight></button>
                    <h3>Credit: {courses.credit}</h3>
                </div>
            </div>
            <div className='bg-[#2F80ED] p-3 m-2 rounded-2xl mt-3 text-center text-white font-bold text-lg'>
                <button onClick={() => handerselectBtn(courses)} className=''>Select</button>
            </div>

        </div>
    );
};

Coursedata.propTypes = {
    courses: PropTypes.array.isRequired
}

export default Coursedata;