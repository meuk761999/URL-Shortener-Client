import React from 'react'
import Image from 'next/image';
import media1 from '../../public/images/media-1.webp'
import media2 from '../../public/images/media-2.webp'
// import media3 from '../../public/images/media-3.mp4'

const AnimatedTextBanner = () => {
  return (
    <>
      <div className="relative py-20 px-12">
        <div className="relative flex justify-around py-4">
          <div className="text-9xl scale-110 font-bold text-gray-500 select-none">Software</div>
          <div className=" pl-12 h-28 overflow-hidden rounded-2xl flex justify-center content-center "><Image className='rounded-2xl' src={media1} alt='home'/></div>
        </div>
        <div className="relative flex justify-around py-4">
          <div className="h-28 overflow-hidden rounded-2xl flex justify-center content-center "><Image className='rounded-2xl' src={media2} alt='home'/></div>
          <div className=" px-12 text-9xl scale-110 font-bold text-gray-500 select-none">development</div>
        </div>
        <div className="relative flex justify-around py-4">
          <div className="text-9xl scale-110 font-bold text-gray-500 select-none">Company</div>
          <div className=" pl-12 h-28 overflow-hidden rounded-2xl flex justify-center content-center "><Image className='rounded-2xl' src={media1} alt='home'/></div>
          {/* <div className=" pl-12 h-28 overflow-hidden rounded-2xl flex justify-center content-center border-4 "><video src="../../public/images/media-3.mp4" autoplay muted loop playsinline alt="video of buildings"></video></div> */}
        </div>
      </div>
    </>
  );
}

export default AnimatedTextBanner;
