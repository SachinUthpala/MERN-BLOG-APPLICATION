import { Button, Navbar , TextInput } from 'flowbite-react';
import { Link , useLocation } from 'react-router-dom';
import { FaCloudMoon, FaSearch } from "react-icons/fa";



export default function Header() {

  // get current parth that we are on the web page 
  const location = useLocation().pathname;

  return (
    <div>
      <Navbar className='border-b-2'>
        <Link to={"/"} className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
          <span
            className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'
          >{"Sachin's "}</span>
          Blogs
        </Link>
        {/* For search  */}
        <form>
          <TextInput
            type='text'
            placeholder='Search...'
            rightIcon={FaSearch}
            className='hidden lg:inline'
          />
        </form>
        <Button className='w-12 h-10 lg:hidden' color='gray'>
          <FaSearch/>
        </Button>
        <div className="flex gap-2 md:order-2">
          <Button className='w-12 h-10 hidden sm:inline' color='gray' pill>
            <FaCloudMoon/>
          </Button>
          {/* link to sign in page  */}
          <Link>
            <Button gradientDuoTone='purpleToBlue' outline>
              Sign In
            </Button>
          </Link>
          <Navbar.Toggle/>
        </div>
        <Navbar.Collapse>
          <Navbar.Link active={location === '/'} as={'div'}>
            <Link to={'/'}>
              Home
            </Link>
          </Navbar.Link>

          <Navbar.Link active = { location === '/about'} as={'div'}>
            <Link to={'/about'}>
              About
            </Link>
          </Navbar.Link>

          <Navbar.Link active = { location === '/projects'} as={'div'}>
            <Link to={'/projects'}>
              Projects
            </Link>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}
