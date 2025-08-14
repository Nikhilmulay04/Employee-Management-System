import React from 'react'

const FailedTask = () => {
    return (
        <div className=' flex-shrink-0 h-full w-[300px] p-5 bg-yellow-400 rounded-xl'>
            <div className=' flex justify-between items-center' >
                <h3 className=' text-sm bg-red-600 px-3 py-1 rounded'>High</h3>
                <h4 className=' text-sm '>10 aug 2025</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Complete EMS Project</h2>
            <p className=' text-sm mt-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A rerum mollitia quod nobis quia adipisci!
            </p>
            <div className=' w-full flex justify-center mt-2'>
                <button className=' w-full bg-red-500 py-1 px-2 text-sm rounded'>Failed</button>
            </div>
        </div>
    )
}

export default FailedTask
