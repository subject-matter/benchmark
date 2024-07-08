"use client"

import { usePathname } from 'next/navigation'
import React from 'react'



function Footerborder() {
    const pathname = usePathname()
  return (
    <>
              {pathname !== "/about-us" && pathname !== '/' && (
        <hr className="border-grey border-b border-dashed mx-[10px] md:mx-5" />
)}</>
  )
}

export default Footerborder