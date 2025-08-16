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
import { useEffect, useRef, useState } from "react";
import validate from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);
    const [isSignUp , setIsSignUp] = useState(false);
    const [errorMessage,setErrorMessage] = useState("");
    const email = useRef(null);
    const password = useRef(null)
    const name = useRef(null);
    const dispatch = useDispatch()
    useEffect(() => {
        if(user) navigate("/Browse");
    },[user])

    const handleSubmit = () => {
       setErrorMessage(validate(email.current.value,password.current.value));
       if(errorMessage) return;

        if(isSignUp){
            // SignUp
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
        displayName: name.current.value , photoURL: "https://img1.hotstarext.com/image/upload/w_200,h_200,c_fill/v2/feature/profile/38_jv.png"
      }).then(() => {
        const {uid,displayName,email,photoURL} = user;
              const userStore = {
                uid,
                displayName,
                email,
                photoURL
              };
              dispatch(addUser(userStore));
        navigate("/Browse");
      }).catch((error) => {
        setErrorMessage(error.message)
      });
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(setErrorMessage(errorCode+errorMessage));
    
  });

        }
        else{
            // SignIn
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 

    const user = userCredential.user;
    console.log(user);
    navigate("/Browse");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage("Invalid credentials, please try again");
  });
        }
    }
  return (
    <>
    <Header />
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
        ref = {name}
         type="text"
        placeholder="Name"
        className="w-full p-2 my-4 bg-gray-600 border border-zinc-400  rounded"
     />
  }

     <input
         ref = {email}
         type="email"
        placeholder="Email"
        className="w-full p-2 my-4 bg-gray-600 border border-zinc-400  rounded"
     />
      <input
        ref={password}
        type="password"
        placeholder="Password"
        className="w-full p-2 my-4  bg-gray-600 border border-zinc-400 rounded"
     />
    <Button 
     onClick = {handleSubmit}
     className={"mx-auto my-4 w-full   bg-red-600 hover:zoom-in cursor-pointer"} 
     variant="outline">
        { isSignUp ? "Sign Up" : "Sign In"}
    </Button>
    <p className="text-red-400">{errorMessage}</p>
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
</>
)
}

export default Login
