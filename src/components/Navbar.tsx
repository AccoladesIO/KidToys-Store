import logo from '@/assets/Logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { RiMenu3Fill } from 'react-icons/ri'

const Navbar = () => {
    return (
        <nav className='w-full bg-white h-[80px] flex items-center justify-between gap-2 p-4'>
            <div className='w-[100px] h-[60px] flex justify-center items-center relative'>
                <Image src={logo} alt='/' layout='fill' />
            </div>
            <div>
                <ul className='sm:flex items-center justify-between flex-row gap-2 cursor-pointer hidden'>
                    <li className='list-type-none text-[16px] font-light hover:font-semibold text-gray-500 p-2'>
                        <Link href='#new' >
                            New
                        </Link>
                    </li>
                    <li className='list-type-none text-[16px] font-light hover:font-semibold text-gray-500 p-2'>
                        <Link href={'/collections/'} >
                            Collection
                        </Link>
                    </li>
                    <li className='list-type-none text-[16px] font-light hover:font-semibold text-gray-500 p-2'>
                        <Link href={'/shop/'} >
                            Shop
                        </Link>
                    </li>
                </ul>
            </div>
            <div>
                <button className='bg-[#1E1E95] text-white text-[16px] p-[8px_18px] rounded-md'>Join us</button>
            </div>
            <div className='block sm:hidden z-10'>

                <RiMenu3Fill size={20} />

            </div>
        </nav>
    )
}

export default Navbar