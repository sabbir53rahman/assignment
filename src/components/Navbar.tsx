'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ArrowRight } from 'lucide-react'
import ButtonPrimary from './dynamic/ButtonPrimary' 

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#' },
  { name: 'Portfolio', href: '#' },
  { name: 'Blog', href: '#' },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full px-4 md:px-8 lg:px-[50px] py-4 bg-[#00000003] relative z-50">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-[20px] md:text-[25px] lg:text-[34px] font-extrabold tracking-tight">
          <span className="text-black">DEVLOP.</span>
          <span className="text-black">ME</span>
        </div>

        {/* Menu Toggle Button (Mobile Only) */}
        <ButtonPrimary
          className="lg:hidden bg-inherit hover:shadow-none"
          onClick={() => setOpen(!open)}
          icon={open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          label=""
          borderColor="border-white"
            textColor="text-black"
        />

        {/* Navigation Links */}
        <div
          className={`${
            open ? 'flex' : 'hidden'
          } flex-col lg:flex lg:flex-row items-center gap-6 lg:gap-8 absolute lg:static top-full left-0 right-0 px-4 py-6 lg:p-0 bg-white lg:bg-transparent transition-all duration-300 ease-in-out`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[16px] text-black hover:text-gray-700 transition"
            >
              {link.name}
            </Link>
          ))}

          <ButtonPrimary
            label="Start Project"
            icon={<ArrowRight className="w-4 h-4" />}
            borderColor="border-black"
            textColor="text-black"
          />
        </div>
      </div>
    </header>
  )
}

export default Navbar
