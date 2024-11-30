import React from 'react'
import UserProfile from '@/components/custom/auth/UserProfile'
import Image from 'next/image'

export default function DesktopNav() {
    return (
        <div className='w-full flex justify-between p-4'>
            <div>
                <div className='flex items-center gap-2'>
                    <Image src='/Logo.svg' width={100} height={100} alt='Project Logo' className='size-12' />
                    <span className='text-3xl font-bold'>Photocess</span>
                </div>
                <div></div>
            </div>
            <div>
                <UserProfile />
            </div>
        </div>
    )
}
