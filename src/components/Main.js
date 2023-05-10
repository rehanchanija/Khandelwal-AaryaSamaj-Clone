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

                  </section>

);
};
export default Main;


