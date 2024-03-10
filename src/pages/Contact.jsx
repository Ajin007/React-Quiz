import React from 'react'
import PageSection from '../components/public/PageSection'
import { ContactConfig } from '../configs/Config'
import { Mail, Map, Phone } from 'lucide-react'
const Contact = () => {
    return (
        <>

            <PageSection Title={"Contact Us !"} Desc={"Feel free to ask Questions "} />
            <div className='h-[70vh] w-screen flex items-center justify-center flex-row'>
                <div className='w-1/4 flex flex-col h-[60vh] justify-evenly items-center '>
                    <div className='h-1/4 w-3/4 bg-orange-100/10 hover:bg-orange-500/10 flex flex-col justify-center items-center p-2 rounded-md shadow-md gap-2'>
                        <p className='font-bold text-orange-500'>
                            <Mail size={32} />
                        </p>
                        <h3 className='font-semibold '>
                            {ContactConfig.email}
                        </h3>
                    </div>
                    <div className='h-1/4 w-3/4 bg-orange-100/10 hover:bg-orange-500/10 flex flex-col justify-center items-center p-2 rounded-md shadow-md gap-2'>
                        <p className='font-bold text-orange-500'>
                            <Phone size={32} />
                        </p>
                        <h3 className='font-semibold '>
                            {ContactConfig.phone}
                        </h3>
                    </div>
                    <div className='h-1/4 w-3/4 bg-orange-100/10 hover:bg-orange-500/10 flex flex-col justify-center items-center p-2 rounded-md shadow-md gap-2'>
                        <p className='font-bold text-orange-500'>
                            <Map size={32} />
                        </p>
                        <h3 className='font-semibold '>
                            {ContactConfig.address}
                        </h3>
                    </div>
                </div>
                <div className='w-2/4 flex flex-col h-max justify-center items-center'>
                    <form className='w-3/4 flex justify-between items-center flex-col gap-4'>
                        <input type="text" name="" id="" placeholder='Name' className='bg-slate-100/80 outline-none border-2 border-transparent focus:border-2 focus:border-orange-300 rounded-sm w-[80%] text-black placeholder:text-black p-2 shadow-sm' />
                        <input type="email" name="" id="" placeholder='Email' className='bg-slate-100/80  outline-none border-2 border-transparent focus:border-2 focus:border-orange-300 rounded-sm w-[80%] text-black placeholder:text-black p-2 shadow-sm' />
                        <input type="number" name="" id="" placeholder='Phone' className='bg-slate-100/80  outline-none border-2 border-transparent focus:border-2 focus:border-orange-300 rounded-sm w-[80%] text-black placeholder:text-black p-2 shadow-sm' />
                        <textarea name="" id="" cols="30" rows="10" placeholder='Query' className='bg-slate-100/80  outline-none border-2 border-transparent focus:border-2 focus:border-orange-300 rounded-sm w-[80%] text-black placeholder:text-black p-2 shadow-sm' />
                        <button type="submit" className='w-[80%] bg-orange-500 text-white p-2 rounded-sm font-bold mt-4'>Send</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact