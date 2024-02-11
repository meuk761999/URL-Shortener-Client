import React from 'react';
import Image from "next/image";
import {WWWIcon} from  '../../public/icons/Icons'
import {setShortURL} from '@/redux/features/getURLSlice'
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Validator } from 'react';
export const URLBar = () => {
  const [originalURL,setOriginalURL]=useState("https://");
  const [errors,setErrors]=useState({});
  const dispatch = useDispatch();
  const handleURLInput =(e)=>{
    try {
      setOriginalURL(e.target.value);
      const url =  new URL(originalURL);
      setErrors((_)=>({..._,originalURLError:""}));
    } catch (err) {
      setErrors((_)=>({..._,originalURLError:"Not a valid URL"}));
    }

  }
  const handleShortIt=()=>{
    dispatch(setShortURL(e.target.value));
  }
  return (
    
<div className='w-full'>  
<p className='text-sm text-blue-900'>Must start with protocol name like "https://" or "http://"</p> 
<br />
<p className='text-sm text-blue-900'>Must have domain name like "youtube" or "facebook"</p> 
<br />
<p className='text-sm text-blue-900'>Must have top level domain name like  like ".com" or ".in"</p> 
<br />
  <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Enter Original URL</label>
  <div className="relative">
    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
      <WWWIcon/>
    </div>
    <input type="url" onChange={handleURLInput} value={originalURL} id="url" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Long URL Example https://www.abcXYZtpodlks.com" required />
    <button onClick={handleShortIt} className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Short It</button>
  </div>
  {Boolean(errors?.originalURLError)&&(<p className='text-red-600'>{errors?.originalURLError}</p>)}
</div>
  )
}

