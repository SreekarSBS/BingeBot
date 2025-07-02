'use client'
import { useEffect, useRef, useState } from "react";
import { lusitana ,inter } from "../../ui/fonts";
import { validateData } from "@/app/lib/utils/validate";
import Image from "next/image";
import Link from "next/link";


const SignUp = () => {
     const [showPassword,setShowPassword] = useState(false);
     
         const email = useRef<HTMLInputElement>(null);
         const password = useRef<HTMLInputElement>(null);
         const [errorMessage,setErrorMessage] = useState("")
        useEffect(() => {
        setShowPassword(false)
      
        },[])
        
        const handleClick = () => {
         setShowPassword(!showPassword)
        }
        
        const handleSign = () =>{
          // optional chaining fallback
           const message =  validateData( email?.current?.value ?? "" ,password?.current?.value ?? "" )
           setErrorMessage(message)
        }
         const path = !showPassword? "https://www.svgrepo.com/show/348139/eye-crossed.svg" : "https://www.svgrepo.com/show/365364/eye-thin.svg";
        
    return (
        <div className="bg-white w-full h-screen text-black ">
            <div className="text-3xl m-16 p-16 w-1/2 h-96  mx-auto my-auto fixed top-0 bottom-0 left-0 right-0">
                <div className={`${inter.className} font-semibold`}>Welcome!</div>
                <div className={`${lusitana.className} font-light pt-1`}> Create your password to start your membership.</div>
                <p className={`${inter.className} text-lg font-extralight pt-1`}>Enter your password and you&#39;ll be watching in no time.</p>
                <form onSubmit={(e) => e.preventDefault()} className="relative   text-white xl:w-3/4  text-lg" >
                <input ref = {email} type = "email" placeholder="Email address " className=" bg-slate-300 xl:w-full mt-6  rounded-lg xl:h-8 2xl:h-10 my-4 p-2 text-gray-600  "  />
                <div className="flex items-center xl:w-full   ">
                <input ref = {password} type = {`${showPassword ? "text" : "password" }`} placeholder="Password" className="w-full rounded-lg xl:h-8 2xl:h-10 my-4 p-2 text-gray-500 " />
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
    )
}

export default SignUp;