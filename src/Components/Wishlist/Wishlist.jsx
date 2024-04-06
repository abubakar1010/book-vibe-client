
import DisplayWishlist from "../DisplayWishlist/DisplayWishlist";
import { GetWishlistData } from "../../Utils/wishlistLocalStorage";
import { useState } from "react";
const Wishlist = () => {
   
    const data = GetWishlistData() || []

    const [menu, setMenu] = useState(false)

    // console.log(data);
    return (
        <>
            <div>

            <div className=" flex justify-center flex-col items-center mt-16 mb-12">
                
                <button onClick={ () => {
                    setMenu(!menu)
                    console.log(menu);
                } } data-dropdown-toggle="dropdown" id="dropdownDefaultButton"   className="text-white bg-[#23BE0A] focus:outline-none  font-medium rounded-lg text-sm px-12 py-3 text-center inline-flex items-center" type="button">Sort By <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                </svg>
                </button>

                <div id="dropdown" className={`z-10 ${ menu? "block": "hidden"}  divide-y divide-gray-100 rounded-lg shadow w-44 bg-[#1313130D]  `}>
                    <ul className="py-2 text-sm  text-[#131313CC]" aria-labelledby="dropdownDefaultButton">
                    <li>
                        <a href="#" className="block px-4 py-2  hover:bg-gray-600 hover:text-white">Rating</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2  hover:bg-gray-600 hover:text-white">Number of pages</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2  hover:bg-gray-600 hover:text-white">Publisher year</a>
                    </li>
                    
                    </ul>
                </div>

            </div>
                
                <div className=" my-16  space-y-12">
                    {
                        data.map( element => <DisplayWishlist key={element.bookId} element={element}></DisplayWishlist>)
                    }
                </div>
            </div>
        </>
    );
};

export default Wishlist;