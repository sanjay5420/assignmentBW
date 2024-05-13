

// const page = () => {
//   //this is called jsx not html. 
//   return (
// //     <div>
// //        {/* USING TAILWIND */}
// //       <p className="text-white bg-red-500 m-4 w-24 p-2 rounded-lg"> <b>LOGIN :</b></p>

// // {/* USING GLOBAL CSS */}
// //       <p className="login"><b> LOGIN :</b></p>
// // {/* USING INLINE CSS */}
// //       <p style={{backgroundColor:'blue', color:'white'}}><b> LOGIN :</b></p>


// //       <input placeholder="Enter Username"></input> <br />
// //       <input placeholder="Enter Password"></input> <br />
// //       <button>Click Me</button>
// //     </div>
"use client"

import {Input,Button} from "@nextui-org/react";
import Link from "next/link";
import React from 'react'
const page = () => {
  return (
   <div className="container1">
    <div className="card" >
      <h1>ASTRO LOGIN</h1>
       <Input
      // isReadOnly
      label="Email"
      // variant="bordered"
      defaultValue=""
      className="mb-5"
    />

<Input
      // isReadOnly
      label="Password"
      // variant="bordered"
      defaultValue=""
      className="mb-5"
    />
    
    <Button as={Link} href="/home" radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg mb-5 px-10">
      LOGIN 
    </Button>

      Don't have an account yet? <Link href="/register"> <b className="text-red-500">SignUp</b> instead!!!</Link>

      
    </div>
    </div> 
    
  );
}

export default page


