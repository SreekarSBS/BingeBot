"use client"

import { signInWithEmailAndPassword } from "firebase/auth";
import Image from "next/image"
import Link from "next/link"
import { auth } from "@/app/lib/utils/firebase";
import { useEffect, useRef, useState } from "react"
import { useSearchParams } from "next/navigation";
import { Suspense } from 'react'

 const SignIn = () => {
     const [showPassword,setShowPassword] = useState(false);
     const [isSignup,setIsSignUp] = useState(false);
     const email = useRef<HTMLInputElement>(null);
     const password = useRef<HTMLInputElement>(null);
     const [errorMessage,setErrorMessage] = useState("")
    useEffect(() => {
    setShowPassword(false)
    setIsSignUp(false);
    },[])
    
    const handleClick = () => {
     setShowPassword(!showPassword)
    }
    const searchParams = useSearchParams();
    const emailID = searchParams.get("email") ?? "" ;
    const handleSign = () =>{
      const inputEmail =email?.current?.value ?? ""
      // optional chaining fallback
      //  const message =  validateData( email?.current?.value ?? "" ,password?.current?.value ?? "" )
      //  setErrorMessage(message)
      signInWithEmailAndPassword(auth, emailID || inputEmail ,password?.current?.value ?? "")
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("User signed in successfully:", user);
    
    // ...
  })
  .catch((error) => {
    // const errorCode = error.code;
    // const errorMessage = error.message;
    setErrorMessage("SignIn failed " + error.message);
  });

    }
     const path = !showPassword? "https://www.svgrepo.com/show/348139/eye-crossed.svg" : "https://www.svgrepo.com/show/365364/eye-thin.svg";
    
 return    <Suspense><div className="relative w-full h-screen bg-black overflow-hidden">

        <Image className="mask-t-from-background mask-b-from-background " fill src= "https://assets.nflxext.com/ffe/siteui/vlv3/75b0ed49-75ab-4a63-bd45-37bc2c95cb73/web/IN-en-20250623-TRIFECTA-perspective_ae5833b7-6ce5-4e88-853e-014f38c506f1_large.jpg" alt = "Netflix-bg" />
              
         <div className="2xl:w-[400px] w-96 mx-auto left-0 right-0 my-auto top-0 bottom-0 absolute xl:h-[510px] 2xl:h-[560px] rounded-3xl text-white bg-black/60  ">
          <div className=" w-3/4 h-8/12 xl:m-6 xl:p-2  2xl:p-4 ">
              <div className="2xl:text-2xl xl:text-2xl font-light 2xl:m-0 xl:mt-6 font-serif  ">Sign { isSignup? 'Up' : 'In'}</div>
              <form onSubmit={(e) => e.preventDefault()} className="relative xl:w-80  text-white xl:py-8  2xl:text-lg" >
                <input ref = {email} type = "text" defaultValue={`${emailID || ""}`} placeholder={`${emailID || "Email address"}`} className="bg-gray-700  xl:w-80  rounded-lg xl:h-14 2xl:h-15 my-4 p-2 text-white  "  />
                <div className="flex items-center xl:w-80 ">
                <input ref = {password} type = {`${showPassword ? "text" : "password" }`} placeholder="Password" className="w-full rounded-lg xl:h-14 2xl:h-15 my-4 p-2 text-white bg-gray-700" />
                <div onClick={handleClick} className="p-4 hover:bg-red-600 bg-gray-50 cursor-pointer rounded-4xl 2xl:ml-84 my-4 border-2 right-2 absolute">
                  <Image fill = {true} src={path} alt = "eye-svg"  />
                   </div>
                </div>  
                <p className="font-bold text-xl text-red-600 ">{errorMessage}</p>
                <button onClick={handleSign} className=" xl:w-80 xl:h-14 2xl:h-15 my-6 cursor-pointer rounded-lg bg-red-600 hover:text-black ">Sign In</button>
              
                  <div className="flex mt-6"> New to Netflix? <Link href="/"> <p className="cursor-pointer hover:text-red-600 mx-1 font-light hover:underline">Sign up </p></Link></div>
             
            
             </form>
          </div>
        </div>
      </div></Suspense>
}

export default SignIn