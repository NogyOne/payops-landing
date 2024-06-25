import { Link } from 'react-scroll'

export default function Navbar() {
  return (
    <nav className='bg-[#27314b] py-10 w-full px-40 fixed z-50'>
      <div className='container flex items-center justify-between mx-auto'>
        <div className='text-white duration-75 cursor-pointer hover:scale-110'>
          <p className='text-xl font-bold'>
            Pay
            <span className='relative inline-block align-middle'>
              <img
                className='inline-block w-6 h-6 mb-2 ml-2 hover:animate-spin'
                src='/BlueSpiralV2.png'
                alt='spiral-logo'
              />
            </span>
            ps
          </p>
        </div>

        <div>
          <ul className='flex gap-8'>
            <li>
              <Link
                to='home'
                smooth={true}
                className='text-white cursor-pointer underline-animation'
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to='about'
                smooth={true}
                className='text-white cursor-pointer underline-animation'
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to='functions'
                smooth={true}
                className='text-white cursor-pointer underline-animation'
              >
                Functions
              </Link>
            </li>
            <li>
              <Link
                to='download'
                smooth={true}
                className='text-white cursor-pointer underline-animation'
              >
                Download
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
