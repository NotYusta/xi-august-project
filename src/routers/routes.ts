import NotFound from "@/pages/404";
import Home from "@/pages/home";
import { createBrowserRouter } from "react-router-dom";

const BaseURL = "/xi-august-project"
const router = createBrowserRouter([
  {
    path: "*",
    element: NotFound(),
  },
  {
    path: `${BaseURL}`,
    element: Home(),
  },
]);

export default router;
