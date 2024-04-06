import { NavLink } from "react-router-dom";


const Banner = () => {
    return (
        <>
            <div className=" bg-[rgba(19,19,19,0.05)] flex justify-between px-32 rounded-lg mt-16 mb-28 flex-col lg:flex-row">
                
                <div className=" py-14 lg:py-36 ">

                    <h1 className=" text-6xl font-bold  mb-9">Books to freshen up your bookshelf</h1>
                    <NavLink  to="/listedBooks">
                        <button className="bg-[#23BE0A] py-4 px-7 rounded-lg text-white">View The List</button>
                    </NavLink>

                </div>

                <div className=" py-8 lg:py-20">

                    <div>
                        <img src="images\cover.png" alt="" className=" " />
                    </div>

                </div>
            </div>
        </>
    );
};

export default Banner;