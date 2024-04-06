import { useEffect, useState } from "react"


const useData = (data="/books.json") => {

    const [getData, setGetData ] = useState([]);

    useEffect( () => {


        fetch(`${data}`)
        .then( response => response.json())
        .then( response => setGetData(response))

    },[])

    // console.log(getData,path);

    return getData

}

export default useData