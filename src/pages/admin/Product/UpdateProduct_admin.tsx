import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { IProducts, addProduct, getByIdProduct, updateProduct } from '../../../store/product/action';
import { getAllCategories } from '../../../store/category/action';
import { IRootState } from '../../../store';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateProduct_admin = () => {
    const [name, setName] = useState<string>('');
    const [price, setPrice] = useState<number>(0);
    const [size, setSize] = useState<string>('');
    const [color, setColor] = useState<string>('');
    const [image, setImage] = useState<string>('');
    const [desc, setDesc] = useState<string>('');
    const [id_cate, setId_cate] = useState<string>('');
    const [_id, setId] = useState<string>('');
    const dispatch: Dispatch<any> = useDispatch()
    const navigate = useNavigate()

    const productState = useSelector(
        (state: IRootState) => state.products
    )
    const categoriesState = useSelector(
        (state: IRootState) => state.categories
    )
    const { id } = useParams<string>()

    const handleLoadProduct = () => {
        const productWithIdTest = productState.products.find(product => product._id === id);
        if (productWithIdTest) {
            setName(productWithIdTest.name);
            setPrice(productWithIdTest.price);
            setSize(productWithIdTest.size.join('; ')); // Chuyển array thành string cách nhau bởi dấu chấm phẩy và khoảng trắng
            setColor(productWithIdTest.color.join('; '));
            setImage(productWithIdTest.image.join('; '));
            setDesc(productWithIdTest.desc);
            setId_cate(productWithIdTest.id_cate);
            setId(productWithIdTest._id); // Set giá trị _id cho trường _id của sản phẩm
        }
    }

    const handleSubmitAdd = (event: any) => {
        event.preventDefault();
        const newProduct: IProducts = {
            _id, // Thêm id nếu cần
            name,
            price,
            size: size.split(';').map((item) => item.trim()),
            color: color.split(';').map((item) => item.trim()),
            image: image.split(';').map((item) => item.trim()),
            desc,
            id_cate
        }

        dispatch(updateProduct(newProduct));
        navigate("/admin/products")
        alert("Sửa sản phẩm thành công!!!")
    };
    useEffect(() => {
        handleLoadProduct()
    }, [dispatch, id])
    useEffect(() => {
        dispatch(getAllCategories(),);
    }, [dispatch])
    return (
        <div>
            <div className="max-w-md mx-auto mt-8">
                <h2 className="text-2xl font-bold mb-4">Thêm Sản phẩm</h2>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block mb-2">Tên sản phẩm:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full p-2 border rounded"
                        />
                    </div>

                    <div>
                        <label htmlFor="price" className="block mb-2">Giá:</label>
                        <input
                            type="number"
                            id="price"
                            value={price}
                            onChange={(e: any) => setPrice(+e.target.value)}
                            min="0"

                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="size" className="block mb-2">Kích thước:</label>
                        <input
                            type="text"
                            id="size"
                            value={size}
                            onChange={(e) => setSize(e.target.value)}
                            className="w-full p-2 border rounded"
                        />
                    </div>

                    <div>
                        <label htmlFor="color" className="block mb-2">Màu sắc:</label>
                        <input
                            type="text"
                            id="color"
                            value={color}
                            onChange={(e) => setColor(e.target.value)}
                            className="w-full p-2 border rounded"
                        />
                    </div>

                    <div>
                        <label htmlFor="image" className="block mb-2">Ảnh:</label>
                        <input
                            type="text"
                            id="image"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="desc" className="block mb-2">Mô tả:</label>
                        <textarea
                            id="desc"
                            value={desc}
                            onChange={(e) => setDesc(e.target.value)}
                            rows={4}
                            className="w-full p-2 border rounded"
                        ></textarea>
                    </div>

                    <div>
                        <label htmlFor="category" className="block mb-2">Danh mục:</label>
                        <select
                            id="category"
                            value={id_cate}
                            onChange={(e) => setId_cate(e.target.value)}
                            className="w-full p-2 border rounded"
                        >
                            {
                                categoriesState.categories.map((cate, index) => {
                                    return <option key={index} value={cate._id}>{cate.name}</option>
                                })
                            }
                        </select>
                    </div>

                    <div>
                        <button type="submit" onClick={handleSubmitAdd} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                            Sửa sản phẩm
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UpdateProduct_admin