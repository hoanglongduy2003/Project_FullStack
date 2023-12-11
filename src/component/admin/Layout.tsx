import React from 'react'
import HeaderAdmin from './Header'
import { Outlet } from 'react-router-dom'
import FooterAdmin from './Footer'
import SideMenu from './SideMenu'

const LayoutAdmin = () => {
    return <>
        <div className='flex flex-row'>
            <div className='w-2/12'>
                <SideMenu></SideMenu>
            </div>
            <div className='w-full'>
                <HeaderAdmin></HeaderAdmin>
                <Outlet></Outlet>
            </div>
        </div>

        <FooterAdmin></FooterAdmin>
    </>
}

export default LayoutAdmin