/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <div className="min-h-screen mt-20">

     <div className="flex p-3 max-w-3xl mx-auto">
       {/* left  */}
       <div className="left">
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

      <div className="right">
          
      </div>
     </div>

    </div>
  )
}
