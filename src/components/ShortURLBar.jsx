import React, { useEffect, useState } from 'react';
import { ClipBoard,ChainLinkIcon,DirectRedirectIcon } from '@@/icons/Icons';
import { useSelector,useDispatch } from 'react-redux';
import { resetStatusCode } from '@/redux/features/getURLSlice';
import { DOMAIN_NAME } from '@@@/config';
import { ThreeDotLoader } from './Loader';
import {CopyButton} from './Button';

export const ShortURLBar = () => {
  const shortUrl = useSelector((state) => state?.urlReducer?.shortURL);
  const loading=useSelector((state)=>state?.urlReducer?.loading);
  const statusCode=useSelector((state)=>state?.urlReducer?.statusCode);
  const dispatch = useDispatch();
  const [copied, setCopied] = useState(false);
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(DOMAIN_NAME + shortUrl);
      setCopied(true);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  useEffect(()=>{
    dispatch(resetStatusCode(null))
  })
  return (<>
     {Boolean(loading)&& <ThreeDotLoader/>}

  {statusCode===201 ||statusCode===409||statusCode===null ?  <div className={`${Boolean(shortUrl) &&Boolean(!loading) ? "flex" : "hidden"} flex gap-2  items-center justify-center `}>
      <a href={DOMAIN_NAME + shortUrl} target='_blank' className="inline-flex items-center justify-center p-5 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
        <ChainLinkIcon/>
        <span className="w-full">{DOMAIN_NAME + shortUrl} </span>
        <span>
       <DirectRedirectIcon/>
        </span>
      </a>
      <CopyButton onClick={copyToClipboard} copied={copied} />

    </div>:<p className='text-red-600 text-xs'>Somthing wrong , please try again or try later</p>}
  </>)
}
