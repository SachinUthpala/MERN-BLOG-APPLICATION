/* eslint-disable react/no-unescaped-entities */
import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="min-h-screen mt-20">

     <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-10">
       {/* left  */}
       <div className="left flex-1">
          <Link to={"/"} className='font-bold dark:text-white text-4xl'>
            <span
              className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'
            >{"Sachin's "}</span>
            Blogs
          </Link>
          <p className="mt-5 text-sm">
            Wellcome to Sachin's Blogging Application. Make You more comfotable with us and enjoy our blogs.
            Continive with Google
          </p>
      </div>

      {/* right  */}

      <div className="right flex-1">
          <form className="flex flex-col gap-4">
            <div>
              <Label value="Your UserName" />
              <TextInput placeholder="Your UserName" id='username' type="text" />
            </div>
            <div>
              <Label value="Your Email"/>
              <TextInput placeholder="Your Email" id='email' type="text" />
            </div>
            <div>
              <Label value="Your Password"/>
              <TextInput placeholder="Your Password" id='password' type="password" />
            </div>
            <Button gradientDuoTone={'purpleToPink'}  type="submit">Sign Up</Button>
          </form>
          <div className="flex gap-2 mt-5 text-sm">
            <span className="">
              Have An Account ?
            </span>
            <Link to={'../sign-in'} className="text-pink-500"> Sign In</Link>
          </div>
      </div>
     </div>

    </div>
  )
}
