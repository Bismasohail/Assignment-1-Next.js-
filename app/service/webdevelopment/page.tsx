import React from 'react'
import Link from 'next/link'


const webDevelopment = () => {
  return (
    <div>
      <h1>
        <b>
            Following are the services we offer in Web development:
        </b>
        
      </h1>
      <br/>
      <ul>
        <li>(1)ERP:
            <ol>
                <li>(i)Time in / Time out</li>
                <li>(ii)Employee / manager detail</li>
                <li>(iii)Term member</li>
            </ol>
        </li>
        <li>(2)Website development</li>
        <li>(3)E-Commerce</li>
        <li>(4)Mobile App Development</li>
      </ul>
      <br/>
      <br/>
      <b><Link href="/service">Service page</Link></b>
      <br/>
      <b><Link href="/">Back to Home page</Link></b>

    </div>
  )
}

export default webDevelopment
