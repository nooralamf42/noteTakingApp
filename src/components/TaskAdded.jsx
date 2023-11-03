import React from 'react'
import { Link } from 'react-router-dom'

export default function TaskAdded() {
  return (
    <div className='mt-40 mx-auto w-fit text-center'>
        <h1 className='text-2xl font-semibold'>Task added successfully</h1>
        <div className='mt-8 flex gap-3'>
            <Link to={"/"} className="py-4 px-10 text-gray-600  hover:shadow-2xl border border-gray-200 w-fit bg-green-200 rounded-full shadow-inner">Views Tasks</Link>
            <Link to={"/add"} className="py-4 px-10 text-gray-600  hover:shadow-2xl border border-gray-200 w-fit bg-green-200 rounded-full shadow-inner">Create another task</Link>
        </div>
    </div>
  )
}
