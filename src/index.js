import App from './App';
import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,  
  Link,
} from "react-router-dom";
import AboutPage from './About/AboutPage';
import F_A_Q_Page from './F.A.Q/F_A_Q_Page';
import NewsPage from './News/NewsPage';
import ContactPage from './Contact/ContactPage'
import Science from './Categories/Science';
import Cookery from './Categories/Cookery';


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App/>
    ),
  },
  {
    path: "about",
    element: <AboutPage/>,
  },
  {
    path: "f_a_q",
    element: <F_A_Q_Page/>,
  },
  {
    path: "news",
    element: <NewsPage/>,
  },

  {
    path: "contact",
    element: <ContactPage/>,
  },
  
  {
    path: "science",
    element: <Science/>,
  },
  {
    path: "cookery",
    element: <Cookery/>,
  },

 

]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

