import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { IUser, signup } from '../../store/user/action';
import { Dispatch } from 'redux';
const Register = () => {
  const dispatch: Dispatch<any> = useDispatch()
  const [_id, set_id] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')
  const [token, SetToken] = useState<string>('')
  const handleSubmit = () => {
    const newUser: IUser = {
      _id,
      name,
      email,
      password,
      confirmPassword
    }
    dispatch(signup(newUser))
    alert("Đăng ký thành công!!!");
  }
    return (
      <div className="max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Đăng Ký Tài Khoản</h2>
      <p className="text-gray-700 mb-4">Vui lòng nhập đầy đủ các thông tin sau:</p>
      <p className="text-gray-700 mb-4">Lưu ý: Vui lòng dùng Email thật của quý khách</p>

      <form>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="fullname">Họ và Tên</label>
          <input onChange={(e) => setName(e.target.value)} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Họ và Tên" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">Email</label>
          <input onChange={(e) => setEmail(e.target.value)} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" placeholder="Email" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="password">Mật Khẩu</label>
          <input onChange={(e) => setPassword(e.target.value)} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" placeholder="Mật Khẩu" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="password">Nhập Lại Mật Khẩu</label>
          <input onChange={(e) => setConfirmPassword(e.target.value)} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" placeholder="Nhập Lại Mật Khẩu" />
        </div>
        <button onClick={handleSubmit} className="bg-orange-500 text-white font-bold py-2 px-4 roundedgroup relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Tạo Tài Khoản</button>
      </form>
    <p className="mt-8 text-gray-600">Bạn đã có tài khoản?  <Link to="/login"  className="text-blue-500 hover:text-blue-700">Đăng nhập</Link></p>
    </div>
      );
}


export default Register