import PropTypes from "prop-types"
import { NavLink } from "react-router-dom";

const DisplayBooksDetails = ({element}) => {

    const { bookName, author, category, rating, tags, image,review, yearOfPublishing, publisher, totalPages} = element
    return (
        <>
            <div className=" flex gap-16 my-24 ">
                <div className=" bg-[#1313130D] p-20 rounded-lg w-[570px] flex justify-center items-center">
                    <img src={image} alt="" />
                </div>
                <div className=" w-full">
                    <p className=" text-[#131313] font-bold text-4xl mb-4 ">{bookName}</p>
                    <p className=" border-b border-[#13131326] pb-6 text-[#131313CC] text-xl font-medium "> <span className="pr-1">By:</span> {author} </p>
                    <p className=" border-b border-[#13131326] py-6 "> {category} </p>
                    <p className=" pt-7">
                        <span className=" text-[#131313] font-bold">Review:</span>  {review}
                    </p>

                    <div className=" flex gap-4 border-b py-7 border-[#13131326]">
                        <span className=" text-[#131313] font-bold">Tag: </span>
                        <div className=" flex gap-3">

                        {
                            tags.map( (element,index) => <p className=" bg-[rgba(35,190,10,0.05)] text-[#23BE0A] rounded-full px-6 py-1" key={index}>{element}</p>)
                        }
                        </div>
                    </div>

                    <div className=" flex items-center gap-16 my-9 ">
                        <div className=" space-y-4">
                            <p>Number of Pages:</p>
                            <p>Publisher:</p>
                            <p>Year of Publishing:</p>
                            <p>Rating:</p>
                        </div>
                        <div className="space-y-4">
                            <p className=" text-[#131313] font-bold" >{totalPages}</p>
                            <p className=" text-[#131313] font-bold" >{publisher}</p>
                            <p className=" text-[#131313] font-bold" >{yearOfPublishing}</p>
                            <p className=" text-[#131313] font-bold" >{rating}</p>
                        </div>
                        
                    </div>

                    <div className=" flex gap-4">
                        <NavLink>
                            <button className=" border px-6 py-2  border-[#23BE0A] text-[#23BE0A] hover:bg-[#23BE0A] hover:text-white rounded-md
                            ">Read</button>
                        </NavLink>
                        <NavLink>
                            <button className=" border px-6  text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800  font-medium rounded-lg text-sm py-2.5 text-center me-2 mb-2
                            ">Wishlist</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    );
};

DisplayBooksDetails.propTypes = {

    element: PropTypes.object

}
export default DisplayBooksDetails;