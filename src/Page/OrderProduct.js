import React from 'react'
import { IoIosArrowDropleftCircle } from 'react-icons/io'
import { RequestUtils } from '../Utils/RequestUtils'
const OrderProduct = () => {
  const product_type = 'abc'
  const weight = 'abc'
  const vehicle_type = 'abc'
  const loading_location = 'abc'
  const unloading_loc = 'abc'
  const loading_date = 'abc'
  const border_passage = 'abc'
  const loading_hour = 'abc'
  const description = 'abc'
  const trader = 'abc'
  const petro_seller_co = 'abc'
  const Order = async () => {
    const res = await RequestUtils.orderProducts(
      product_type,
      weight,
      vehicle_type,
      loading_location,
      unloading_loc,
      loading_date,
      border_passage,
      loading_hour,
      description,
      trader,
      petro_seller_co
    )
    if (res.status === '200') {
      console.log('سفارش شما با موفقیت ثبت شد')
    }
  }

  return (
    <div className='Body'>
      <div
        className='Parts'
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <IoIosArrowDropleftCircle size={20} />
        <h5 style={{ margin: '0px', fontSize: '15px', fontWeight: 'bolder' }}>
          نوع کالا
        </h5>
      </div>
      <div
        className='Parts'
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <IoIosArrowDropleftCircle size={20} />
        <h5 style={{ margin: '0px', fontSize: '15px', fontWeight: 'bolder' }}>
          وزن
        </h5>
      </div>
      <div
        className='Parts'
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <IoIosArrowDropleftCircle size={20} />
        <h5 style={{ margin: '0px', fontSize: '15px', fontWeight: 'bolder' }}>
          نوع ناوگان
        </h5>
      </div>
      <div
        className='Parts'
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <IoIosArrowDropleftCircle size={20} />
        <h5 style={{ margin: '0px', fontSize: '15px', fontWeight: 'bolder' }}>
          محل بارگیری
        </h5>
      </div>
      <div
        className='Parts'
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <IoIosArrowDropleftCircle size={20} />
        <h5 style={{ margin: '0px', fontSize: '15px', fontWeight: 'bolder' }}>
          محل تخلیه
        </h5>
      </div>
      <div
        className='Parts'
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <IoIosArrowDropleftCircle size={20} />
        <h5 style={{ margin: '0px', fontSize: '15px', fontWeight: 'bolder' }}>
          تاریخ بارگیری
        </h5>
      </div>
      <div
        className='Parts'
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <IoIosArrowDropleftCircle size={20} />
        <h5 style={{ margin: '0px', fontSize: '15px', fontWeight: 'bolder' }}>
          نام اعلام کننده بار
        </h5>
      </div>
      <div
        className='Parts'
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <IoIosArrowDropleftCircle size={20} />
        <h5 style={{ margin: '0px', fontSize: '15px', fontWeight: 'bolder' }}>
          ساعت بارگیری
        </h5>
      </div>
      <textarea className='textArea' name='توضیحات'>
        توضیحات
      </textarea>

      <div style={{ textAlign: 'center' }}>
        <button className='btnConfirm' onClick={Order}>
          تایید
        </button>
      </div>
    </div>
  )
}

export default OrderProduct
