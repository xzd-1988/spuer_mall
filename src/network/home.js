// 首页所有的请求封装在这里,减少耦合度
import {request} from './request'

export function getHomeMultidata(){
    return request({
        url:'/home/multidata'
    })
}

export function getHomeGoods(type,page){
    return request({
        url:'/home/data',
        params:{
            type,
            page

        }
    })
}