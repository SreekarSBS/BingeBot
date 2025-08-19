import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { BINGE_LOGO } from "../utils/constants";



const Header = () => {
    const user = useSelector((store) => store.user);
    const navigate = useNavigate()
     const dispatch = useDispatch();
    const handleLogOut = () => {
        signOut(auth).then(() => {
          //  dispatch(removeUser())
          //    navigate("/");
          }).catch((error) => {
            navigate("/error"); 
            console.log(error);
            
          });
    }

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, async(user) => {
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
          console.log(user);
          
          navigate("/Browse");
        } else {
          console.log("User is signed out");
          dispatch(removeUser())
          navigate("/");
        }
      });
      // Cleanup subscription on unmount
      // This is important to avoid memory leaks
      return () => unsubscribe()
    },[])

    return <>
    <div className="navbar bg-transparent absolute shadow-sm">
  <div className="flex-1">
    <a className="btn btn-ghost  text-xl">
    <img 
    src={BINGE_LOGO} 
    alt="Binge Logo"
     className="z-10 w-64 ml-44  px-8 py-6 mr-auto absolute" />
    </a>
  </div>
  <div className="flex gap-2">
  <p className="input input-bordered text-amber-50 w-24 md:w-auto">{user?.displayName} </p>
    {user && <div className="dropdown dropdown-end text-yellow-100">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src={user?.photoURL} />
        </div> 
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li onClick={handleLogOut}><a>Logout</a></li>
      </ul>
    </div>}
  </div>
</div>
</>
}

export default Header

