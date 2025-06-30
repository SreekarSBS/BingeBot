import Image from "next/image"
import Link from "next/link"

const SignUp = () => {
  return (
    <div>
      <Link href="/SignIn">
       <button className=" w-28 h-14 m-8 cursor-pointer font-serif hover:text-white text-red-50 hover:bg-violet-900/30 duration-1000 rounded-xl  absolute z-50 right-96 bg-violet-900/80 text-shadow-black text-xl  font-bold " >
        
          Sign In
          
          </button>
          </Link>
       <Image className="mask-t-from-background mask-b-from-background " fill = {true}  src= "https://assets.nflxext.com/ffe/siteui/vlv3/75b0ed49-75ab-4a63-bd45-37bc2c95cb73/web/IN-en-20250623-TRIFECTA-perspective_ae5833b7-6ce5-4e88-853e-014f38c506f1_large.jpg" alt = "Netflix-bg" />
             <div className="w-1/2 h-3/6  mx-auto my-auto left-0 absolute top-0 bottom-16 right-0 z-50 ">
                <div className="mx-28 mt-24 h-2/4 p-12   text-center  ">

                 <div className="text-7xl font-serif  text-white   font-black ">
                   Unlimited Movies, TV Shows and more
              </div>
                <div className="text-3xl text-gray-400 my-12 font-extrabold">
                  Starts at $149 . Cancel at any time .
                </div>
                <div className="text-2xl my-6 font-light font-serif ">
                Ready to watch? Enter your email to create or restart your membership.
                </div>
                <div className="flex  ">
                 
                  <input type = "text" placeholder="Email address" className="bg-gray-700 mr-2 w-2/3 rounded-lg h-18 my-4 p-2 text-white relative" />
                  
                  <button className=" w-1/3 ml-2  h-18 my-4 p-2 cursor-pointer font-serif hover:text-white text-red-50 hover:bg-red-900/30 duration-1000 rounded-xl   z-50 right-96 bg-red-900/80 text-shadow-black text-xl  font-bold " >
        Get Started
        </button>
                </div>
                </div>
             </div>
    </div>
  )
}

export default SignUp