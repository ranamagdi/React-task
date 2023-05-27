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
import Family_Details from './Categories/Family_Details';
import FamilyProducts from './FamilyProducts';
import Economic_Details from './Categories/Economic_Details';
import EconomicProducts from './EconomicProducts';
import CookeryProducts from './CookeryProduct';
import Cookery_Details from './Categories/Cookery_Details';
import  Service_Details from './Home/Service_details';
import BestProducts from './BestProducts';
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
    element: <Family />,
  },
  {
    path: "economic",
    element: <Economic/>,
  },
  {
    path: "cart",
    element: <CartPage/>,
  },
{
  path:"familydetails/:producttitle",
  element:<Family_Details  product={FamilyProducts} />
}
,
{
  path:"economicdetails/:producttitle",
  element:<Economic_Details  product={EconomicProducts} />
}
,
{
  path:"cookerydetails/:producttitle",
  element:<Cookery_Details  product={CookeryProducts} />
}
,
{
  path:"bestdetails/:producttitle",
  element:<Service_Details  product={BestProducts} />
}

 

]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

