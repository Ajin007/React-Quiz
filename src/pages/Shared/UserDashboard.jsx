import React from 'react'
import UserTitlebar from '../../components/Shared/UserTitlebar'

const UserDashboard = () => {
    return (
        <>
            <UserTitlebar Title='Dashboard' />
            <div className='h-[90vh] flex justify-start items-center pl-4 shadow-sm shadow-slate-100 w-full'>
                User Dashboard
            </div>
        </>
    )
}

export default UserDashboard