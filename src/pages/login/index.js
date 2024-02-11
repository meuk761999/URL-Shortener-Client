import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import React from 'react'
import {UserLogin } from '@/components/UserLogin';
import { useEffect } from 'react';
import { JWT_TOKEN } from '../../../config';
import { useRouter } from 'next/router';


export default function Login() {
  const router = useRouter();
  useEffect(()=>{

    if(Boolean(localStorage.getItem(JWT_TOKEN)))
    router.push("login/dashboard");
  },[])
  return (
    <>
    <main
      className={`flex flex-col w-full items-center justify-centre p-24 ${inter.className}`}
    >
    <UserLogin/>    

    </main>
  </>
    
  )
}

