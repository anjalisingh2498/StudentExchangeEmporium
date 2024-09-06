import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FaBars, FaBarsStaggered, FaBattleNet, FaXmark } from "react-icons/fa6";
import { AuthContext } from '../contects/AuthProvider';

const Navbar = () => {
    const [ isMenuOpne, setIsMenuOpen] = useState(false);
    const [ isSticky , setIsSticky] = useState(false);
  

    const {user} = useContext(AuthContext);
  // console.log(user);

    //toggle menu
    const toggleMenu = () =>{
        setIsMenuOpen(!isMenuOpne);
    }

    useEffect(()=> {
        const handleScroll = () => {
            if(window.scrollY>100){
                setIsSticky(true);
            }
            else{
                setIsSticky(false);
            }
        }
        window.addEventListener("scroll", handleScroll);
        return()=> {
            window.addEventListener("scroll", handleScroll);
        }
    })

    //nav items

    const navItems = [
        {link : "Home", path:"/"},
        {link : "About", path:"/about"},
        {link : "Buy items", path:"/shop"},
        {link : "Sell items", path:"/admin/dashboard"},
        {link : "SignUp", path:"/sign-up"},
    ]
  return (
   <header className='w-full bg-orange-500 fixed top-0 left-0 right-0 transition-all ease-in duration-300'>
    <nav className={'py-4 lg:px-24 px-4 ${isSticky ?"sticky top-0 left-0 right-0 bg-gray-300":""}'}>

        <div className='flex justify-between items-center- text-base gap-8'>
            {/* logo */}
            <Link to ="/"className='text-2x1 font-bold text-green-700 flex items-center gap-2'><FaBattleNet className='inline-block'/>StudentExchangeEmporium</Link>

            {/*nav items for large device*/}
            <ul className='md:flex space-x-12 hidden'>
                {
                   navItems.map(({link, path }) => <Link key={path} to={path} className='block text-base text-white uppercase cursor-pointer hover:text-blue-700'>{link}</Link>)
                }
            </ul>

                {/* btn for the lg devices*/}
                <div className='space-x-12 hidden lg:flex items-center'>
                    <button>
                        <FaBarsStaggered className='w-5 hover:text-green-700'/>
                    </button>
                    {
                        user ? user.email : ""
                    }
                </div>

                {/* menu btn for the mobile devices*/}

                <div className='md:hidden'>

                    <button onClick={toggleMenu} className='text-white focus:outline-none'>
                        {
                            isMenuOpne ? <FaXmark className='h-5 w-5 text-black'/> :<FaBarsStaggered className='h-5 w-5 text-green'/>
                        }
                    </button>
                </div>
        </div>
        {/* navigate items for sm devices*/}

        <div className={`space-y-4 px-4 mt-12 py-7 bg-yellow-700 ${isMenuOpne? "block fixed top-0 right-0 left-0" : "hidden"}`}> 
           {
             navItems.map(({link, path }) => <Link key={path} to={path} className='block text-base text-green uppercase cursor-pointer'>{link}</Link>)
           }
        </div>



    </nav>
   </header>
  )
}

export default Navbar