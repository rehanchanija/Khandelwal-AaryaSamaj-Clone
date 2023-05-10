import React from 'react'
const Regsiter = () => {



  return (

    <div>

        <div>
        <h1 className='lg:text-[2.2rem] mt-10 text-3xl text-center font-bold text-[#0891b2] '> Candidate Registration
</h1>
        </div>
        <div className='sm:border sm:border-1 my-20 mx-4 lg:mx-[4rem] flex sm:flex-row flex-col shadow-lg'>
          
            <div className='sm:w-[40%] w-full flex items-center'>
              <img src='./candidate.png' className='sm:py-[12rem]'/>
            </div>

            <div className='sm:w-[60%] px-2'>
<div>
  <p className='text-center py-4 text-slate-600'>यह सम्मेलन विधवा, विधुर और शारीरिक रूप से विकलांग व्यक्ति के लिए निशुल्क है
</p>
<hr className='py-2'></hr>
  <strong>व्यक्तिगत विवरण</strong>
</div>



<div  className=' my-8  text-sm  sm:flex '>

<form className='space-y-8 px-4    '>


<div className='sm:flex  inline-block justify-center'>
 
  
    <label className=''>नाम :</label>

    <input className= '   px-2 border border-1 hover:border-blue-400 py-1' placeholder='नाम'  >
    </input>
  
</div>


<div className='sm:flex  justify-center inline-block'>
 
 
    <label className=''>मोबाइल नंबर :</label>
 

    <input className='px-2 border border-1 hover:border-blue-400 py-1' placeholder='मोबाइल नंबर'>

    </input>
  
</div>
<div className='sm:flex  inline-block justify-center '>
  
    <label className=''>ईमेल आईडी :</label>
  


    <input className='   px-2 border border-1 hover:border-blue-400 py-1'placeholder='ईमेल आईडी'>

    </input>
  
</div>
<div className='sm:flex justify-between inline-block '>
 
  <div>
    <label className=''>लोगों की संख्या:</label>
  </div>

  <div  className=' sm:py-0'>
    <input className=' w-full  px-2 border border-1 hover:border-blue-400 py-1' placeholder='लोगों की संख्या'>

    </input>
  </div>
</div>
<div className='sm:flex  inline-block '>
 
  <div>
    <label className=''>शहर :</label>
  </div>

  <div  className=' sm:py-0'>
    <input className=' border border-1 hover:border-blue-400 py-1' placeholder='शहर '>

    </input>
  </div>
</div>
<div className='sm:flex  inline-block '>
 
  <div>
    <label className=''>पास चुनें :</label>
  </div>

  <div className=' sm:py-0'>
    <input type = 'search' className='w-full  px-2 border border-1 hover:border-blue-400 py-1'  placeholder='पास चुनें'>

    </input>
  </div>
</div>
<div className='sm:flex inline-block '>
  <lable>
  राशि :
  </lable>
  <span>₹ 500</span>
</div>
<div className='flex '>
 
  <div className='px-2'>
  <lable>भुगतान :
</lable>
  </div>

  <div>
    <button className='bg-[#0891b2]  hover:bg-[#141617] text-white px-6  rounded-lg py-1'>भुगतान करे
 </button>
  </div>
</div>

<div className='flex justify-center items-center px-4  '>
  <div >
   <h>
    आगे :
    </h> 
    
    <button  className='border border-1 text-center px-4 border-blue-500 text-blue-500 py-2 rounded-md'>  ← पिछला </button></div>
    
  <div className='px-6 py-2'>
    <button className='border border-1 text-center px-4 border-blue-500 text-blue-500 py-2 rounded-md'> → अगला</button></div>

  <div></div>
 
</div>
</form>
</div>  
</div>
         </div>   
        
    </div>
  )
}

export default Regsiter