"use client"

import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react'

function NavTest() {

  //CLIENT-SIDE NAVIGATION HOOKS
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const query = searchParams.get("test");

  
  const handleClick = () => {
    // router.refresh();
    // router.forward();
    // router.back();
    router.push("/");
    console.log(pathName);
    console.log(query);
    
  }



  return (
    <div>
      <h1>NavTest</h1>
      <Link
        href="/"
        prefetch={true}
      >
        Click Here
      </Link>
      <button
        onClick={handleClick}
      >
        Write and Redirect
      </button>

    </div>
  )
}

export default NavTest;