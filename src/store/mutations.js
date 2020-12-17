import {
  ADD_COUNTER,
  ADD_TO_CART
} from './mutation-types'
export default {
  //   mutations的唯一目的就是修改state的状态
  // mutations中的每个方法尽可能完成的事件比较单一一点
  [ADD_COUNTER](state, payload) {
    payload.count += 1
  },
  [ADD_TO_CART](state, payload) {
    payload.checked = true
    state.cartList.push(payload)
  }
}
