import PropTypes from "prop-types"
import { IoMdStarOutline } from "react-icons/io";
import { NavLink } from "react-router-dom";

const DisplayBestSeller = ({element}) => {
    const { bookId, bookName, author, category, rating, tags, image, sales} = element
    return (
        <>
            <NavLink to={`/bookDetails/${bookId}`}>
            <div className=" border border-[rgba(19,19,19,0.15)] p-7 flex flex-col justify-center w-[374px] rounded-lg">

                
                
                <div className=" bg-[#F3F3F3] flex justify-center py-5 rounded-lg w-full mb-7 ">
                    <img src={image} alt="" className=" w-[114px] h-[166px] object-cover   " />
                </div>
                <div className=" flex gap-4 mb-4">

                    {tags.map( ( element, index) => <p className=" bg-[rgba(35,190,10,0.05)] text-[#23BE0A] rounded-full px-4 py-1" key={index}>{element}</p>)}

                </div>

                <div>
                    <p className=" text-2xl font-bold">{bookName}</p>
                </div>

                <div className=" my-4 border-b border-dashed pb-4 border-[#13131326]">
                    <p className=" text-[#131313CC]">By: {author}</p>
                </div>

                

                <div className=" flex justify-between items-center">
                    <p>{category}</p>

                    <div className=" flex items-center gap-2">
                        <p>{rating}</p>
                        <IoMdStarOutline className=" text-xl" />
                    </div>
                </div>

                <div>
                    <div>

                        <div>
                            <img src="" alt="" />
                        </div>

                    </div>
                    <div>
                        <p  className=" text-[#23BE0A] px-6 pt-9 flex justify-end">#Sales: {sales}</p>
                    </div>
                </div>
                
            </div>
            </NavLink>
        </>
    )
};

DisplayBestSeller.propTypes = {
    element: PropTypes.object
}

export default DisplayBestSeller;

