import React,{useState} from "react";
import {ChainLinkIcon } from '@@/icons/Icons';
import {CopyButton,DeleteButton} from '@/components/Button';
import Link from "next/link";
import {useDispatch } from "react-redux";
import { setURLID ,deleteURLService ,getAllURLsService} from "@/redux/features/getURLSlice";


export const URLCard = ({_id,originalUrl,shortUrl}) => {
    const [copied, setCopied] = useState(false);
    const dispatch =useDispatch();
    const copyToClipboard = async () => {
        try {
          await navigator.clipboard.writeText("shortUrl");
          setCopied(true);
        } catch (err) {
          console.error('Failed to copy:', err);
        }
      };
      const handleDelete = ()=>{
        try {
            dispatch(setURLID(_id));
            dispatch(deleteURLService());
            dispatch(getAllURLsService());
            
        } catch (err) {
            console.log("L-24 delete Error",err.message);
        }
      }
    return (<div className="relative max-w-sm p-4 h-full bg-white border border-gray-200   hover:bg-gray-100  hover:border-gray-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:dark:bg-black hover:dark:border-white ">
         <ChainLinkIcon/>
            <h5 className="mb-1 mt-4 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Redirect to:</h5>
        <p className="font-normal px-1 border rounded-md border-gray-200  dark:border-gray-700   break-words overflow-y-scroll no-scroller h-20 text-gray-500 dark:text-gray-400">{originalUrl}</p>
        <Link href={shortUrl} target="blank" className="inline-flex text-xl break-all font-medium items-center text-blue-600 hover:underline my-3">
        {shortUrl}
        </Link>
        <div className="flex justify-center  gap-6">

        <CopyButton onClick={copyToClipboard} copied={copied} />
        <DeleteButton onClick={handleDelete}/>
        </div>
     

    </div>
    )
} 