
import Slider from './modules/Slider'
import Product from './modules/Products'
import User from './modules/User'
import Order from './modules/Order'

import { createStore } from 'vuex'

export const store = createStore({
  state () {

  },
  modules:{
    Slider, 
    Product,
    User,
    Order
  },
  mutations: {
    
  }
})