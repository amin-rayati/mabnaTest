import * as React from 'react'
import { Component, useState } from 'react'
import { IoIosArrowDropdownCircle } from 'react-icons/io'
import { FaUserCircle, FaCamera } from 'react-icons/fa'
const OrderProduct = () => {
  const [state, setState] = useState(false)
  return (
    <div className='ProBody'>
      <div style={{ textAlign: 'center' }}>
        <FaUserCircle size={70} style={{ color: '#dedede' }} />
        <FaCamera
          style={{
            color: '#7c7c7c',
            position: 'relative',
            top: '20px',
            right: '70px',
          }}
        />
      </div>
      <div className='SmallPart '>
        <div className='row'>
          <div
            onClick={() => setState(false)}
            className='col-lg-6 col-md-6 col-sm-6 col-6 my-2'
            style={
              state
                ? {
                    textAlign: 'center',
                    background: 'white',
                    color: '#7c7c7c',
                    padding: '5px 30px',
                    borderRadius: '15px',
                  }
                : {
                    textAlign: 'center',
                    background: '#7c7c7c',
                    color: 'white',
                    padding: '5px 30px',
                    borderRadius: '15px',
                  }
            }
          >
            <h5
              style={{ margin: '0px', fontSize: '15px', fontWeight: 'bolder' }}
            >
              نماینده شرکت خارجی
            </h5>
          </div>
          <div
            onClick={() => setState(true)}
            className='col-lg-6 col-md-6 col-sm-6 col-6 my-2'
            style={
              state
                ? {
                    textAlign: 'center',
                    background: '#7c7c7c',
                    color: 'white',
                    padding: '5px 30px',
                    borderRadius: '15px',
                  }
                : {
                    textAlign: 'center',
                    background: 'white',
                    color: '#7c7c7c',
                    padding: '5px 30px',
                    borderRadius: '15px',
                  }
            }
          >
            <h5
              style={{ margin: '0px', fontSize: '15px', fontWeight: 'bolder' }}
            >
              شرکت ایرانی
            </h5>
          </div>
        </div>
      </div>

      <div
        className='Parts'
        style={{ display: 'flex', justifyContent: 'right' }}
      >
        <h5 style={{ margin: '0px', fontSize: '15px', fontWeight: 'bolder' }}>
          نام شرکت
        </h5>
      </div>
      <div
        className='Parts'
        style={{ display: 'flex', justifyContent: 'right' }}
      >
        <h5 style={{ margin: '0px', fontSize: '15px', fontWeight: 'bolder' }}>
          شناسه ملی شرکت
        </h5>
      </div>
      <div
        className='Parts'
        style={{ display: 'flex', justifyContent: 'right' }}
      >
        <h5 style={{ margin: '0px', fontSize: '15px', fontWeight: 'bolder' }}>
          شماره ثبت شرکت
        </h5>
      </div>
      <div
        className='Parts'
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <IoIosArrowDropdownCircle size={20} />
        <h5 style={{ margin: '0px', fontSize: '15px', fontWeight: 'bolder' }}>
          شماره تماس
        </h5>
      </div>
      <div
        className='Parts'
        style={{ display: 'flex', justifyContent: 'right' }}
      >
        <h5 style={{ margin: '0px', fontSize: '15px', fontWeight: 'bolder' }}>
          شماره فکس
        </h5>
      </div>
      <div
        className='Parts'
        style={{ display: 'flex', justifyContent: 'right' }}
      >
        <h5 style={{ margin: '0px', fontSize: '15px', fontWeight: 'bolder' }}>
          نشانی اینترنتی
        </h5>
      </div>
      <div
        className='Parts'
        style={{ display: 'flex', justifyContent: 'right' }}
      >
        <h5 style={{ margin: '0px', fontSize: '15px', fontWeight: 'bolder' }}>
          آدرس
        </h5>
      </div>
      <div
        className='Parts'
        style={{ display: 'flex', justifyContent: 'right' }}
      >
        <h5 style={{ margin: '0px', fontSize: '15px', fontWeight: 'bolder' }}>
          نام و نام خانوادگی مدیر عامل
        </h5>
      </div>
      <div
        className='Parts'
        style={{ display: 'flex', justifyContent: 'right' }}
      >
        <h5 style={{ margin: '0px', fontSize: '15px', fontWeight: 'bolder' }}>
          نام و نام خانوادگی نماینده
        </h5>
      </div>
      <div
        className='Parts'
        style={{ display: 'flex', justifyContent: 'right' }}
      >
        <h5 style={{ margin: '0px', fontSize: '15px', fontWeight: 'bolder' }}>
          شماره تماس نماینده
        </h5>
      </div>
    </div>
  )
}

export default OrderProduct
