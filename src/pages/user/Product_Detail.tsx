
import { Dispatch, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IRootState } from '../../store'
import { useParams } from 'react-router-dom'
import { getByIdProduct } from '../../store/product/action'
const Product_Detail = () => {
    const dispatch: Dispatch<any> = useDispatch()
    const productState = useSelector(
        (state: IRootState) => state.products
    )
    const { id } = useParams<string>()
    useEffect(() => {
        dispatch(getByIdProduct(id),);
    }, [dispatch, id])
    const productDetail: any = productState.products

   
   
    return (<div>
        <section>
            <div className="relative mx-auto max-w-screen-xl px-4 py-8">
                <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
                        <img
                            alt="Les Paul"
                            src={productDetail?.image}
                            className="aspect-square w-full rounded-xl object-cover"
                        />

                        <div className="grid grid-cols-2 gap-4 lg:mt-4">
                            {productDetail?.image?.map((itemImage: any, index: any) => {
                                return (
                                    <img key={index}
                                        // alt="Les Paul"
                                        src={itemImage}
                                        className="aspect-square w-full rounded-xl object-cover"
                                    />
                                )
                            })}
                        </div>
                    </div>

                    <div className="sticky top-0">

                        <div className="mt-8 flex justify-between">
                            <div className="max-w-[35ch] space-y-2">
                                <h1 className="text-xl font-bold sm:text-2xl">
                                    {productDetail?.name}
                                </h1>
                                <div className="-ms-0.5 flex">
                                    <svg
                                        className="h-5 w-5 text-yellow-400"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                        />
                                    </svg>

                                    <svg
                                        className="h-5 w-5 text-yellow-400"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                        />
                                    </svg>

                                    <svg
                                        className="h-5 w-5 text-yellow-400"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                        />
                                    </svg>

                                    <svg
                                        className="h-5 w-5 text-yellow-400"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                        />
                                    </svg>

                                    <svg
                                        className="h-5 w-5 text-gray-200"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                        />
                                    </svg>
                                </div>
                            </div>

                            <p className="text-lg font-bold">{productDetail?.price && productDetail?.price.toLocaleString()}₫</p>
                        </div>

                        <div className="mt-4">
                            <div className="prose max-w-none">
                                <p>
                                    {productDetail?.desc}
                                </p>
                            </div>
                        </div>

                        <form className="mt-8">
                            <fieldset>
                                <legend className="mb-1 text-sm font-medium">Màu sắc</legend>

                                <div className="flex flex-wrap gap-1">
                                    {
                                        productDetail?.color?.map((itemColor: any, index: any) => {
                                            return (
                                                <label htmlFor={itemColor} className="cursor-pointer" key={index} >
                                                    <input 
                                                        type="radio"
                                                        name="color"
                                                        id={itemColor}
                                                        className="peer sr-only"
                                                    />

                                                    <span
                                                        className="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white"
                                                    >
                                                        {itemColor}
                                                    </span>
                                                </label>
                                            )
                                        })
                                    }
                                </div>
                            </fieldset>

                            <fieldset className="mt-4">
                                <legend className="mb-1 text-sm font-medium">Kích thước</legend>

                                <div className="flex flex-wrap gap-1">
                                    {
                                        productDetail?.size?.map((itemSize: any, index : any) => {
                                            return (
                                                <label htmlFor={itemSize} className="cursor-pointer" key={index}>
                                                    <input
                                                        type="radio"
                                                        name="size"
                                                        id={itemSize}
                                                        className="peer sr-only"
                                                    />

                                                    <span
                                                        className="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white"
                                                    >
                                                        {itemSize}
                                                    </span>
                                                </label>

                                            )
                                        })
                                    }
                                </div>
                            </fieldset>

                            <div className="mt-8 flex gap-4">
                                <button
                                    type="submit"
                                    className="block rounded bg-green-600 px-5 py-3 text-xs font-medium text-white hover:bg-green-500"
                                >
                                    Thêm vào giỏ hàng
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>)

}

export default Product_Detail