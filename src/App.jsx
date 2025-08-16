import { createBrowserRouter, Navigate, RouterProvider, useNavigate } from "react-router-dom"
import Login from "./components/Login"
import Browse from "./components/Browse"
import Header from "./components/Header"
import { auth } from "./utils/firebase"
import { onAuthStateChanged } from "firebase/auth";
import {  useDispatch } from "react-redux"
import { addUser, removeUser } from "./utils/userSlice"
import { useEffect } from "react"


function App() {
  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
      path : "/",
      element : <Login/>
    },
    {
      path : "/Browse",
      element : <Browse/>
    }

  ])

useEffect(() => {
  onAuthStateChanged(auth, async(user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const {uid,displayName,email,photoURL} = user;
      const userStore = {
        uid,
        displayName,
        email,
        photoURL
      };
      dispatch(addUser(userStore));
    } else {
      console.log("User is signed out");
      
    }
  });
},[auth])



  return (
    
    <div className="App">
      <RouterProvider router={appRouter} />
    </div>
   
  )
}

export default App
