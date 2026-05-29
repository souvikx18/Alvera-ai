import React from 'react'

const promptbox = () => {
    return (
        <form className={`w-full ${false ? "max-w-3xl" : "max-w-2xl"} bg-[#404045] p-4 rounded-3xl mt-4 transition-all`}>
            <textarea
                className='outline-none w-full resize-none overflow-hidden break-words bg-transparent'
                rows={2}
                placeholder='Message Alvera' required />

            <div>
                <div>
                    <p>
                        <Image className='h-5' src={assets.deepthink_icon.svg} alt="" />
                    </p>
                </div>
            </div>
        </form>
    )
}

export default promptbox