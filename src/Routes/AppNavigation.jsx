import React from 'react'

import { useRoutes } from 'react-router-dom'
import Cart from '../MarketPlace/Cart'
import PharmacyIndex from '../MarketPlace/PharmacyIndex'
import Showroom from '../Showroom/Showroom'
import AppIndex from './AppIndex'
function AppNavigation() {
  let element = useRoutes([
    {
      path: '/',
      element: <PharmacyIndex />,
      children: [{ index: true }],
    },
    {
      element: <AppIndex />,
      children: [
        { index: true, element: <PharmacyIndex /> },
        {
          path: '/cart',
          element: <Cart />,
        },
        {
          path: '/showroom',
          element: <Showroom />,
        },
      ],
    },
  ])
  return element
}
export default AppNavigation
