import Image from 'next/image'
import React from 'react'

export default function ForthHero() {
  return (
    <div className="min-h-screen bg-black text-white -mt-96 p-2 flex flex-col justify-center items-center">
      <div className="w-full -mt-80 max-w-[1000px] grid gap-6 md:grid-cols-4 text-center">
        <div className="p-6 bg-white shadow-md rounded-md text-black">
          <Image src="/4.jpeg" alt="Pizza" width={104} height={60} className="mb-4 h-60 w-52 rounded-md" />
          <div className="text-2xl font-bold">Burger</div>
        </div>
        <div className="p-6 bg-white shadow-md rounded-md text-black">
          <Image src="/18.jpeg" alt="Another" width={104} height={60} className="mb-4 h-60 w-52 rounded-md" />
          <div className="text-2xl font-bold">Burger</div>
        </div>
        <div className="p-6  bg-white shadow-md rounded-md text-black">
          <Image src="/18.jpeg" alt="Yet Another" width={104} height={60} className="mb-4 h-60 w-52 rounded-md" />
          <div className="text-2xl font-bold">Burger</div>
        </div>
        <div className="p-6 bg-white shadow-md rounded-md text-black">
          <Image src="/3.jpeg" alt="Final" width={104} height={60} className="mb-4 h-60 w-52 rounded-md" />
          <div className="text-2xl font-bold">Final Dish</div>
        </div>
      </div>
    </div>
  )
}
