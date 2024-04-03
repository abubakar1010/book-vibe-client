import { useEffect, useState } from "react"


const useData = () => {

    const [getData, setGetData ] = useState([]);

    useEffect( () => {

        fetch("books.json")
        .then( response => response.json())
        .then( response => setGetData(response))

    },[])

    return getData

}

export default useData