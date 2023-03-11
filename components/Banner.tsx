import React from 'react'
import Image from "next/image";
import banner from "../public/images/Jeannie-Phan-Illustration-Branding-Airbnb-Go-Near.jpg";

function Banner() {
  return (
    <div className="box relative h-[300px] sm:h-[400px] lg:h-[500px]
    xl:h-[600px] 2xl:h-[700px]">
        <Image src={banner} alt="banner" fill style={{ objectFit: 'cover'}} />
    <div className="absolute top-1/2 w-full text-center">
      <p
        className="text-gray-900 font-bold mb-10 animate-bounce sm:text-lg"
        style={{ fontSize: "40px" }}
      >
        Not sure where to go? Prefect,
      </p>
    
    </div>

    </div>
  )
}

export default Banner