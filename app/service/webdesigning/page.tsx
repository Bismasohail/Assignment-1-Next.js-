import React from 'react'
import Link from 'next/link'

const webdesigning = () => {
  return (
    <div>
      <h1>We offer <i>NEXT QUALITY</i> Web Designing</h1>
      <br/>
      <b><Link href="/service">Back to Service page</Link></b>
      <br/>
      <b><Link href="/">Back to Home page</Link></b>
    </div>
  )
  
}

export default webdesigning
