import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Dispatch } from 'redux'
import { IRootState } from '../../../store'
import { deleteProduct, getAllProduct, loadingProduct } from '../../../store/product/action'

const Products_admin = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const productState = useSelector(
    (state: IRootState) => state.products
  )
  const categoryState = useSelector(
    (state: IRootState) => state.categories
  )
  const handleDelete = (prd: any) => {
    dispatch(deleteProduct(prd))
  }
  
  useEffect(() => {
    dispatch(loadingProduct(true));
    dispatch(getAllProduct(),);
  }, [dispatch])
  if (!productState.isDataLoaded) {
    return <div>
      <div
        className="mt-8 inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status">
        <span
          className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
        >Loading...</span>
      </div>
    </div >
  }

  return <>

    <div className="flex space-x-[760px]">

      <div className=" mb-4 flex w-[280px] flex-wrap items-stretch">
        <select
          name="HeadlineAct"
          id="HeadlineAct"
          className="relative mt-4 block w-[1px] min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
        >
          <option value="">Danh mục sản phẩm</option>
          <option value="AK">Albert King</option>
          <option value="BG">Buddy Guy</option>
          <option value="EC">Eric Clapton</option>
        </select>
      </div>
      <div className=" mb-4 flex w-[280px] flex-wrap items-stretch">
        <div className="relative">
          <input
            className="mt-4 h-10 w-full rounded-full border-none bg-white pe-10 ps-4 text-sm shadow-sm sm:w-56"
            id="search"
            type="search"
            placeholder="Tìm kiếm"
          />

          <button
            type="button"
            className="mt-[6px] absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-gray-50 p-2 text-gray-600 transition hover:text-gray-700"
          >
            <span className="sr-only">Search</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>

      </div>
    </div>
    <div className="flex flex-col">
      <div className="overflow-x-auto lg:-ml-8">
        <div className="inline-block min-w-[100px] py-2 pl-8">
          <div className="overflow-hidden">
            <table className="w-full text-left text-sm font-light">
              <thead
                className="border-b bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600">
                <tr>
                  {/* <th scope="col" className="px-6 py-4">#</th> */}
                  <th scope="col" className="px-6 py-4">Tên sản phẩm</th>
                  <th scope="col" className="px-6 py-4">Giá tiền</th>
                  <th scope="col" className="px-6 py-4">Kích thước</th>
                  <th scope="col" className="px-6 py-4">Màu sắc</th>
                  <th scope="col" className="px-6 py-4">Ảnh sản phẩm</th>
                  <th scope="col" className="px-6 py-4">Mô tả</th>
                  <th scope="col" className="px-6 py-4">Loại sản phẩm</th>
                  <th scope="col" className="px-6 py-4">
                    <Link
                    className="inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
                      to="/admin/product_add"
                    >
                      Thêm
                    </Link></th>
                </tr>
              </thead>
              <tbody>
                {productState.products?.map((item, index) => {
                  return (
                    <tr key={index}
                      className="text-[12px] border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700">
                      {/* <td className="whitespace-normal px-6 py-4 text-[10px]">{item._id}</td> */}
                      <td className="whitespace-normal px-6 py-4">{item.name}</td>
                      <td className="whitespace-normal px-6 py-4">{item.price}</td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {item.size.map((sizeItem) => (
                          <span key={sizeItem} className="mr-2">
                            {sizeItem};<br />
                          </span>
                        ))}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {item.color.map((colorItem) => (
                          <span key={colorItem} className="mr-2">
                            {colorItem};<br />
                          </span>
                        ))}
                      </td>
                      <td className="whitespace-normal px-6 py-4">
                        {item.image.map((imgItem) => (
                          <img key={imgItem} className='max-w-[100px] py-[5px]' src={imgItem} alt="" />
                        ))}
                      </td>
                      <td className="whitespace-normal px-6 py-4">{item.desc}</td>
                      <td className="whitespace-normal px-6 py-4">
                        {categoryState.categories.find(category => category._id === item.id_cate)?.name}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">

                        <Link
                          className="ml-2 inline-block rounded border border-indigo-600 bg-indigo-600 px-2 py-1 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                          to={`/admin/product_upd/${item._id}`}
                        >
                          Sửa
                        </Link>
                        {/* Border */}

                        <button
                          className="ml-2 inline-block rounded border border-red-600 px-2 py-1 text-sm font-medium text-red-600 hover:bg-red-600 hover:text-white focus:outline-none focus:ring active:bg-red-500"
                          onClick={() => {
                            handleDelete(item);
                          }}
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

export default Products_admin