"use client"

import {Input,Button} from "@nextui-org/react";
import Link from "next/link";
import React from 'react'

const register = () => {
  return (
    <div className="container1">
    <div className="card" >
      <h1>ASTRO SIGNUP</h1>
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

<Input
      // isReadOnly
      label="Fullname"
      // variant="bordered"
      defaultValue=""
      className="mb-5 "
    />

<Input
      // isReadOnly
      label="Address"
      // variant="bordered"
      defaultValue=""
      className="mb-5"
    />
    
    <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg mb-5 px-10">
      Create Account
    </Button>

      Already have an account? <Link href="/"> <b className="text-red-500">Sign In</b></Link>

      
    </div>
    </div>
    
  );
}

export default register

