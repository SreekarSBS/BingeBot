 'use client'
 
 import Image from "next/image";
import { useEffect, useState } from "react";

const Login= () => {
  const [showPassword,setShowPassword] = useState(false);
  const [isSignup,setIsSignUp] = useState(false);

useEffect(() => {
setShowPassword(false)
setIsSignUp(false);
},[])

const handleClick = () => {
  setShowPassword(!showPassword)
}

const handleSignUp = () => {
  setIsSignUp(!isSignup)
}
  const path = !showPassword? "https://www.svgrepo.com/show/348139/eye-crossed.svg" : "https://www.svgrepo.com/show/365364/eye-thin.svg";

  return (
      <div className=" mt-12 ">
        <Image className="opacity-60" fill = {true}  src= "https://assets.nflxext.com/ffe/siteui/vlv3/75b0ed49-75ab-4a63-bd45-37bc2c95cb73/web/IN-en-20250623-TRIFECTA-perspective_ae5833b7-6ce5-4e88-853e-014f38c506f1_large.jpg" alt = "Netflix-bg" />
       
         <div className="w-3/12 mx-auto left-0 right-0 my-auto top-0 bottom-0 absolute h-[800px] rounded-3xl text-white bg-black/60  ">
          <div className=" w-3/4 h-8/12 m-12 p-12 ">
              <div className="text-4xl font-light font-serif  ">Sign { isSignup? 'Up' : 'In'}</div>
              <form className=" text-white py-12 text-2xl" >
                <input type = "text" placeholder="Email address " className="bg-gray-700 w-96 rounded-lg h-18 my-4 p-2 text-white  "  />
                <div className="flex items-center w-96">
                <input type = {`${showPassword ? "text" : "password" }`} placeholder="Password" className="w-full  rounded-lg h-18 my-4 p-2 text-white bg-gray-700" />
                <div onClick={handleClick} className="p-4 hover:bg-red-600 bg-gray-50 cursor-pointer rounded-4xl ml-84 my-4 border-2 absolute">
                  <Image fill = {true} src={path} alt = "eye-svg"  />
                   </div>
                </div>  
                <button className="w-96 h-18 my-6 rounded-lg bg-red-600 hover:text-black ">Sign In</button>
                {  !isSignup &&
                  <div className="flex mt-6"> New to Netflix? <p onClick={handleSignUp} className="cursor-pointer hover:text-red-600 mx-1 font-light hover:underline">Sign up </p></div>
             } 
             {  isSignup &&  <div className="flex mt-6"> Already a User? <p onClick={handleSignUp} className="cursor-pointer hover:text-red-600 mx-1 font-light hover:underline">Sign In </p></div>
            }
             </form>
          </div>
        </div>
      </div>
  );
}

export default Login;

