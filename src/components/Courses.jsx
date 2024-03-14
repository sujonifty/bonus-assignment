import Course from "./Course";
import Cart from "./Cart";
import { useEffect, useState } from "react";
const Courses = () => {
    const [courses, setCourses] = useState([])
    useEffect(()=>{
        fetch('courses.json')
        .then(res=>res.json())
        .then(data=>setCourses(data))
    },[])
    return (

        <div>
            <div className='grid grid-cols-12'>
                <div className='col-span-10'>
                    <div className=' grid grid-cols-3 gap-5 p-5'>
                       {
                        courses.map(item=><Course key={item.id} item={item}></Course>)
                       }
                        <Course></Course>
                        <Course></Course>
                        <Course></Course>
                        <Course></Course>
                        <Course></Course>
                    </div>
                </div>
                <div className='col-span-2 '>
                    <Cart></Cart>
                </div>
            </div>
        </div>

    );
};

export default Courses;