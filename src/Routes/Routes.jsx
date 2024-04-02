import { Button } from "@material-tailwind/react";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Button>Hello World</Button>,
    },
  ]);

  export default router