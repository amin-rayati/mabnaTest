import React from 'react'
import { FiHome } from 'react-icons/fi'
import { IoIosArrowBack } from 'react-icons/io'
import { useLocation } from 'react-router-dom'

const Header = () => {
  const { pathname } = useLocation()
  const activePath = pathname.split('/')[1]

  return (
    <div className='Header'>
      <IoIosArrowBack size={20} style={{ color: '#7c7c7c' }} />
      <h2>{activePath === 'profile' ? 'پروفایل' : 'ثبت سفارش'}</h2>
      <FiHome size={20} style={{ color: '#7c7c7c' }} />
    </div>
  )
}

export default Header
