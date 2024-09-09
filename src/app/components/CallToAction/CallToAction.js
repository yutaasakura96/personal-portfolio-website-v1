import React, { useEffect, useState } from 'react';

export default function CallToAction() {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {
        isScrolled ? (
          <div className='bg-[#48afde] p-4 w-fit rounded-xl fixed bottom-8 right-8 cursor-pointer z-50 animate-bounce'
          onClick={()=>window.scrollTo(0,0)}
          >
            <svg
             xmlns="http://www.w3.org/2000/svg"
             fill="none"
             viewBox="0 0 24 24"
             strokeWidth={5}
             stroke="currentColor"
             className="w-6 h-6 text-white"
           >
<path
               strokeLinecap="round"
               strokeLinejoin="round"
               d="M4.5 15.75l7.5-7.5 7.5 7.5"
             />
</svg>
          </div>
        ) : (
          ''
        )
      }
    </div>
  )
}
