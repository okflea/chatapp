"use client"
import React from 'react'
import { Toaster } from 'sonner'

const Providers = ({children}:{children:React.ReactNode}) => {
  return (
    <>
      {children}
      <Toaster  />
    </>
  )
}

export default Providers
