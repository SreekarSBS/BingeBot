
import Image from "next/image";
import Link from "next/link";

const SignUpLayout = ({ children }: { children: React.ReactNode }) => { 
    return ( <div>
        <div className="h-32 absolute w-full z-50 shadow-2xl border-b-2   ">
  <Link href="/">
   <div className=" 2xl:mx-64 xl:mx-16 w-60 relative  h-32  ">
    <Image priority src= "https://upload.wikimedia.org/wikipedia/commons/f/ff/Binge_logo.svg" fill = {true} alt = "Binge-logo" />
    </div>
    </Link>
 </div>
            {children}
       </div>
    );
    }

export default SignUpLayout;