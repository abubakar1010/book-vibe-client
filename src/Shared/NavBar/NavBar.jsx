import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal text-lg"
      >
        <NavLink to=""  className={({isActive}) =>
                                        `
                                        ${isActive? "text-[#23BE0A] border border-[#23BE0A] px-3 rounded-md py-2": "text-[#131313CC] hover:text-[#23BE0A]"} `
                                    }>
          Home
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink to="/listedBooks" className={({isActive}) =>
                                        `
                                        ${isActive? "text-[#23BE0A] border border-[#23BE0A] px-3 rounded-md py-2": "text-[#131313CC] hover:text-[#23BE0A]"} `
                                    } >
          Listed Books
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink to="/readBooks" className={({isActive}) =>
                                        `
                                        ${isActive? "text-[#23BE0A] border border-[#23BE0A] px-3 rounded-md py-2": "text-[#131313CC] hover:text-[#23BE0A]"} `
                                    }>
          Pages To Read
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink to="/bestSellers" className={({isActive}) =>
                                        `
                                        ${isActive? "text-[#23BE0A] border border-[#23BE0A] px-3 rounded-md py-2": "text-[#131313CC] hover:text-[#23BE0A]"} `
                                    }>
          Best Sellers
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink to="/author" className={({isActive}) =>
                                        `
                                        ${isActive? "text-[#23BE0A] border border-[#23BE0A] px-3 rounded-md py-2": "text-[#131313CC] hover:text-[#23BE0A]"} `
                                    }>
          Authors
        </NavLink>
      </Typography>
    </ul>
  );

    return (
        <>
         <div className="m-6 ">
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-5 shadow-none">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 text-3xl font-bold cursor-pointer py-1.5"
          >
            Inkverse
          </Typography>
          <div className="mr-4 hidden xl:block">{navList}</div>
          <div className="flex items-center gap-4">
            
            <div className="flex items-center gap-x-6">
              <div
                className="hidden xl:inline-block"
              >
                <button type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Sign In</button>

              </div>
              <div
                className="hidden xl:inline-block"
              >
                <button type="button" className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Sign Up</button>
              </div>
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent xl:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav} className=" py-12">
          {navList}
          <div className="flex items-center gap-x-1 my-8 ">
          <button type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Sign In</button>
            <button type="button" className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Sign Up</button>
          </div>
        </MobileNav>
      </Navbar>
      
    </div>
        </>
    );
};

export default NavBar;