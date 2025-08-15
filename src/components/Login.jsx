import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { useState } from "react";

const Login = () => {
    const [isSignUp , setIsSignUp] = useState(false);


  return (
<div
  className="hero min-h-screen "
  style={{
    backgroundImage:
      "url(https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg)",
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md ">
     
      <Card className={"bg-black text-amber-50  w-full h-full"} >
   <CardHeader>
     <CardTitle className={"mr-auto mt-4 text-2xl hover:underline"}>{ isSignUp ? "Sign Up" : "Sign In"}</CardTitle>
        
  </CardHeader>
   <CardContent>
  { isSignUp && <input
         type="text"
        placeholder="Name"
        className="w-full p-2 my-4 bg-gray-600 border border-zinc-400  rounded"
     />
  }

     <input
         
         type="email"
        placeholder="Email"
        className="w-full p-2 my-4 bg-gray-600 border border-zinc-400  rounded"
     />
      <input
        type="email"
        placeholder="Password"
        className="w-full p-2 my-4  bg-gray-600 border border-zinc-400 rounded"
     />
    <Button className={"mx-auto my-4 w-full   bg-red-600 hover:zoom-in cursor-pointer"} variant="outline">{ isSignUp ? "Sign Up" : "Sign In"}</Button>
 
  </CardContent>
  <CardFooter>
  { isSignUp ?
         <p className="font-extralight text-lg">Already have an account?  
            <span onClick={() => setIsSignUp(false)} className="text-red-500 mx-1 cursor-pointer">
            SignIn
            </span>  here
            </p>
        :
        <p className="font-extralight text-lg">New to Binge?
         <span onClick={() => setIsSignUp(true)} className="text-red-500 mx-1 cursor-pointer">
            SignUp
            </span> 
         here</p>
        
        }
  </CardFooter>
</Card>
     
    </div>
  </div>
</div>  
)
}

export default Login
