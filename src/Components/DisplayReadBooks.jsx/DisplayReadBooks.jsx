import { Button } from "@material-tailwind/react";
import { GetData } from "../../Utils/LocalStorage";
import ReadBooks from "../ReadBooks/ReadBooks";


const DisplayReadBooks = () => {

    const data = GetData() || []

    console.log(data);
    return (
        <>
            <div>

                <div className=" my-16  space-y-12">
                    {
                        data.map( element => <ReadBooks key={element.bookId} element={element}></ReadBooks>)
                    }
                </div>
            </div>
        </>
    );
};

export default DisplayReadBooks;