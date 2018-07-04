import axios from 'axios'

axios.defaults.baseURL = 'http://127.0.0.1:8080/'
// 数据请求的地址
// const apiBaseUrl = 'http://jspang.com/DemoApi/'

// 常用商品
// 利用axios访问服务器文件,应该把json文件放在最外层的static文件夹,这个文件夹是服务器向外暴露的一个静态文件夹
export const getOftenGoods = oftenGoods()

function oftenGoods () {
  axios.get('static/data/oftenGoods.json').then(Response => {
    return Response.data
  }).catch(error => {
    console.log(error)
    alert('网络错误,不能访问')
  })
}

// 分类商品数据
export const typeGoods = axios.get('static/data/typeGoods.json').then(Response => {
  return Response.data
}).catch(error => {
  console.log(error)
  alert('网络错误,不能访问')
})
