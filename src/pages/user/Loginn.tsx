import React from 'react'
import { Link } from 'react-router-dom'

const Loginn = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">Chào mừng đến với GiadungPlus</h2>
                </div>
                <form className="mt-8 space-y-6" action="#" method="POST">
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="email-address" className="sr-only">Email</label>
                            <input id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email" />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">Mật Khẩu</label>
                            <input id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="*******" />
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="text-sm ml-[220px]">
                            <label htmlFor="">Bạn chưa có tài khoản? </label>
                            <Link to={`/register`} className="font-medium text-indigo-600 hover:text-indigo-500 underline">
                                đăng ký
                            </Link>
                        </div>
                    </div>

                    <div>
                        <button type="submit" className="bg-orange-500 text-white font-bold py-2 px-4 roundedgroup relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Sign in
                        </button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default Loginn