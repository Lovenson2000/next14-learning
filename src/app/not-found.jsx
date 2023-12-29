import Link from 'next/link';
import React from 'react'

function NotFound() {
  return (
    <div>
        <h2>Not found</h2>
        <p>The page you are looking for does not exist</p>
        <Link href="/">Return Home</Link>
    </div>
  )
}

export default NotFound;