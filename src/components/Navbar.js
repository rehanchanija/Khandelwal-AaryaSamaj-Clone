
import { Button, Drawer } from 'antd';
import { useState } from 'react';
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

    return (
        <header className='flex justify-between items-center m-6 md:my-8 '>
            <div className='  '>
                <img src="/logo.png" className='  w-auto sm:h-[5rem] sm:mx-auto'  />
            </div>      
            
            <div className=' text-2xl '>

<ul className='md:flex hidden md:items-center mx-4 md:font-base   '>
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
</ul>

<div className=' md:flex py-4'>
    <button className='bg-[#0891b2] md:font-base text-xl rounded-xl  px-3  py-2 text-white 
     hover:shadow-2xl shadow-gray-100 active:bg-blue-900'>
        Candidate Registration
    </button>
</div>
         </div> 
            <Drawer title="" placement="right" onClose={onClose} open={open}>
              <div className=' text-2xl '>

                <ul className='md:flex md:items-center mx-4 md:font-base   '>
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
                </ul>
            
                <div className=' md:flex py-4'>
                    <button className='bg-[#0891b2] md:font-base text-xl rounded-xl  px-3  py-2 text-white 
                     hover:shadow-2xl shadow-gray-100 active:bg-blue-900'>
                        Candidate Registration
                    </button>
                </div>
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
