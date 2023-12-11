import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { IRootState } from '../../../store';
import { Link } from 'react-router-dom'
import { ICategory, deleteCategories, getAllCategories } from '../../../store/category/action'

const Category_admin = () => {
    const dispatch: Dispatch<any> = useDispatch();
    const categoriesState = useSelector(
        (state: IRootState) => state.categories
    )

    const handleDelete = (sv: any) => {
        dispatch(deleteCategories(sv))
    }
    useEffect(() => {
        dispatch(getAllCategories(),)
    }, [dispatch])
    return <>

        <div className="flex flex-col w-full">
            <div className="overflow-x-auto lg:-ml-8">
                <div className="inline-block min-w-full py-2 pl-8">
                    <div className="overflow-hidden">
                        <table className="min-w-full text-left text-sm font-light">
                            <thead
                                className="border-b bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600">
                                <tr>
                                    <th scope="col" className="px-6 py-4">ID</th>
                                    <th scope="col" className="px-6 py-4">Tên danh mục</th>
                                    <th scope="col" className="px-6 py-4">Image</th>
                                    <th><Link className="ml-6 inline-block rounded border border-indigo-600 bg-indigo-600 px-2 py-1 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                                        to="/admin/category/add">Thêm</Link></th>
                                </tr>
                            </thead>
                            <tbody>
                                {categoriesState.categories?.map((item, index) => {
                                    return (
                                        <tr key={index}
                                            className="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700">
                                            <td className="whitespace-nowrap px-6 py-4 font-medium">{item._id}</td>
                                            <td className="whitespace-nowrap px-6 py-4">{item.name}</td>
                                            <td className="whitespace-nowrap px-6 py-4"><img src={item.image} className='max-w-[100px]' alt="" /></td>
                                            <td className="whitespace-nowrap px-6 py-4">

                                                <Link
                                                    className="ml-2 inline-block rounded border border-indigo-600 bg-indigo-600 px-2 py-1 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                                                    to={`/admin/category/edit/${item._id}`}
                                                >
                                                    Sửa
                                                </Link>

                                                {/* Border */}

                                                <button
                                                    className="ml-2 inline-block rounded border border-red-600 px-2 py-1 text-sm font-medium text-red-600 hover:bg-red-600 hover:text-white focus:outline-none focus:ring active:bg-red-500"
                                                    onClick={(e) => handleDelete(item)}
                                                >
                                                    Xóa
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Category_admin