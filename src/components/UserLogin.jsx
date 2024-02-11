import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import {DOMAIN_NAME,JWT_TOKEN} from '../../config/index';
import { useRouter } from 'next/router';

export const UserLogin = () => {
  const router = useRouter();
  const [userData,setUserData]=useState({});
  const [errors,setErrors]=useState({});
  const regexPassword= /^([a-zA-Z0-9@*#]{8,15})$/;
  const fieldNames={ 
    userEmail: "userEmail" ,
    userPassword:"userPassword",

  }
  const handleChange=(e)=>{
  setUserData((_) => ({ ..._, [e.target.name]: e.target.value })); 
  if(fieldNames.userPassword===e.target.name)
  setErrors((_)=>({..._,[fieldNames.userPassword]:""}));
  }


  const handleSubmit=async (e)=>{
    e.preventDefault();
    try {
      if(regexPassword.test(userData?.userPassword))
     { 
       let response = await axios.post(`${DOMAIN_NAME}/api/v1/modules/users/login`,userData);
       console.log(response.data.token)
       if(response.status==200)
       {
        localStorage.setItem(JWT_TOKEN,response.data.token);
        router.push("login/dashboard");
      };
      }
    else
          setErrors((_)=>({..._,resError:"Password Does Not Match"}));
        
    } catch (err) {
      if(err.response.status==401)
      setErrors((_)=>({..._,resError:"Password does not match"}));
      else if(err.response.status==404)
      setErrors((_)=>({..._,resError:"User not found ,please Register"}));
      else if(err.response.status==400)
      setErrors((_)=>({..._,resError:"Email or Password Invalid"}));
     else
     setErrors((_)=>({..._,resError:"Something went wrong ,Please try again later"}));
    }
   
  }
  return (
<form className='w-full grid justify-center sm:w-1/2' onSubmit={handleSubmit}>
  <div className="grid gap-6 mb-6">
  {Boolean(errors?.resError)&&(<p className='text-red-600 text-xs'>{errors.resError}</p>)}
  <div className="mb-6">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
    <input name={fieldNames.userEmail} onChange={handleChange} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
  </div> 
  <div className="mb-6">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
    <input  name={fieldNames.userPassword} onChange={handleChange} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
  </div>
  </div>
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
</form>

  )
}

