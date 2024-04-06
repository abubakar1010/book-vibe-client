
import DisplayWishlist from "../DisplayWishlist/DisplayWishlist";
import { GetWishlistData } from "../../Utils/wishlistLocalStorage";
const Wishlist = () => {
   
    const data = GetWishlistData() || []

    console.log(data);
    return (
        <>
            <div>
                
                <div className=" my-16  space-y-12">
                    {
                        data.map( element => <DisplayWishlist key={element.bookId} element={element}></DisplayWishlist>)
                    }
                </div>
            </div>
        </>
    );
};

export default Wishlist;