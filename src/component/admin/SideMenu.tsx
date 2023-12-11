import React from 'react'
import { Link } from 'react-router-dom'

const SideMenu = () => {
    return <>
        <div className="flex h-screen flex-col justify-between border-e bg-white">
            <div className="px-4 py-6">
                <span
                    className="ml-[44px] grid h-10 w-32 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600"
                >
                    <Link to='/admin'><img src="https://bizweb.dktcdn.net/100/353/817/themes/752158/assets/logo-web.jpg?1689733072184" alt="" /></Link>
                </span>

                <ul className="mt-6 space-y-1">
                    <li>
                        <Link
                            to="/admin"
                            className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
                            Bảng Điều Khiển
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="products"
                            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                            Sản Phẩm
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="category"
                            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                            Danh Mục Sản Phẩm
                        </Link>
                    </li>
                    <li>
                        <Link
                            to=""
                            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                            Đơn Hàng
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </>
}

export default SideMenu