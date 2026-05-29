import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Sidebar = ({ expand, setExpand }) => {
    return (
        <div className={`flex flex-col justify-between bg-[#212327] pt-7 transition-all duration-300 z-50 max-md:absolute max-md:h-screen ${expand ? 'p-4 w-60' : 'md:w-20 w-0 max-md:overflow-hidden'}`}>
            <div>
                <div className={`flex ${expand ? "flex-row items-center justify-between" : "flex-col items-center gap-6"}`}>
                    <Image
                        className={expand ? "w-32" : "w-10"}
                        src={expand ? assets.logo_text : assets.logo_icon}
                        alt=''
                        style={expand ? { filter: "brightness(0) saturate(100%) invert(68.72%) sepia(30.1%) saturate(2882.6%) hue-rotate(167.07deg) brightness(97.71%) contrast(99.05%)" } : {}}
                    />

                    <div onClick={() => expand ? setExpand(false) : setExpand(true)}
                        className='group relative flex items-center justify-center hover:bg-gray-500/20 transition-all duration-300 h-9 w-9 aspect-square rounded-lg cursor-pointer'>
                        <Image src={assets.menu_icon} alt='' className='md:hidden' />
                        <Image src={expand ? assets.sidebar_close_icon : assets.sidebar_icon} alt='' className='hidden md:block w-7' />
                        <div className={`absolute w-max ${expand ? "left-1/2 -translate-x-1/2 top-12" : "-top-12 left-0"} opacity-0 group-hover:opacity-100 transition bg-black text-white text-sm px-3 py-2 rounded-lg shadow-lg pointer-events-none`}>
                            {expand ? 'Close sidebar' : 'Open Sidebar'}
                            <div className={`w-3 h-3 absolute bg-black rotate-45 ${expand ? "left-1/2 -top-1.5 -translate-x-1/2" : "left-4 -bottom-1.5"}`}></div>
                        </div>
                    </div>
                </div>

                <button className={`mt-8 flex items-center cursor-pointer transition-all duration-200 ${expand ? "bg-[#34353a] hover:bg-[#3e4046] rounded-full gap-2 py-2 px-4 w-full justify-center text-white" : "group relative h-9 w-9 mx-auto bg-[#34353a] hover:bg-[#3e4046] rounded-full justify-center"}`}>
                    <Image className={expand ? 'w-4.5' : 'w-5'} src={assets.chat_icon} alt='' />
                    <div className='absolute w-max -top-12 -right-12 opacity-0 group-hover:opacity-100 transition bg-black text-white text-sm px-3 py-2 rounded-lg shadow-lg pointer-events-none'>
                        New chat
                        <div className='w-3 h-3 absolute bg-black rotate-45 left-4 -bottom-1.5'></div>
                    </div>
                    {expand && <p className='text-white font-medium text-sm'>New chat</p>}
                </button>


                <div className={`mt-8 text-white/25 text-sm ${expand ? "block" : "hidden"}`}>
                    <p className='my-1'>Recents</p>

                </div>
            </div>
            <div>
                <div className={`flex items-center cursor-pointer group relative ${expand
                    ? "gap-2.5 text-white/80 text-sm p-2.5 border border-primary rounded-lg hover:bg-white/10 w-full"
                    : "h-10 w-16 mx-auto hover:bg-gray-500/30 rounded-lg"
                    }`}>
                    <Image className={expand ? "w-5" : "w-6.5 mx-auto"} src={expand ? assets.phone_icon : assets.phone_icon_dull} alt='' />
                    {expand && (
                        <>
                            <span>Get App</span>
                            <Image alt='' src={assets.new_icon} className='w-9' />
                        </>
                    )}
                    <div className={`absolute -top-60 pb-8 ${expand ? "left-1/2 -translate-x-1/2" : "-right-40"} opacity-0 group-hover:opacity-100 hidden group-hover:block transition`}>
                        <div className='relative w-max bg-black text-white text-sm p-3 rounded-lg shadow-lg'>
                            <Image src={assets.qrcode} alt='' className='w-44' />
                            <p> Scan to get Alvera App </p>
                            <div className={`w-3 h-3 absolute bg-black rotate-45 ${expand ? "right-1/2" : "left-4"} -bottom-1.5`}></div>
                        </div>
                    </div>
                </div>

                <div className={`flex items-center cursor-pointer mt-3 ${expand
                    ? 'hover:bg-white/10 rounded-lg p-2.5 gap-2.5 text-white/80 text-sm w-full'
                    : 'h-10 w-16 mx-auto hover:bg-gray-500/30 rounded-lg justify-center'}`}>
                    <Image src={assets.profile_icon} alt='' className={expand ? 'w-5' : 'w-7'} />
                    {expand && <span>My Profile</span>}
                </div>

            </div >
        </div >
    )
}

export default Sidebar