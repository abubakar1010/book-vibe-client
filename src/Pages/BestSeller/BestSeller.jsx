import { useLoaderData } from "react-router-dom";
import DisplayBestSeller from "../../Components/DisplayBestSeller/DisplayBestSeller";

const BestSeller = () => {

    const data = useLoaderData();

    const topSales = [];

    data.forEach(element => {
        topSales.push(element.sales)
    });

    // console.log(topSales);

    // console.log(topSales.sort( (a, b) => b - a ));

    const getTopTwo = topSales.sort( (a, b) => b - a ).slice(0,2)
    // console.log(getTopTwo);
    // console.log(data);

    const filterTopSales = data.filter( element => element.sales === getTopTwo[0] || element.sales === getTopTwo[1] )

    // console.log(filterTopSales);
    return (
        <>
            <div className=" text-center">
                <h1 className=" text-4xl font-bold mb-9 ">Books</h1>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">

                {
                    filterTopSales.map( element => <DisplayBestSeller key={element.bookId} element={element} /> )
                }

            </div>
        </>
    );
};

export default BestSeller;