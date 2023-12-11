import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { ICategory, addCategories } from '../../../store/category/action';
import { useNavigate } from 'react-router-dom';

const AddCategory = () => {
    const [name, setName] = useState<string>('');
    const [image, setImage] = useState<string>('');
    const [_id, setID] = useState<string>('');
    const navigate = useNavigate();
  
    const dispatch : Dispatch<any>=  useDispatch();
  
    const handleSubmitAdd = (event: any) => {
      event.preventDefault();
  
      // Tạo đối tượng danh mục mới từ các giá trị của state
      const newCategory : ICategory = {
        _id,
        name,
        image,
      };
      dispatch(addCategories(newCategory))
      navigate("/admin/category")
      console.log(newCategory);
      
      // Gọi action addCategory và truyền đối tượng danh mục mới vào để thêm vào Redux store
    //   dispatch(addCategory(newCategory));
  
      // Xóa dữ liệu sau khi thêm danh mục thành công
    //   setName('');
    //   setImage('');
    };
  
    return (
      <div className="max-w-md mx-auto mt-8">
        <h2 className="text-2xl font-bold mb-4">Thêm Danh mục</h2>
        <form onSubmit={handleSubmitAdd} className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-2">
              Tên danh mục:
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
  
          <div>
            <label htmlFor="image" className="block mb-2">
              Ảnh danh mục:
            </label>
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
            <button
              type="submit"
              onClick={handleSubmitAdd}
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            >
              Thêm danh mục
            </button>
          </div>
        </form>
      </div>
    );
}

export default AddCategory