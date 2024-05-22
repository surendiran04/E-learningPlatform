import React from 'react'
import AccordianVideo from "../../Components/AccordianVideo"

function Class() {
    const submit = (e) => {
        console.log(e.target.innerHTML);
    };
    const totalClass = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const attendance = 90;
    return (
        <div className='grid grid-cols-4 p-4 gap-8'>
            <div className='col-span-3 p-10 border-gray-900 border-2'>
                <div className=' mb-4 '>
                    <div className="text-3xl font-semibold ">
                        Intro to HTML
                    </div>
                    <p>1/1/2024</p>
                </div>
                <div className='pl-4'>
                    <ul className='list-decimal text-xl'>
                        <li>Header</li>
                        <li>Footer</li>
                    </ul>
                </div>
            </div>
            <div className=' h-80 py-7 '>
                <h2 className='text-3xl font-semibold  mb-4'>Session Roadmap</h2>
                <div className='grid grid-cols-3  h-full place-content-evenly pl-8 border-black border-2'>
                    {
                        totalClass.map((i) => (
                            <button className='bg-white rounded-full w-12 h-12 border-black border-2' key={i} onClick={submit} >{i}</button>
                        ))
                    }
                </div>
            </div>
            <div className=' col-span-3 w-full p-10 border-black border-2'>
                <h2 className='text-3xl font-semibold  mb-4'>Content Link:</h2>
                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" className='underline text-xl text-blue-700'>Intro to HTML</a>
            </div>
            <div className='h-40 p-2 border-black border-2'>
                <h2 className='text-3xl font-semibold  mb-4'>Attendance</h2>
                <div className='flex items-center justify-center gap-4'>
                    <meter value={attendance} min="0" max="100" className='text-4xl '></meter>
                    <span className={`text-xl font-bold ${attendance > 75 ? "text-green-900" : "text-r"}`}>{attendance}%</span>
                </div>
            </div>
            <div className='col-span-4 w-full p-8 border-black border-2'>
                <h2 className='text-3xl font-semibold  mb-4'>Tutorial Link:</h2>
                <AccordianVideo />
            </div>

        </div>
    )
}

export default Class