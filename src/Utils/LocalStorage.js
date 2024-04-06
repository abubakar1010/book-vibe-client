

const saveData = (item) => {

    const savedDataFromLocalStorage = JSON.parse(localStorage.getItem("readBooks")) || [];

    const exist = savedDataFromLocalStorage.find( element => element.bookId === item.bookId )

    if (!exist) {
        savedDataFromLocalStorage.push(item)

        localStorage.setItem("readBooks",JSON.stringify(savedDataFromLocalStorage))
    }

    return exist

}

const GetData = () => {
     const data = JSON.parse(localStorage.getItem("readBooks"));

     return data
}

export {saveData, GetData}