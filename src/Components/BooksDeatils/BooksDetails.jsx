
import { useLoaderData, useParams } from "react-router-dom";
import DisplayBooksDetails from "../DisplayBooksDetails/DisplayBooksDetails";


const BooksDetails = () => {

    const data = useLoaderData()

    const parmId = useParams()
    // console.log(data, parmId);

    const displayData = data.filter( element => element.bookId === parseInt(parmId.id))

    // console.log(displayData);
    return (
        <>
            <div>

                {
                    displayData.map( element => <DisplayBooksDetails key={element.bookId} element={element} />)
                }
            </div>
        </>
    );
};

export default BooksDetails;