import { Menu } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"


function HeaderPortion() {
  return (
    <>
      <header className='flex justify-between bg-gray-400 text-white py-4 px-6 max-w-screen-2xl mx-auto'>
     <div>
        <h1 className='text-4xl font-bold text-white'>Obaid</h1>
     </div>
     <div>
        <ul className='hidden md:block'>
            <li className='flex space-x-6 text-white text-xl'>
                <Link href="/">Home</Link>
                <Link href="/">About</Link>
                <Link href="/">Contact</Link>
            </li>
        </ul>
     </div>
<div className='md:hidden '>

<Sheet>
  <SheetTrigger><Menu /></SheetTrigger>
  <SheetContent>
  <ul className='text-black  text-center py-5 text-xl'>
            <li className='py-3'>
                <Link href="/">Home</Link> </li>
                <li className='py-3'>

                <Link href="/">About</Link>
                </li>
                <li className='py-3'>

                <Link href="/">Contact</Link>
                </li>
           
        </ul>
  </SheetContent>
</Sheet>

</div>
      </header>
    </>
  )
}

export default HeaderPortion
