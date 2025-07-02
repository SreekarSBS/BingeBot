import Image from "next/image"
import Link from "next/link"

const SignUp = () => {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      <Link href="/SignIn">
       <button className=" w-28 h-14 m-8 xl:right-8 cursor-pointer font-serif hover:text-white text-red-50 hover:bg-violet-900/30 duration-1000 rounded-xl  absolute z-50 2xl:right-96 bg-violet-900/80 text-shadow-black text-xl  font-bold " >
        
          Sign In
          
          </button>
          </Link>
       <Image className="mask-t-from-background mask-b-from-background " fill = {true}  src= "https://assets.nflxext.com/ffe/siteui/vlv3/75b0ed49-75ab-4a63-bd45-37bc2c95cb73/web/IN-en-20250623-TRIFECTA-perspective_ae5833b7-6ce5-4e88-853e-014f38c506f1_large.jpg" alt = "Netflix-bg" />
             <div className="2xl:w-3/6 xl:w-full  h-3/6  mx-auto my-auto left-0 absolute top-0 bottom-0 right-0  ">
                <div className="mx-28 xl:mt-14 2xl:mt-24 h-2/4  text-center  ">

                 <div className="2xl:text-7xl xl:text-5xl font-serif  text-white xl:font-semibold  2xl:font-black ">
                   Unlimited Movies, TV Shows and more
              </div>
                <div className="2xl:text-3xl  xl:text-2xl text-gray-400 my-12 xl:font-semibold 2xl:font-extrabold">
                  Starts at $149 . Cancel at any time .
                </div>
                <div className="2xl:text-2xl xl:text-xl my-6 font-light font-serif ">
                Ready to watch? Enter your email to create or restart your membership.
                </div>
                <div className="flex  ">
                 
                  <input type = "text" placeholder="Email address" className="bg-gray-700 mr-2 w-2/3 rounded-lg xl:h-14 2xl:h-18 my-4 p-2 text-white relative" />
                  
                  <button className=" w-1/3 ml-2 xl:h-14 2xl:h-18 my-4 p-2 cursor-pointer font-serif hover:text-white text-red-50 hover:bg-red-900/30 duration-1000 rounded-xl   z-50 right-96 bg-red-900/80 text-shadow-black text-xl  font-bold " >
        Get Started
        </button>
                </div>
                </div>
             </div>
    </div>
  )
}

export default SignUp