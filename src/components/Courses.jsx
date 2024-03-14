import Course from "./Course";
import Cart from "./Cart";
const Courses = () => {
    return (

        <div>
            <div className='grid grid-cols-12'>
                <div className='col-span-10'>
                    <div className=' grid grid-cols-3 gap-5 p-5'>
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