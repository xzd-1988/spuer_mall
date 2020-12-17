import {
  ADD_COUNTER,
  ADD_TO_CART
} from './mutation-types'
export default {
  addCart(context, payload) {
    //   let oldProdct = null;
    //   for (const item of state.cartList) {
    //     if (item.iid === payload.iid) {
    //       oldProdct = item
    //     }
    //   }
    return new Promise((resolve, reject) => {
      // 1.查找之前是否有该商品
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
      // 2.判断oldProduct
      if (oldProduct) { //数量加1
        // oldProduct.count += 1
        context.commit(ADD_COUNTER, oldProduct)
        resolve('注意注意,你又多买了一件哦!!!')
      } else { //添加新的商品
        payload.count = 1
        //   context.state.cartList.push(payload)
        context.commit(ADD_TO_CART, payload)
        resolve('已经将你喜欢的商品添加到购物车啦!!!')
      }
    })
  }
}
