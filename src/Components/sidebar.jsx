import { useState } from 'react';
import { BookOpenCheck } from 'lucide-react';
import '../App.css'
const Sidebar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="flex">
            <div className={`bg-gray-300 h-screen p-5 pt-8 ${open ? "w-48" : "w-20"}  duration-300 relative `} onMouseOver={() => setOpen(true)}
                onMouseOut={() => setOpen(false)}>
                {/* <BsArrowLeftShort className={`bg-black text-dark-purple text-3xl rounded-full absolute -right-3 top-9 border border-dark-purple cursor-pointer ${!open && "rotate-180"} `} onClick={() => setOpen(!open)} /> */}
                <div className='flex gap-3 mb-4' >
                    <BookOpenCheck color='black' size={32} />
                    {open && <h3 className='text-black sedan-sc-regular text-2xl' >Courses</h3>}
                </div>
                <div className='flex gap-3 mb-4' >
                    <BookOpenCheck color='black' size={32} />
                    {open && <h3 className='text-black sedan-sc-regular text-2xl' >Courses</h3>}
                </div>
                <div className='flex gap-3 mb-4' >
                    <BookOpenCheck color='black' size={32} />
                    {open && <h3 className='text-black sedan-sc-regular text-2xl' >Courses</h3>}
                </div>
                <div className='flex gap-3 mb-4 ' >
                    <BookOpenCheck color='black' size={32} />
                    {open && <h3 className='text-black sedan-sc-regular text-2xl' >Courses</h3>}
                </div>
            </div>
            <div className="p-7">
                <h1 className="text-2xl font-semibold">Home Page</h1>
            </div>
        </div >
    );
};

export default Sidebar;

// import { useState } from 'react';
// import { BsArrowLeftShort } from "react-icons/bs";

// const Sidebar = () => {
//     return (
//         <div className="flex">
//             <div className={Obg - dark - purple h-screen p-5 pt-8 ${open ? "w-72" : "w-20"} duration-300 relative }>
//         </div>
//     );
// };