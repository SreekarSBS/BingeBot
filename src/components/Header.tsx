import Image from "next/image";
import Link from "next/link";

const Header = () => {
 return <div className="h-32 absolute z-50 shadow-2xl  ">
  <Link href="/">
   <div className=" mx-64 w-60  h-32  ">
    <Image src= "https://upload.wikimedia.org/wikipedia/commons/f/ff/Binge_logo.svg" fill = {true} alt = "Binge-logo" />
    </div>
    </Link>
 </div>
}
export default Header;