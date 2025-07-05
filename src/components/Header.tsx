import Image from "next/image";
import Link from "next/link";


const Header = () => {
 return <div className="h-32 absolute w-full z-50 shadow-2xl border-b-black   ">
  
   <div className=" 2xl:mx-64 xl:mx-16 w-60 relative  h-32  ">
   <Link href="/">
    <Image priority src= "https://upload.wikimedia.org/wikipedia/commons/f/ff/Binge_logo.svg" fill = {true} alt = "Binge-logo" />
    </Link>
    </div>
    

 </div>
}
export default Header;