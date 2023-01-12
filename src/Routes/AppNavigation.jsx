import React from "react";
import { useRoutes } from "react-router-dom";
// import Drops from "../Drops";
import Cart from "../MarketPlace/Cart";
import PharmacyIndex from "../MarketPlace/PharmacyIndex";
import Register from "../Register";
import Showroom from "../Showroom/Showroom";
import AppIndex from "./AppIndex";
function AppNavigation() {
  let element = useRoutes([
    // {
    //   path: '/',
    //   element: <PharmacyIndex />,
    //   children: [{ index: true }],
    // },
    {
      path: "/",
      element: <AppIndex />,
      children: [
        { index: true, element: <PharmacyIndex /> },
        {
          path: "/cart",
          element: <Cart />,
        },
        // {
        //   path: "/drops",
        //   element: <Drops/>,
        // },
        { path: "/register", element: <Register /> },

        {
          path: "/showroom",
          element: <Showroom />,
        },
      ],
    },
  ]);
  return element;
}
export default AppNavigation;
