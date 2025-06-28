 import Image from "next/image";

const Login= () => {

  return (
      <div className="opacity-40  mt-12 ">
        <Image fill = {true}  src= "https://assets.nflxext.com/ffe/siteui/vlv3/75b0ed49-75ab-4a63-bd45-37bc2c95cb73/web/IN-en-20250623-TRIFECTA-perspective_ae5833b7-6ce5-4e88-853e-014f38c506f1_large.jpg" alt = "Netflix-bg" />
       
         <div className="w-3/12 mx-auto left-0 right-0 my-auto top-0 bottom-0 absolute h-[800px] opacity-80  bg-black">
          <div className=" w-3/4 h-8/12 m-16 p-16">
              <div className=" text-4xl font-black ">Sign In</div>
          </div>
        </div>
      </div>
  );
}

export default Login;

