import Image from 'next/image';
import Link from 'next/link';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {FaSun} from 'react-icons/fa';
import logo from '../public/img/logo.svg';
import { useContextState } from './stateContext';

const Navbar = () => {
  const {dark, setDark} = useContextState();
  return (
    <div className='navbar'>
      <Link href="/">
        <Image src={logo} alt="" />
      </Link>
      <div className="navLinks">
        <a href="#home">Home</a>
        <a href="#skills">Skills</a>
        <a href="#works">Works</a>
        {dark ? <FaSun onClick={()=>setDark(false)} className='icon'/> : <BsFillMoonStarsFill onClick={()=>setDark(true)} className='icon'/> }
        <button>Resume</button>
      </div>
    </div>
  )
}

export default Navbar