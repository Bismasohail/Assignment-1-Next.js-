import React from 'react'
import Link from 'next/link'


const ServicePage = () => {
  return (
    <div>
      <h1><b>We offer many services of IT including Web Designing & Web Development</b></h1>
      <br/>
      <h2>click below to navigate our services</h2>
      <br/>
      <i><Link href="/service/webdesigning">Detail of webdesigning</Link></i>
      <br/>
      <i><Link href="/service/webdevelopment">Back to webdevelopment page</Link></i>
      <br/>
      
      <br/>
      <b><Link href="/">Back to Home page</Link></b>
    </div>
  )
}

export default ServicePage
