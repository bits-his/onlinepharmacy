import React from 'react'
import { Outlet } from 'react-router-dom'
import PharmacyNavMenu from '../MarketPlace/PharmacyNavMenu'
export default function AppIndex() {
  return (
    <div>
      <PharmacyNavMenu />
      <Outlet />
    </div>
  )
}
