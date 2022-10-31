import React from 'react'
import { FaRegUserCircle } from 'react-icons/fa'
import { HiOutlineClock } from 'react-icons/hi'
import { GoChecklist } from 'react-icons/go'
import { BiMessageDetail } from 'react-icons/bi'
import { useLocation } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'

const Footer = () => {
  const { pathname } = useLocation()
  const activePath = pathname.split('/')[1]
  return (
    <div className='Footer'>
      <LinkContainer to={`/profile`} style={{ display: 'inline-grid' }}>
        <div>
          <FaRegUserCircle
            size={35}
            style={
              activePath === 'profile'
                ? { color: 'black', margin: 'auto' }
                : { color: 'white', margin: 'auto' }
            }
          />
          <span
            style={
              activePath === 'profile'
                ? { color: 'black', fontSize: '10px', marginTop: '5px' }
                : { color: 'white', fontSize: '10px', marginTop: '5px' }
            }
          >
            پروفایل
          </span>
        </div>
      </LinkContainer>
      <LinkContainer to={`/OrderProduct`} style={{ display: 'inline-grid' }}>
        <div>
          <GoChecklist
            size={35}
            style={
              activePath === 'OrderProduct'
                ? { color: 'black', margin: 'auto' }
                : { color: 'white', margin: 'auto' }
            }
          />
          <span
            style={
              activePath === 'OrderProduct'
                ? { color: 'black', fontSize: '10px', marginTop: '5px' }
                : { color: 'white', fontSize: '10px', marginTop: '5px' }
            }
          >
            سفارش ها
          </span>
        </div>
      </LinkContainer>
      <div style={{ display: 'inline-grid' }}>
        <HiOutlineClock size={35} style={{ color: 'white', margin: 'auto' }} />
        <span style={{ color: 'white', fontSize: '10px', marginTop: '5px' }}>
          فعالیت های اخیر
        </span>
      </div>
      <div style={{ display: 'inline-grid' }}>
        <BiMessageDetail size={35} style={{ color: 'white', margin: 'auto' }} />
        <span style={{ color: 'white', fontSize: '10px', marginTop: '5px' }}>
          پیام ها
        </span>
      </div>
    </div>
  )
}

export default Footer
