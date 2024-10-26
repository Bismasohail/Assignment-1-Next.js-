import React from "react"

import Link from "next/link"

export default function HomePage (){
  return(
    <div>
      <h1><b>This is our Home Page</b></h1>
      <Link href="/about">About Page</Link>
      <br/>
      <Link href="/contact">Contact Page</Link>
      <br/>
      <Link href="/service">Service Page</Link>
    </div>
  )
}