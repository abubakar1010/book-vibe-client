import { NavLink, Outlet } from "react-router-dom";

const ListedBooks = () => {
    return (
        <div className="my-24">
            <h1 className=" text-center rounded-lg bg-[#1313130D] py-9 ">Books</h1>

            <div className=" border-b border-[#13131380] my-16 flex gap-12">
                
                <NavLink to="readBooks" className={({isActive}) =>
                                        `
                                        ${isActive? " border-x border-t border-[#131313CC] rounded-md px-4 py-2": "text-lg text-[#13131380]"} `
                                    }>
                <p className="">Read Books</p>
                </NavLink>
                        
                <NavLink to="wishlist" className={({isActive}) =>
                                        `
                                        ${isActive? " border-x border-t border-[#131313CC] rounded-md px-6 py-2": "text-lg text-[#13131380]"} `
                                    } >
                <p className=" ">Wishlist</p>
                </NavLink>  
            </div>

            <div className=" my-24">
                <Outlet />
            </div>
        </div>
    );
};

export default ListedBooks;