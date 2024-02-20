import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import React from 'react';
import { ThreeDotLoader} from '@/components/Loader';
import { URLCard} from '@/components/URLCard';
import {useEffect } from 'react';
import {getAllURLsService} from '@/redux/features/getURLSlice';
import {useDispatch,useSelector } from 'react-redux';
import { JWT_TOKEN } from '@@@/config/index';
import { useRouter } from 'next/router';
import { DOMAIN_NAME } from '@@@/config/index';

export default function ManageUrls() {
    const router = useRouter();
    const dispatch =useDispatch();
    const loading=useSelector((state)=>state?.urlReducer?.loading);
    const URLs=useSelector((state)=>state?.urlReducer?.allAvailableURLs);
    console.log("L-16 URL",URLs);
   
      useEffect(()=>{

        if(!Boolean(localStorage.getItem(JWT_TOKEN)))
        router.push("/login");
        else{
            dispatch(getAllURLsService());
        }
      },[]) 
  return (
    <>
    <main
      className={`grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-6 w-full items-center justify-centre p-4 xl:p-24 ${inter.className}`}
    >
    {Boolean(loading)?<ThreeDotLoader/>:
    URLs.map((URL,ind)=>{
            return  <URLCard key={ind} _id={URL?._id} originalUrl={URL?.originalUrl} shortUrl={DOMAIN_NAME+URL?.shortUrl}/>
    })
    }
    
    </main>
  </>
    
  )
}