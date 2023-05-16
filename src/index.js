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

import Cookery from './Categories/Cookery';
import Family from './Categories/Family';
import Economic from './Categories/Economic';
import CartPage from './Cart/CartPage';


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
    path: "cookery",
    element: <Cookery/>,
  },
  {
    path: "family",
    element: <Family/>,
  },
  {
    path: "economic",
    element: <Economic/>,
  },
  {
    path: "cart",
    element: <CartPage/>,
  },
 

 

]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

