import React, { useState } from 'react'
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { ShieldCheck } from 'lucide-react';
import { MdAssessment } from "react-icons/md";
import { Laptop } from 'lucide-react';

function CourseDetails() {
    let notify = () => toast.warn(errors.email?.message || errors.password?.message);

    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = (data) => {
        // handleLogin(data);
        reset();
    };

    return (
        <div>
            <header className="text-3xl min-h-14  pl-10 py-2 text-black">E-Learning</header>
            <div className='flex flex-col gap-3 w-full  bg-db3 p-10'>
                <h1 className='text-5xl text-white mb-4'>Data Structures and Algorithm	</h1>
                <h2 className='text-2xl text-gold1 mb-3'>Master the art of efficient coding!	</h2>
                <p className='text-3xl text-white mb-5'>Language: English</p>
                <div className='flex flex-row gap-1 py-2 '>
                    <FaStar className='text-gold1 text-3xl' />
                    <FaStar className='text-gold1 text-3xl' />
                    <FaStar className='text-gold1 text-3xl' />
                    <FaStar className='text-gold1 text-3xl' />
                    <FaRegStar className='text-gold1 text-3xl' />
                    <span className='text-white text-3xl pl-3'>4.1</span>
                </div>
                <button
                    className={`
                    w-1/4
                    rounded-xl text-xl
                    font-semibold hover:text-white py-3 px-4 border hover:border-transparent transition duration-500 outline-none mt-5 mb-4 ${isLoading
                            ? "bg-green-400 hover:bg-green-600 text-white"
                            : "bg-transparent border-white border-2 hover:bg-green-400 text-white"
                        }`}
                    type="submit"
                    onClick={notify}
                    disabled={isLoading}
                >
                    {isLoading ? "Loading" : "Enroll Now"}

                </button>
            </div>
            <section>
                <div className='pl-16 py-16 '>
                    <h3 className='text-3xl pb-4 font-semibold'>Overview</h3>
                    <p className='tracking-widest text-xl'>
                        This course covers fundamental data structures and algorithms used in computer science.Students will learn how to design, analyze, and implement efficient algorithms.Practical problem-solving skills will be emphasized through coding exercises and projects.
                    </p>
                </div>
                <div className=' pl-16 pb-16 '>
                    <h3 className='text-3xl pb-4 font-semibold'>Projects</h3>
                    <ul class="list-none text-xl tracking-widest">
                        {/* {"Linked List Implementation","Linked List Implementation","Binary Tree Construction","Travel Planner Using Graphs"} */}
                        <div className='flex gap-3 pb-5'>
                            <ShieldCheck />
                            <li>Linked List Implementation</li>
                        </div>
                        <div className='flex gap-3 pb-5'>
                            <ShieldCheck />
                            <li>Binary Tree Construction</li>
                        </div>
                        <div className='flex gap-3 pb-5'>
                            <ShieldCheck />
                            <li>Travel Planner Using Graphs</li>
                        </div>
                    </ul>
                </div>
                <div className='pl-16 pb-16'>
                    <h3 className='text-3xl pb-4 font-semibold'>Assessments</h3>
                    <ul class="list-none text-xl tracking-widest">
                        {/* {"Regular coding assignments and quizzes","Midterm and final exams"} */}
                        <div className='flex gap-3 pb-5 m-0'>
                            <MdAssessment className='text-2xl ' />
                            <li>Regular coding assignments and quizzes</li>
                        </div>
                        <div className='flex gap-3 pb-5'>
                            <MdAssessment className='text-2xl ' />
                            <li>Midterm and final exams</li>
                        </div>
                    </ul>
                </div>
                <div className='pl-16 pb-16'>
                    <h3 className='text-3xl pb-4 font-semibold'>Syllabus</h3>
                    <ul class="  grid grid-cols-2 gap-2 grid-flow-row list-none text-xl tracking-widest">
                        {/* {"Introduction to DSA","Arrays and Strings","Linked Lists","Stacks and Queues","Trees and Binary Search Trees (BSTs)","Graphs and Graph Algorithms",
                        "Sorting Algorithms (BubbleSort, QuickSort, MergeSort)","Searching Algorithms (Linear Search, Binary Search)","Dynamic Programming","Hashing and Hash Tables","Advanced Topics (Red-Black Trees, AVL Trees, etc.)"} */}
                        <div className='flex gap-3 pb-5 m-0'>
                            <Laptop className='text-2xl ' />
                            <li>Introduction to DSA</li>
                        </div>
                        <div className='flex gap-3 pb-5'>
                            <Laptop className='text-2xl ' />
                            <li>Arrays and Strings</li>
                        </div>
                        <div className='flex gap-3 pb-5 m-0'>
                            <Laptop className='text-2xl ' />
                            <li>Linked Lists</li>
                        </div>
                        <div className='flex gap-3 pb-5'>
                            <Laptop className='text-2xl ' />
                            <li>Stacks and Queues</li>
                        </div>
                        <div className='flex gap-3 pb-5 m-0'>
                            <Laptop className='text-2xl ' />
                            <li>Trees and Binary Search Trees (BSTs)</li>
                        </div>
                        <div className='flex gap-3 pb-5'>
                            <Laptop className='text-2xl ' />
                            <li>Graphs and Graph Algorithms</li>
                        </div>
                        <div className='flex gap-3 pb-5 m-0'>
                            <Laptop className='text-2xl ' />
                            <li>Sorting Algorithms (BubbleSort, QuickSort, MergeSort)</li>
                        </div>
                        <div className='flex gap-3 pb-5'>
                            <Laptop className='text-2xl ' />
                            <li>Searching Algorithms (Linear Search, Binary Search)</li>
                        </div>
                        <div className='flex gap-3 pb-5 m-0'>
                            <Laptop className='text-2xl ' />
                            <li>Dynamic Programming</li>
                        </div>
                        <div className='flex gap-3 pb-5'>
                            <Laptop className='text-2xl ' />
                            <li>Hashing and Hash Tables</li>
                        </div>
                        <div className='flex gap-3 pb-5 m-0'>
                            <Laptop className='text-2xl ' />
                            <li>Advanced Topics (Red-Black Trees, AVL Trees, etc.)</li>
                        </div>
                    </ul>
                </div>
                <button
                    className={`
                    w-5/6
                    
                    rounded-xl text-xl
                    font-semibold hover:text-white py-3 px-4 border hover:border-transparent transition duration-500 outline-none mt-5 mb-14 ${isLoading
                            ? "bg-green-400 hover:bg-green-600 text-white"
                            : "bg-transparent border-black border-2 hover:bg-green-400 text-black"
                        }`}
                    type="submit"
                    onClick={notify}
                    disabled={isLoading}
                >
                    {isLoading ? "Loading" : "Enroll Now"}

                </button>

            </section>
        </div>
    )
}

export default CourseDetails