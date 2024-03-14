import { FaDollarSign } from "react-icons/fa6";
import { IoMdBook } from "react-icons/io";
const Course = () => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Title
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="flex justify-between items-center">
                        <div className="flex gap-2">
                            <p className="flex items-center"><FaDollarSign /></p>
                            <p>Price: <span>100</span></p>
                        </div>
                        <div className="flex gap-2">
                            <p className="flex items-center"><IoMdBook /></p>
                            <p>Credit: <span>2</span>hr</p>
                        </div>
                    </div>
                    <button className="btn bg-blue-500 w-full p-4">Select</button>
                </div>
            </div>
        </div>
    );
};

export default Course;