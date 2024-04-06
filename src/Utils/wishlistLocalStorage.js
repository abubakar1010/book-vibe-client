
import { GetData } from "./LocalStorage";


const saveWishlistData = (item) => {

    const readBooksData = GetData() || []

    const savedWishlistDataFromLocalStorage = JSON.parse(localStorage.getItem("wishlist")) || [];

    const existInWishList = savedWishlistDataFromLocalStorage.find( element => element.bookId === item.bookId );

    // const existInReadBooks = savedWishlistDataFromLocalStorage.find( element => readBooksData.find( item => element.bookId === item.bookId) );

    const existInReadBooks = readBooksData.find( element => element.bookId === item.bookId )

    if (!existInWishList && !existInReadBooks ) {
        savedWishlistDataFromLocalStorage.push(item)

        localStorage.setItem("wishlist",JSON.stringify(savedWishlistDataFromLocalStorage))
    }

    

    return [existInWishList,existInReadBooks]

}

const GetWishlistData = () => {
     const wishlistData = JSON.parse(localStorage.getItem("wishlist"));

     return wishlistData
}

export {saveWishlistData, GetWishlistData}