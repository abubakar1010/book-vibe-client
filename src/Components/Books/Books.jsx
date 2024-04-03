import useData from "../../Hooks/Data/useData";
import Book from "../Book/Book";


const Books = () => {

    const data = useData()

    return (
        <>
            <div className=" text-center">
                <h1 className=" text-4xl font-bold mb-9 ">Books</h1>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">

                {
                    data.map( element => <Book key={element.bookId} element={element} />)
                }

            </div>
        </>
    );
};

export default Books;