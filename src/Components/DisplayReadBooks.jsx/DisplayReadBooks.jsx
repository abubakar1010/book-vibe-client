
import { useEffect, useState } from "react";
import { GetData } from "../../Utils/LocalStorage";
import ReadBooks from "../ReadBooks/ReadBooks";


const DisplayReadBooks = () => {

    const data = GetData() || [];


    const [menu, setMenu] = useState(false)

    const [displayData, setDisplayData] = useState([])

    useEffect( () => {

        setDisplayData(data)

    },[])

    // console.log(data);

    const filterByRating = () => {

        const sortedDataByRating = data.sort( (a, b) => b.rating - a.rating);


        console.log(sortedDataByRating);

        setDisplayData(sortedDataByRating)

    }

    const filterByPages = () => {

        const sortedDataByPages = data.sort( (a, b) => b.totalPages - a.totalPages);


        console.log(sortedDataByPages);

        setDisplayData(sortedDataByPages)
    }

    const filterByPublishYear = () => {

        const sortedDataByPublishYear = data.sort( (a, b) => b.yearOfPublishing - a.yearOfPublishing);


        console.log(sortedDataByPublishYear);

        setDisplayData(sortedDataByPublishYear)
    }

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
                    <li className="hover:bg-gray-600">
                        <button onClick={ () => filterByRating() } className="block px-4 py-2   hover:text-white">Rating</button>
                    </li>
                    <li className="hover:bg-gray-600">
                        <button onClick={ () => filterByPages() } className="block px-4 py-2   hover:text-white">Number of pages</button>
                    </li>
                    <li className="hover:bg-gray-600">
                        <button onClick={ () => filterByPublishYear() } className="block px-4 py-2   hover:text-white">Publisher year</button>
                    </li>
                    
                    </ul>
                </div>

            </div>

                <div className=" my-16  space-y-12">
                    {
                        displayData.map( element => <ReadBooks key={element.bookId} element={element}></ReadBooks>)
                    }
                </div>
            </div>
        </>
    );
};

export default DisplayReadBooks;