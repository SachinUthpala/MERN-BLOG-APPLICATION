import { Navbar , TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";


export default function Header() {
  return (
    <div>
      <Navbar className='border-b-2'>
        <Link to={"/"} className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
          <span
            className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'
          >{"Sachin's "}</span>
          Blogs
        </Link>
        <form>
          <TextInput
            type='text'
            placeholder='Search...'
            rightIcon={FaSearch}
          />
        </form>
      </Navbar>
    </div>
  )
}
