import React from 'react'
import { Outlet } from 'react-router-dom'
import { Col, Row } from 'reactstrap'
import PharmacyNavMenu from '../MarketPlace/PharmacyNavMenu'
export default function AppIndex() {
  return (
    <div className='m-0 p-0'>
      {/* <p>fasfs</p> */}
      <Row className="m-0 p-0">
        {/* <Col className='md-12'> */}
          <PharmacyNavMenu />
        {/* </Col> */}
      </Row>
      {/* <Row className="m-0 p-0">
        <Col md={12}> */}
      <Outlet />
      {/* </Col>
      </Row> */}
    </div>
  )
}
