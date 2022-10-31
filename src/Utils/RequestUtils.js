import axios from 'axios'

const baseUrl = 'https://mabna.ir/admin/'

const controllers = {
  Orders: 'Orders',
}
const methods = {
  newOrderProducts: 'newOrderProducts',
}
export const RequestUtils = {
  orderProducts: async (
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
  ) => {
    let response = await axios.post(
      `${baseUrl}/${controllers.Orders}/API/_${methods.newOrderProducts}`,
      {
        product_type: 'special',
        weight: '150',
        vehicle_type: 'special',
        loading_location: 'sdfgsdf',
        unloading_loc: 'safdsad',
        loading_date: 'dsad',
        border_passage: 'dsafdf',
        loading_hour: 'vdasfd',
        description: 'cdsaf',
        trader: 'cedfdsaf',
        petro_seller_co: 'cvf',
      },
      {
        headers: {
          token: 'test',
        },
      }
    )
    return response.data
  },
}
