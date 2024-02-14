import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import {DOMAIN_NAME,JWT_TOKEN} from '../../config/index';

export const UserRegister = () => {
  const [userData,setUserData]=useState({});
  const [errors,setErrors]=useState({});
  const regexPassword= /^([a-zA-Z0-9@*#]{8,15})$/;
  const fieldNames={ 
    userName:"userName",
    userEmail: "userEmail" ,
    userPassword:"userPassword",
    reUserPassword:"reUserPassword"
  }
  const handleChange=(e)=>{
  setUserData((_) => ({ ..._, [e.target.name]: e.target.value }));
    if(Boolean(userData?.userPassword)&& e.target.name===fieldNames.userPassword)
      if(regexPassword.test(userData.userPassword))
      {
        setErrors((_)=>({..._,[fieldNames.userPassword]:"Password Ok"}));
        if(userData?.reUserPassword===e.target.value)
          setErrors((_)=>({..._,[fieldNames.reUserPassword]:"Password Match"}));
        else{
          if(Boolean(userData?.userPassword))
          setErrors((_)=>({..._,[fieldNames.reUserPassword]:"Password Does Not Match"}));
        }
      }
      else
        setErrors((_)=>({..._,[fieldNames.userPassword]:"Invalid Password"}));
    if(Boolean(userData?.reUserPassword && e.target.name===fieldNames.reUserPassword))
       if(userData?.userPassword===e.target.value)
          setErrors((_)=>({..._,[fieldNames.reUserPassword]:"Password Match"}));
        else
          setErrors((_)=>({..._,[fieldNames.reUserPassword]:"Password Does Not Match"}));
        
  }
  const handleSubmit=async (e)=>{
    e.preventDefault();
    try {
      if(errors.reUserPassword==="Password Match" && errors.userPassword==="Password Ok")
        {
          let response = await axios.post(`${DOMAIN_NAME}api/v1/modules/users/register`,userData);
          console.log(response);
        }
    } catch (err) {
      console.log(err.message)
    }
   
  }
  return (
<form className='w-full sm:w-1/2' onSubmit={handleSubmit}>
  <div className="grid gap-6 mb-6">
    <div>
      <label htmlFor="user_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User Name</label>
      <input name={fieldNames.userName} onChange={handleChange} type="text" id="user_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John_896" required />
    </div>

  <div className="mb-6">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
    <input name={fieldNames.userEmail} onChange={handleChange} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
  </div> 
  <div className="mb-6">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password<p className='text-xs text-blue-900'>Must be 8 to 15 character and can containe a-z ,A-Z, 0-9 ,@*#</p></label>
    <input  name={fieldNames.userPassword} onChange={handleChange} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
     {/* {errors?.userEmail && <p>{errors?.userEmail}</p>} */}
     {Boolean(userData?.userPassword)&&(<p style={{color:`${errors.userPassword==="Password Ok"?"green":"red"}`}}>{errors.userPassword}</p>)}
  </div> 
  <div className="mb-6">
    <label htmlFor="confirm_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
    <input  name={fieldNames.reUserPassword} onChange={handleChange} type="password" id="confirm_password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
    {Boolean(userData?.reUserPassword)&&(<p style={{color:`${errors.reUserPassword==="Password Match"?"green":"red"}`}}>{errors.reUserPassword}</p>)}
  </div> 
  </div>
  {/* <div className="flex items-start mb-6">
    <div className="flex items-center h-5">
      <input id="remember" type="checkbox" defaultValue className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
    </div>
    <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
  </div> */}
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
</form>

  )
}

