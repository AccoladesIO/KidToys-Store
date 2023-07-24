import Image from 'next/image'
import React from 'react'
import rectangle1 from '@/assets/Rectangle1.svg'
import rectangle2 from '@/assets/Rectangle2.svg'


const Hero = () => {
    return (
        <div className='bg-[#1E1E95] w-full h-[80vh] rounded-lg grid md:grid-cols-2 grid-cols-1'>
            <div className='bg-red w-full h-full flex items-start justify-center flex-col p-8 ml-4'>
                <h2 className='text-5xl text-white p-2 font-semibold'>
                    Let Your Imagination Shine
                    and Have a Blast with Fun
                    Playtime for Kids
                </h2>
                <p className='border border-l-[4px] border-r-0 border-t-0 border-b-0 border-yellow-400 rounded-sm p-4 text-white text-[20px]'>
                    if you are looking for latest toys for your
                    kids in the new comic space.
                </p>
                <button className='p-4 border border-l-[1.5px] border-r-0 border-t-0 border-b-0 border-yellow-400 rounded-sm text-white text-[20px] mt-[-4px]'>
                    View new arrivals &rarr;
                </button>
            </div>
            <div className='bg-red w-full h-full gap-2 relative hidden md:block'>
                <Image src={rectangle1} alt='/'
                width={300}
                className='rounded-lg items-end absolute top-8 right-4'
                />
                <Image src={rectangle2} alt='/'
                width={300}
                className='rounded-lg items-start absolute bottom-8 left-4'
                />
            </div>
        </div>
    )
}

export default Hero