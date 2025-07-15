'use client'
import { Button } from "@/components/ui/button";
import { UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

function Header()
 {
    const {user}=useUser();
    return(
        <div className='px-10 lg:px-32 xl:px-48 2xl:px-56 p-4 flex justify-between items-center shadow-sm '>
           <Image src={'/logo.png'} alt='logo' width={50} height={60}/>
           <div className='flex gap-3 items-center'>
            {user?<Button >Dashboard</Button>:
            <Button>Get Start</Button>
            }
           
           <UserButton/>
           </div>
        </div>
    )
}

export default Header
