
import { Button, Drawer } from 'antd';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

    return (
        <header className='flex justify-between items-center px-12 my-6    '>
            <div className='  '>
             <img src="/logo.png" className='w-auto h-[4rem] sm:mx-auto'/>
            </div>      
            
            <div className='flex justify-center'>

<ul className='md:flex hidden md:items-center  font-base text-md  md:text-black text-slate-500  '>
    <NavLink to ='/' className= ''> 
        <li className='px-3    hover:text-[#0891b2] cursor-pointer '>Home</li>
    </NavLink>
    <NavLink to='/about'>
        <li className='px-3   hover:text-[#0891b2] cursor-pointer'>About Us </li>
    </NavLink>
    <NavLink to ='/sponsor'>
        <li className='px-3   hover:text-[#0891b2] cursor-pointer'>Sponsor</li>
    </NavLink>
    <NavLink to ='Comitee'>
        <li className='px-3   hover:text-[#0891b2] cursor-pointer'>Committee</li>
    </NavLink>
    <NavLink to ='terms'>
        <li className='px-3   hover:text-[#0891b2] cursor-pointer'>Terms & condition</li>
    </NavLink>
    <NavLink to ='hotel'>
        <li className='px-3   hover:text-[#0891b2] cursor-pointer'>Hotel details</li>

    </NavLink>
    <NavLink to ='Visitor'>
        <li className='px-3  hover:text-[#0891b2] cursor-pointer '>Visitors pass</li>

    </NavLink>
</ul>

<div className=' md:flex hidden'>
<NavLink to= 'Register'> <button className='bg-[#0891b2] md:font-base text-md font-medium rounded-xl  md:px-6 px-4 py-1 md:py-2 text-white hover:shadow-2xl shadow-gray-500 active:bg-blue-900'>

        Candidate Registration
    </button>
    </NavLink>
</div>
         </div> 
            <Drawer title="" placement="right" onClose={onClose} open={open}>
              <div className=' text-2xl  text-center '>

                <ul className='  mx-4 md:font-base   '>
                    <a href='#'> 
                        <li className='px-3 py-4   hover:text-[#0891b2] cursor-pointer '>Home</li>
                    </a>
                    <a href='#'>
                        <li className='px-2 py-4  hover:text-[#0891b2] cursor-pointer'>About us</li>
                    </a>
                    <a href='#'>
                        <li className='px-2 py-4  hover:text-[#0891b2] cursor-pointer'>Sponsor</li>
                    </a>
                    <a href='#'>
                        <li className='px-2 py-4  hover:text-[#0891b2] cursor-pointer'>Committee</li>
                    </a>
                    <a href='#'>
                        <li className='px-2 py-4  hover:text-[#0891b2] cursor-pointer'>Terms & condition</li>
                    </a>
                    <a href='#'>
                        <li className='px-2 py-4  hover:text-[#0891b2] cursor-pointer'>Hotel details</li>

                    </a>
                    <a href='#'>
                        <li className='px-2  py-4 hover:text-[#0891b2] cursor-pointer '>Visitors pass</li>

                    </a>
                    <a href='#'>
                        <li className='px-2  py-4 hover:text-[#0891b2] cursor-pointer '>Visitors pass</li>

                    </a>
                    <a href='#'>
                        <li className='px-2  py-4 hover:text-[#0891b2] cursor-pointer '>Candidate Registration</li>

                    </a>
                </ul>
            
              
                         </div> 
                </Drawer>
            
            <div className='md:hidden '>

            {<Button type="" onClick={showDrawer}>
                <div className='flex items-center  '>

             <img src='/hamburger.jpg' className='w-auto h-[3rem]'/>
                </div>
            </Button> }
            </div>
            
        </header>
    )
}


export default Navbar
