"use client"

import React from 'react'
import { SessionProvider } from 'next-auth/react'
import { ReactNode } from 'react';

interface PropTypes{
    children: ReactNode
  
}

const Authprovider = ({children}:PropTypes) => {
  return (
   <SessionProvider>
   {children}
   </SessionProvider>
  )
}

export default Authprovider
