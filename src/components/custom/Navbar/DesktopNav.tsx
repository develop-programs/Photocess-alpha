import React from 'react'
import UserProfile from '@/components/custom/auth/UserProfile'

export default function DesktopNav() {
    return (
        <div className='w-full flex justify-between'>
            <div></div>
            <div>
                <UserProfile />
            </div>
        </div>
    )
}
