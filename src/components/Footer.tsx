import React from 'react'
import logo from '@/assets/Logo.svg'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='w-full flex flex-col items-center justify-center p-4'>
      <div className='w-full items-center flex-col justify-center text-center'>
        <h1 className='text-2xl'>Join Our Newsletter for Exclusive
          Updates and Offers
        </h1>
        <form action="" className='mt-4'>
          <input type="text" name="" id="" className='bg-blue-100 p-4 rounded-[8px_0_0_8px] ' placeholder='Email Address' />
          <input type="submit" value="Join" className='bg-[#1E1E95] rounded-lg ml-[-4px] p-4 text-white' />
        </form>
      </div>
      <div className='w-full  gap-8 grid sm:grid-cols-2 grid-cols-1 justify-center items-center mt-12 p-6'>
        <div className='w-full'>
          <div className='w-[100px] h-[60px] flex justify-center items-center relative'>
            <Image src={logo} alt='/' layout='fill' />
          </div>
          <h1 className='text-2xl'>We growing up your business with personal AI manager.
          </h1>
          <span className='text-gray-400 text-[16px]'>Kidstoy 2023</span>
        </div>
        <div className='w-full grid grid-cols-3 items-start justify-between'>
        <ul className='w-full font-light'>
          <li className='text-black font-bold'>Link</li>
          <li>Collections</li>
          <li>Shop</li>
        </ul>
        <ul className='w-full font-light'>
          <li className='text-black font-bold'>Resources</li>
          <li>Documentation</li>
          <li>Papers</li>
          <li>Press Conference</li>
        </ul>
        <ul className='w-full font-light'>
          <li className='text-black font-bold'>Legal</li>
          <li>Terms of Policy</li>
          <li>Privacy Policy</li>
        </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer