'use client'
import Image from "next/image"
import Link from "next/link"
import {  useEffect, useRef, useState } from "react";
import { validateEmail } from "./lib/utils/validate";
import { useRouter } from "next/navigation";
import { auth } from "./lib/utils/firebase";
import {  onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "./lib/utils/userSlice";
const RegForm = () => {
  const dispatch = useDispatch();
  
  const [errorMessage, setErrorMessage] = useState("");
 
  
  const router = useRouter(); 
  //added null 
  const emailId = useRef<HTMLInputElement>(null);

  useEffect(() => {
onAuthStateChanged(auth, (user) => {
  if (user) {
    
    const {uid } = user;
    dispatch(addUser({uid : uid, email: user.email }));
    
  } else {
   dispatch(removeUser());
   router.push("/");
  }
});
  });


  const handleRedirect = () => {
    const email = emailId.current?.value || "";
    const isValid = validateEmail(email) === "";
  
     setErrorMessage(isValid ? "" : "Please enter a valid email ID");
  
    if (!isValid) {
     
      router.push("/");
    return;
    }


  
    const userEmail = auth.currentUser?.email ;
    if (userEmail === email) {
     
      router.push(`/SignIn?email=${email}`);
    }

    else  router.push(`/SignUp?email=${email}`);
  };
  
 
  
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      <Link href="/SignIn">
       <button className=" w-28 h-14 m-8 2xl:right-64 right-8 cursor-pointer font-serif hover:text-white text-red-50 hover:bg-violet-900/30 duration-1000 rounded-xl  absolute z-50  bg-violet-900/80 text-shadow-black text-xl  font-bold " >
        
          Sign In
          
          </button>
          </Link>
       <Image className="mask-t-from-background mask-b-from-background " fill = {true}  src= "https://assets.nflxext.com/ffe/siteui/vlv3/75b0ed49-75ab-4a63-bd45-37bc2c95cb73/web/IN-en-20250623-TRIFECTA-perspective_ae5833b7-6ce5-4e88-853e-014f38c506f1_large.jpg" alt = "Netflix-bg" />
             <div className="2xl:w-9/12 w-full  h-3/6  mx-auto my-auto left-0 absolute top-0 bottom-0 right-0  ">
                <div className="mx-28 mt-14 2xl:mt-12 h-2/4  text-center  ">

                 <div className="2xl:text-5xl text-6xl  font-serif  text-white font-semibold  ">
                   Unlimited Movies, TV Shows and more
              </div>
                <div className="text-2xl text-gray-400 my-8 2xl:my-6 font-semibold 2xl:font-extrabold">
                  Starts at $149 . Cancel at any time .
                </div>
                <div className="2xl:text-2xl text-xl my-6 font-light font-serif ">
                Ready to watch? Enter your email to create or restart your membership.
                </div>
                <div className="flex  ">
                 
                  <input ref = {emailId} type = "text" placeholder="Email address" className="bg-gray-700 mr-2 w-2/3 rounded-lg h-14 2xl:h-18 my-4 p-2 text-white relative" />
                  <div 
                    onClick={handleRedirect} className="flex items-center justify-center w-1/3 ml-2 h-14 2xl:h-18 my-4 p-2 cursor-pointer font-serif hover:text-white text-red-50 hover:bg-red-600/70 duration-1000 rounded-xl   z-50 right-96 bg-red-900/80 text-shadow-black text-xl  font-bold ">
                  
                  Get Started 
       
        </div>
                </div>
                {errorMessage && <p className="font-2xl text-red-600 font-bold">Please enter a valid email ID</p>}
                </div>
             </div>
    </div>
  )
}

export default RegForm
