import React from 'react'
import { Link } from 'react-router-dom'

const HeaderAdmin = () => {
  return <>
    <header className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        
        <div className="flex items-center justify-end gap-4">
          
          <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl mr-[400px]">
            Xin Chào Admin!
          </h1>
          </div>

          <span
            aria-hidden="true"
            className="block h-6 w-px rounded-full bg-gray-200"
          ></span>

          <div className="block shrink-0">
            <img
              alt="Man"
              src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              className="h-10 w-10 rounded-full object-cover"
            />
          </div>
          <Link className='text-sm text-gray-500 underline' to=''>Đăng xuất</Link>
        </div>

        
      </div>
    </header>
  </>
}

export default HeaderAdmin