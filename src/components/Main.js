import React from 'react'
import { Carousel } from 'antd';
const contentStyle = {
};
const Main = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    

<section className='mx-auto '>
            <div>
                <Carousel afterChange={onChange}>
      <div>
        <h3 style={contentStyle}><img src='./main.png ' className='w-full sm:h-auto md:h-[32rem] ' /></h3>
      </div>
      <div>
        <h3 style={contentStyle}><img src='./main.png ' className=' w-full sm:h-auto md:h-[32rem] ' /></h3>
      </div>
      <div>
        <h3 style={contentStyle}><img src='./main.png ' className='w-full sm:h-auto md:h-[32rem] ' /></h3>
      </div>
      
    </Carousel>
            </div>


            <div className='bg-gray-100 flex flex-col items-center lg:py-16 py-4'>
                <h1 className='lg:text-4xl 2xl:text-6xl text-3xl font-extrabold text-[#0891b2]  pb-4 md:pb-12'>
                    हमारे आशीर्वादक
                </h1>
                <img src='./logo3.png' className='sm:w-auto w-full h-auto  2xl:h-[66rem] mx-auto pb-4' />
            </div>

            <div1 className='bg-[#F0F0D6] flex flex-col  md:py-16 py-4'>
                <h2 className='md:text-4xl 2xl:text-6xl text-3xl text-center font-extrabold text-[#0891b2]  pb-4 md:pb-12 '>
                    हमारे प्रेरणा स्त्रोत
                </h2>
                <img src='./mh.png' className='mx-auto sm:w-auto w-full h sm:h-[29rem] h-auto xl:h-[34rem] pb-4' />

                <div className='sm:grid sm:grid-cols-2 '>

                    <div className='sm:col-span-2 sm:flex sm:justify-evenly'>

                        <div>
                            <img src='./ghn.png' className='mx-auto sm:w-auto w-full sm:h-[28rem] h-auto pb-4 xl:h-[32rem]' />
                        </div>

                        <div>
                            <img src='./raj.png' className='mx-auto sm:w-auto w-full sm:h-[28rem] h-auto pb-4 xl:h-[32rem]' />

                        </div>

                    </div>


                    <div className='sm:col-span-3 sm:flex sm:justify-evenly'>

                        <div>
                            <img src='./din.png' className='mx-auto sm:w-auto w-full sm:h-[28rem] h-auto pb-4 xl:h-[32rem]' />
                        </div>

                        <div>
                            <img src='./us .png' className='mx-auto sm:w-auto w-full sm:h-[28rem] h-auto pb-4 xl:h-[32rem]' />

                        </div>
                        <div>
                            <img src='./san.png' className='mx-auto sm:w-auto w-full sm:h-[28rem] h-auto pb-4 xl:h-[32rem]' />

                        </div>
                    </div>

                </div>
                <div>

                    <div className=' sm:flex sm:justify-evenly'>

                        <div>
                            <img src='./sarad.jpg' className='mx-auto sm:w-auto w-full sm:h-[28rem] h-auto pb-4  xl:h-[32rem]' />
                        </div>
                        <div>
                            <img src='./priynk,png.jpg' className='mx-auto sm:w-auto w-full sm:h-[28rem] h-auto pb-4 xl:h-[32rem]' />
                        </div>
                    </div>

                </div>
            </div1>
            <div2 className='mx-auto py-8'>

                <div className='flex flex-col items-center py-8'>

                    <h3 className='md:text-4xl 2xl:text-6xl text-3xl font-extrabold text-[#0891b2]   pb-4 '>समिति सदस्यगण</h3>
                    <div className='m-4'>
                        <img src='./last.png' className='mx-auto w-full sm:w-auto sm:h-[36rem]  h-auto
                     ' />

                    </div>

                </div>
                <div className='pb-12 flex justify-center items-center px-4  '>

                    <a className='border-2 sm:px-8 sm:py-3 text-center px-3 py-2  border-[#53acc2] text-xl rounded-md  text-[#0891b2] hover:border-blue-700 hover:scale-110 transition ease-in-out'>
                        Visistor's Pass
                    </a>

                    <a href='#'>
                        <button className='bg-[#0891b2] text-center rounded-xl text-xl  px-2 py-2 sm:px-6 sm:py-4 text-white shadow-lg shadow-blue-300 ml-4 md:ml-6 hover:bg-blue-700 hover:scale-110 transition ease-in-out'>

                            Candidate Registration
                        </button>
                    </a>
                </div>


            </div2>

            <div3 className=''>
                <div className=' md:flex justify-between p-8 '>
                    <div className='mb-6 md:mb-0'>
                        <div>
                            <img src='./logo.png' className='pb-4  w-auto h-[6rem]' />
                        </div>
                        
                            <div className='flex items-center space-x-3 '>
                                <a href='#' className='hover:text-blue-400 text-xl'>+91 95371 63000</a>
                                <a href='https://api.whatsapp.com/send/?phone=9195371-64000&text=Welcome+to+khandelwal+Yuva+kalyan+Sanghatan%2Chow+can+i+help+you%3F&type=phone_number&app_absent=0'> <img src='./WRSP.JPG' className='w-8' />
                                </a>

                            </div>
                            <div className='flex items-center space-x-3'>
                                <a href='#' className='hover:text-blue-400 text-xl'>+91 95371 63000</a>
                                <a href='https://api.whatsapp.com/send/?phone=9195371-64000&text=Welcome+to+khandelwal+Yuva+kalyan+Sanghatan%2Chow+can+i+help+you%3F&type=phone_number&app_absent=0'> <img src='./WRSP.JPG' className='w-8' />
                                </a>
                            </div>
                                                    

                    </div>
                    <div4  className='grid grid-cols-2  sm:grid sm:grid-cols-3  ' >
        <div className=''>
            <h2 className='pb-4 font-medium '>RESOURCES</h2>
                <ul className='text-slate-700'>
                    <li className='hover:text-blue-400  cursor-pointer text-sm py-2 hover:underline'><a>About us</a></li>
                    <li className='hover:text-blue-400 cursor-pointer text-sm py-2 hover:underline'><a>Commitee</a></li>
                    <li className='hover:text-blue-400 cursor-pointer text-sm py-2 hover:underline'><a>Our Sponsors</a></li>
                    
                </ul>
        </div>
        <div className=''>
            <h2 className='pb-4  font-medium'>JOIN US</h2>
                <ul className='text-slate-700'>
                    <li className='hover:text-blue-400 cursor-pointer text-sm py-2 hover:underline'><a>Register As Visitor</a></li>
                    <li className='hover:text-blue-400 cursor-pointer text-sm py-2 hover:underline'><a>Register As Candidate</a></li>
                    <li className='hover:text-blue-400 cursor-pointer text-sm py-2 hover:underline'><a>Contact Us</a></li>
                    
                </ul>
        </div>
        <div className='py-4 sm:py-0'>
            <h2 className='pb-4 font-medium'>LEGAL</h2>
                <ul className='text-slate-700'>
                    <li className='hover:text-blue-400 cursor-pointer text-sm py-2 hover:underline'><a>Privacy Policy</a></li>
                    <li className='hover:text-blue-400 cursor-pointer text-sm py-2 hover:underline'><a>Terms & conditions</a></li>
                    <li className='hover:text-blue-400 cursor-pointer text-sm py-2 hover:underline'><a>Cancelelation & Refund Policy</a></li>
                    <li className='hover:text-blue-400 cursor-pointer text-sm py-2 hover:underline'><a>Shipping  & Deleivery Policy</a></li>
                    
                </ul>
        </div>
                    </div4>
                </div>

                <div className='m-6'>
                    
                <hr class=" my-4"/>
                <div className=' sm:flex sm:justify-between items-center p-4  '>

                <span className=' text-md text-slate-500' >© 2022<a className='hover:text-blue-400 cursor-pointer text-sm py-2 hover:underline'> Khandelwal Yuva Kalyan Sanghatana™.</a>All Rights Reserved.</span>
                    

                <div className='flex sm:justify-center py-2'>
                    <a href="https://www.facebook.com/khandelwalyuva.rajnandgaon" target="_blank" rel="noreferrer" class="text-gray-500 hover:text-gray-900 "><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path></svg></a>
                    
                    <a href="https://instagram.com/kyksrjn?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer" class="text-gray-500 hover:text-gray-900 ml-4"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path></svg></a>  
                    
                    </div>
                </div>
                <hr className='my-4'></hr>
                    <div className='flex justify-center'>
                        <a className=' text-slate-500 text-md hover:text-blue-400 cursor-pointer  py-2 hover:underline'>Event by Event 365rjn  <span className='ml-4'>
                                Website by tripund.in
                            </span>
                                </a>

                    </div>
                </div>
                
            </div3>
        </section>

);
};
export default Main;


