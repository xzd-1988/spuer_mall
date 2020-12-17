// 对axios进行封装
import axios from 'axios'

// export function request(config,success,failure){
//     // 1.创建axios实例
//     const instance = axios.create({
//         baseURL:'http://123.207.32.32:8000',
//         timeout:3600,

//     })

//     instance(config).then(res=>{
//         // console.log(res);
//         success(res)
//     }).catch(err=>{
//         // console.log(err);
//         failure(err)
//     })
// }

// export function request(config){
//     // 1.创建axios实例
//     const instance = axios.create({
//         baseURL:'http://123.207.32.32:8000',
//         timeout:3600,

//     })

//     instance(config.baseConfig).then(res=>{
//         // console.log(res);
//         config.success(res)
//     }).catch(err=>{
//         // console.log(err);
//         config.failure(err)
//     })
// }

// 2.使用promise的方式创建
// export function request(config) {
//   return new Promise((resolve, reject) => {
//     const instance = axios.create({
//       baseURL: 'http://123.207.32.32:8000',
//       timeout: 3600,
//     })

//     instance(config).then(res => {
//       resolve(res)
//     }).catch(err => {
//       reject(err)
//     })
//   })
// }

// 3.直接返回
export function request(config, success, failure) {
  // 1.创建axios实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 1500,
  })

  // axios的拦截器  全局拦截axios.interceptors    局部拦截:instance.interceptors
  instance.interceptors.request.use(config => {
    // console.log(config);
    // 1.拦截一些config中的一些不符合服务器的信息
    // 2.比如每次发送网络请求时都希望在界面中显示一个请求的图标
    // 3.某些网络请求(比如登陆(token)),必须携带一些特殊的信息
    return config
  }, err => {
    // console.log(err);
  }) //拦截请求

  instance.interceptors.response.use(res=>{
      // console.log(res.data);
      return res.data
  },err=>{
      // console.log(err);
  }) //拦截响应

// 记得把封装好的返回出去
  return instance(config)
}
