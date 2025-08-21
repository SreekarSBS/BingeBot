import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { BINGE_LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import GptToggle from "./GptToggle";
import { toggleGptSearch } from "../utils/gptSlice";
import { changeLanguage } from "../utils/languageSlice";

const Header = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch)
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        //  dispatch(removeUser())
        //    navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, displayName, email, photoURL } = user;
        const userStore = {
          uid,
          displayName,
          email,
          photoURL,
        };
        dispatch(addUser(userStore));

        navigate("/Browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    // Cleanup subscription on unmount
    // This is important to avoid memory leaks
    return () => unsubscribe();
  }, []);

  const handleGptToggle = () => {
    dispatch(toggleGptSearch());
  };

  const handleLanguageSelect = (e) => {
    dispatch(changeLanguage(e.target.value));
    
  }

  return (
    <>
      <div className="navbar p-4 lg:p-6 bg-transparent absolute shadow-sm  bg-gradient-to-b from-black">
        <div className="flex-1">
          <a className="btn btn-ghost  text-xl">
            <img
              src={BINGE_LOGO}
              alt="Binge Logo"
              className="z-10 w-32 lg:w-44 ml-44 py-6  absolute"
            />
          </a>
        </div>
        <div className="flex gap-2  z-50">
          {user && (
            <div className="gap-4 flex">
              <select onChange={handleLanguageSelect}>
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.name}{" "}
                  </option>
                ))}
              </select>
              <GptToggle showGptSearch = {showGptSearch} handleGptToggle={handleGptToggle} />

              <div className="dropdown  dropdown-end ">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src={user?.photoURL}
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <a className="font-xl text-blue-500"> {user?.email}</a>
                  </li>
                  <li className="block sm:hidden">
                    <Link
                      onClick={handleGptToggle}
                      className="justify-between text-gray-50 hover:text-cyan-600"
                    >
                      {showGptSearch ? "Home" : "Gpt Search"}
                      <span className="badge">New</span>
                    </Link>
                  </li>
                  <li onClick={handleLogOut}>
                    <a className="text-gray-50 hover:text-amber-600">Logout</a>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
