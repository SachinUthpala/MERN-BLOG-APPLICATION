/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { Button, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { Await, Link } from "react-router-dom";

export default function SignUp() {

  const [formData , setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({...formData , [e.target.id] : e.target.value})
  }

  console.log(formData);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = fetch('/api/auth/signUp',{
        method : 'POST',
        headers : {'Content-Type' : 'application/json'},
        body : JSON.stringify(formData)
      });

      const data = res.json()
      console.log(data)
      
    } catch (error) {
      console.log(error)
    }
  }

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
          <form className="flex flex-col gap-4" onSubmit={submitHandler}>
            <div>
              <Label value="Your UserName" />
              <TextInput placeholder="Your UserName" id='userName' type="text" onChange={handleChange}/>
            </div>
            <div>
              <Label value="Your Email"/>
              <TextInput placeholder="Your Email" id='email' type="email" onChange={handleChange}/>
            </div>
            <div>
              <Label value="Your Password"/>
              <TextInput placeholder="Your Password" id='password' type="password" onChange={handleChange}/>
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
