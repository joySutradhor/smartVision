import { createBrowserRouter } from "react-router-dom";
import Main from "./../Layout/Main";
import Home from "./../component/Home/Home";
import AboutMain from "../component/AboutUsPage/AboutMain";
import Media from "./../component/Media/Media";
import Service from "../component/Service/Service";
import Contact from "../component/Contact/Contact";
import TracRecord from "../component/TracRecord/TracRecord";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <AboutMain></AboutMain>,
      },
      {
        path: "/services",
        element: <Service />,
      },
      {
        path: "/track-record",
        element: <TracRecord />,
      },
      {
        path: "/media",
        element: <Media></Media>,
      },
      {
        path: "/contact-us",
        element: <Contact />,
      },
    ],
  },
]);
