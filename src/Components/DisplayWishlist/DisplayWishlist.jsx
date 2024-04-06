import { IoLocationOutline } from "react-icons/io5";
import { BsPeople } from "react-icons/bs";
import { PiBookThin } from "react-icons/pi";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const DisplayWishlist = ({element}) => {
    const { bookId, bookName, author, category, rating, tags, image, yearOfPublishing, publisher, totalPages} = element
    return (
        <div className="  shadow-lg rounded-lg py-8 px-7 flex gap-12  border border-[#13131326]">
            <div className=" w-[340px] bg-[#1313130D] rounded-lg py-7 flex justify-center items-center">
                <img src={image} alt="" className=" w-[170px] h-[240px] " />
            </div>
            <div className=" w-full">

            <p className=" text-[#131313] font-bold text-4xl mb-4 ">{bookName}</p>

            <p className=" pb-2 text-[#131313CC] text-xl font-medium "> <span className="pr-1">By:</span> {author} </p>

            <div className=" flex gap-4 py-4 ">
                        <span className=" text-[#131313] font-bold">Tag: </span>
                        <div className=" flex gap-3 items-center ">

                        {
                            tags.map( (element,index) => <p className=" bg-[rgba(35,190,10,0.05)] text-[#23BE0A] rounded-full px-6 py-1" key={index}>{element}</p>)
                        }
                        <div className=" flex gap-3 items-center ml-9">
                            <IoLocationOutline className=" text-xl" />
                            <p>Year of Publishing: {yearOfPublishing}</p>
                        </div>
                        </div>
                    </div>

                    <div className=" flex gap-7 items-center  border-b border-[#13131326]">
                        <div className=" flex gap-4 my-6">
                        <BsPeople className=" text-xl" />
                        <p className=" text-[#13131399] ">Publisher: {publisher}</p>
                        </div>
                        <div className=" flex gap-4 my-6">
                        <PiBookThin className=" text-xl" />
                        <p className=" text-[#13131399] ">Page: {totalPages}</p>
                        </div>
                    </div>

                    <div className=" flex gap-6 mt-8">
                    <p className=" bg-[#328EFF26] text-[#328EFF] rounded-full px-6 py-1">Category: {category}</p>
                    <p className=" bg-[#FFAC3326] text-[#FFAC33] rounded-full px-6 py-1">Rating: {rating}</p>
                    <NavLink to={`/bookDetails/${bookId}`}>
                    <p className=" bg-[rgba(35,190,10,0.05)] text-[#23BE0A] rounded-full px-6 py-1">View Details</p>
                    </NavLink>
                    </div>
            </div>
        </div>
    );
};

DisplayWishlist.propTypes = {

    element: PropTypes.object
}

export default DisplayWishlist;
