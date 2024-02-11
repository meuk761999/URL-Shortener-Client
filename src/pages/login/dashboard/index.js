import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import React from 'react';
import { URLBar } from '@/components/URLBar';
import { useState,useEffect } from 'react';
import { JWT_TOKEN } from '../../../../config/index';
import { useRouter } from 'next/router';




export default function Dashboard() {
    const router = useRouter();

      useEffect(()=>{

        if(!Boolean(localStorage.getItem(JWT_TOKEN)))
        router.push("login/");
      },[]) 
  return (
    <>
    <main
      className={`flex flex-col w-full items-center justify-centre p-24 ${inter.className}`}
    >
    <URLBar/>

    </main>
  </>
    
  )
}
