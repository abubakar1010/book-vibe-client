import Author from "../../Components/Author/Author";
import useData from "../../Hooks/Data/useData";

const Authors = () => {

    const data = useData("/author.json")

    console.log(data);
    return (
        <>
            <div className=" my-24 ">
                {
                    data.map( element => <Author key={element.id} element={element} /> )
                }
            </div>
        </>
    );
};

export default Authors;