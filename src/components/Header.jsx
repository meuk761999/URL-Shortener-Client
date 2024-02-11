import React from 'react';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowDropDown } from '../../public/icons/Icons';
import {DOMAIN_NAME,JWT_TOKEN} from '../../config/index';
import { useRouter } from 'next/router';



const Header = () => {
  const router = useRouter();
  const [logStatus,setLogStatus]=useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setLogStatus(false);
    router.push('/login');
  };
  useEffect(()=>{
    if(Boolean(localStorage.getItem(JWT_TOKEN)))
       setLogStatus(true);
  })
  return (
    <>
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
            <Link href="https://flowbite.com" className="flex items-center space-x-3 rtl:space-x-reverse">
              <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Urlsho</span>
            </Link>
            <div className="flex items-center space-x-6 rtl:space-x-reverse">
             {logStatus?
              <button onClick={handleLogout} className="text-sm  text-blue-600 dark:text-blue-500 hover:underline">Logout</button>:
              <Link href="/login" className="text-sm  text-blue-600 dark:text-blue-500 hover:underline">Login</Link>
              }
            </div>
          </div>
        </nav>
        <nav className="bg-gray-50 dark:bg-gray-700">
          <div className="max-w-screen-xl px-4 py-3 mx-auto">
            <div className="flex items-center">
              <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                <li>
                  <Link href="#" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-900 dark:text-white hover:underline">Company</Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-900 dark:text-white hover:underline">Team</Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-900 dark:text-white hover:underline">Features</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

    </>
  )
}

export default Header