import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { ICategory,  updateCategories } from '../../../store/category/action';
import { Dispatch } from 'redux';
import { IRootState } from '../../../store';

const UpdateCategory = () => {
  const dispatch : Dispatch<any>=  useDispatch();
  const [name, setName] = useState<string>('');
  const [image, setImage] = useState<string>('');
  const [_id, setId] = useState<string>('');
  const { id } = useParams<string>()
  const navigate = useNavigate()
  const categoriesState = useSelector(
    (state : IRootState) => state.categories
  )

  const handleUpdate = (e: any) => {
    const cateId = categoriesState.categories.find(category => category._id === id);
    if(cateId){
      setName(cateId.name)
      setImage(cateId.image)
      setId(cateId._id)
    }
  };
  const handleSubmitUpdate = (e: any) =>{
    e.preventDefault();
    const  newCategories : ICategory ={
      _id,
      name,
      image
    }
    dispatch((updateCategories(newCategories)));
    // alert("update danh mục thành công !")
    navigate("/admin/category")
  };
  useEffect(() =>{
    handleUpdate(id)
  }, [dispatch, id])
  

  

  return (
    <div className="max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Sửa Danh mục</h2>
      <form onSubmit={handleSubmitUpdate} className="space-y-4">
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
            onClick={handleSubmitUpdate}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          >
            Thêm danh mục
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateCategory;
