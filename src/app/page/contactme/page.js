import React from "react";

export default function page() {
  return (
    <React.Fragment>
      <div className="flex flex-col items-center justify-center w-full pt-[80px] pb-[80px] mt-4">
        <div className='flex flex-col items-center justify-center bg-[url("/offices.jpg")] bg-cover bg-center w-full h-[400px]'>
          <div className="flex flex-col items-center justify-center  w-full h-full bg-[#223740]/70 backdrop-brightness-50">
            <div className='text-center bg-[#48AFDE] py-[5px] px-[10px] tracking-wide uppercase font-semibold text-[20px] text-white rounded-lg'>
              <a className='cursor-pointer' href='#contact'>Contact Form</a>
            </div>
            <div className='mt-[10px]'>
              <h1 className='recoletaBold text-5xl text-[#48AFDE] p-2 text-center tracking-wide'>Hire Me</h1>
            </div>
            <div className='flex justify-center text-center mt-[10px] md:w-[700px]'>
              <p className='text-white font-[300] text-cener text-xl'>
              Looking for a reliable, professional full-stack web developer for your website or web application projects? Or perhaps you’d like to connect and collaborate on an exciting project?
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
