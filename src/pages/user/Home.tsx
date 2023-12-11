import React, { Dispatch, useEffect } from 'react'
import { Carousel } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../store';
import { getAllProduct } from '../../store/product/action';
import { formatPrice } from './Products';
import { getAllCategories } from '../../store/category/action';
import { Link } from 'react-router-dom';

const contentStyle: React.CSSProperties = {
    height: '560px',
    width: '2048px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

function getRandomSubarray<T>(arr: T[], size: number): T[] {
    const shuffled: T[] = [...arr];

    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled.slice(0, size);
}

const Home: React.FC = () => {
    const dispatch: Dispatch<any> = useDispatch();
    const productState = useSelector((state: IRootState) => state.products);
    const categoriyState = useSelector((state: IRootState) => state.categories)
    useEffect(() => {
        dispatch(getAllProduct());
        dispatch(getAllCategories());
    }, [dispatch]);

    const randomProducts = getRandomSubarray(productState.products, 4);
    const randomCategory = getRandomSubarray(categoriyState.categories, 4);
    return (
        <>
            <Carousel autoplay>
                <div>
                    <img
                        src="https://d3rzzb9pdm93i0.cloudfront.net/2021/12/1639717148b2164de23c9b008ed0160ba40db15e41.jpg"
                        style={contentStyle}
                        alt="Wild Landscape" />
                </div>
                <div>
                    <img
                        src="https://1.bp.blogspot.com/-m_J3SZyP0ls/YSiTHfyxs-I/AAAAAAAAROQ/RMSD9M8wxjE8yYzfwgDAS_F5A9aCQtebwCLcBGAsYHQ/s16000/banner%2B002.png"
                        style={contentStyle}
                        alt="Wild Landscape" />
                </div>
                <div>
                    <img
                        src="https://sieuthihangduconline.com/wp-content/uploads/2022/05/275674579_4803892353042231_8144421826019425412_n.jpg"
                        style={contentStyle}
                        alt="Wild Landscape" />
                </div>
            </Carousel>


            <Carousel className='Category'>
                <div className="container mx-auto p-8">

                    <h1 className="text-3xl font-semibold mb-6">Đồ Dùng Tiện Ích Nhà Bếp</h1>

                    <div className="grid grid-cols-4 gap-4">
                        {
                            randomCategory.map((item: any, index: any) => {
                                return (
                                    <div key={index} className="flex space-x-4">
                                        <div className="w-64 bg-white shadow rounded-lg p-4">
                                            <img className="w-full h-45 object-cover object-center mb-4" src={item.image} alt="Category 1" />
                                            <h2 className="text-xl font-semibold">{item.name}</h2>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div >
            </Carousel >


            <Carousel className='PRODUCTS'>
                <div className="container mx-auto mt-8">
                    <h1 className="text-3xl font-semibold mb-4">Đồ Dùng Bếp Nổi Bật </h1>
                    <div className="grid grid-cols-2 gap-8">
                        {
                            randomProducts.map((item: any, index) => {
                                return (
                                    <div key={index} className="border rounded-lg shadow-md p-4">
                                        <Link to={`/product/${item._id}`}>
                                            <img className="w-full h-100 object-cover object-center mb-4" src={item.image} alt="Product 1" />
                                            <h2 className="text-xl font-semibold">{item.name}</h2>
                                            <p className="text-gray-600 text-red-500  mb-2">
                                                {formatPrice(item.price)}</p>
                                            <div className="flex items-center">
                                                <p className="text-yellow-500 mr-1">⭐⭐</p>
                                                <p className="text-gray-600">4.5 (100 reviews)</p>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </Carousel>

        </>
    )
}

export default Home