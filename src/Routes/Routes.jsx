
import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import ListedBooks from "../Pages/ListedBooks/ListedBooks";
import PageToRead from "../Pages/PageToRead/PageToRead";
import BooksDetails from "../Components/BooksDeatils/BooksDetails";
import DisplayReadBooks from "../Components/DisplayReadBooks.jsx/DisplayReadBooks";
import Wishlist from "../Components/Wishlist/Wishlist";
import BestSeller from "../Pages/BestSeller/BestSeller";
import Authors from "../Pages/Authors/Authors";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "",
          element: <Home></Home>
        },
        {
          path: "/listedBooks",
          element: <ListedBooks />,
          children: [
            {
              path:"",
              element: <DisplayReadBooks />
            },
            {
              path: "readBooks",
              element: <DisplayReadBooks />
            },
            {
              path: "wishlist",
              element: <Wishlist />
            }
          ]
        },
        {
          path: "/readBooks",
          element: <PageToRead></PageToRead>,
          loader: () => fetch("/books.json")
        },
        {
          path: "/bestSellers",
          element: <BestSeller />,
          loader: () => fetch("/books.json")
        },
        {
          path: "author",
          element: <Authors />,

        },
        
        {
          path: "/bookDetails/:id",
          element: <BooksDetails />,
          loader: () => fetch("/books.json")
        }
      ]
    },
  ]);

  export default router