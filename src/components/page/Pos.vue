<template>
  <div class="pos">
    <div>
      <el-row>
        <el-col :span="7" class="pos-order" id="order-list" >
          <el-tabs>
            <el-tab-pane label="点餐">
              <el-table :data="tableData" border  style="width: 100%;">
                <el-table-column prop="goodName" label="商品"></el-table-column>
                <el-table-column prop="count" label="量" width="50"></el-table-column>
                <el-table-column prop="price" label="价格" width="70"></el-table-column>
                <el-table-column label="操作" width="150" fixed="right">
                  <template slot-scope="scope">
                    <el-button type="text" size="small" @click="addOrderList(scope.row)">增加</el-button>
                     <el-button type="text" size="small" @click="reduceItem(scope.row)">减少</el-button>
                      <el-button type="text" size="small" @click="deleteItem(scope.row)">删除</el-button>
                  </template>
                </el-table-column>
              </el-table>
              <div class="total">
                <small>数量：</small>
                <strong>{{totalAcount}}</strong>&nbsp;&nbsp;&nbsp;&nbsp;
                <small>总计：</small>
                <strong>{{totalMoney}}</strong> &nbsp;元
              </div>
              <div>
                <el-button type="warning" >挂单</el-button>
                <el-button type="danger" @click="deleteAll">删除</el-button>
                <el-button type="success" >结账</el-button>
              </div>
            </el-tab-pane>

            <el-tab-pane label="挂单">
              挂单
            </el-tab-pane>
            <el-tab-pane label="外卖">
              外卖
            </el-tab-pane>
          </el-tabs>
        </el-col>
        <!-- 商品展示 -->
        <el-col :span="17">
          <div class="often-goods">
            <div class="title">常用商品</div>
            <div class="often-goods-list" >
              <ul>
                <!-- 循环得到常用商品 -->
                <li v-for="(item, index) in oftenGoods" :key="index">
                  <span>{{item.goodsName}}</span>
                  <span class="o-price">￥{{item.price}} </span>
                </li>
              </ul>
            </div>
          </div>
          <div class="goods-type">
            <el-tabs>
              <el-tab-pane label="汉堡">
                <ul class="cookList">
                  <li v-for="(good, index) in type0Goods" :key="index"  @click="addOrderList(good)">
                    <span class="foodImg">
                      <img :src="good.goodsImg" alt="图片不见了~">
                    </span>
                    <div class="detail">
                       <span class="foodName">{{good.goodsName}}</span>
                       <span class="foodPrice">￥{{good.price}}</span>
                       <span class="empty"></span>
                    </div>
                  </li>
                </ul>
              </el-tab-pane>
               <el-tab-pane label="小食">
                 <ul class="cookList">
                  <li v-for="(good, index) in type1Goods" :key="index" @click="addOrderList(good)">
                    <span class="foodImg">
                      <img :src="good.goodsImg" alt="图片不见了~">
                    </span>
                    <div class="detail">
                       <span class="foodName">{{good.goodsName}}</span>
                       <span class="foodPrice">￥{{good.price}}</span>
                       <span class="empty"></span>
                    </div>
                  </li>
                </ul>
               </el-tab-pane>
              <el-tab-pane label="饮料">
                <ul class="cookList">
                  <li v-for="(good, index) in type2Goods" :key="index" @click="addOrderList(good)">
                    <span class="foodImg">
                      <img :src="good.goodsImg" alt="图片不见了~">
                    </span>
                    <div class="detail">
                       <span class="foodName">{{good.goodsName}}</span>
                       <span class="foodPrice">￥{{good.price}}</span>
                       <span class="empty"></span>
                    </div>
                  </li>
                </ul>
              </el-tab-pane>
              <el-tab-pane label="套餐">
                <ul class="cookList">
                  <li v-for="(good, index) in type3Goods" :key="index" @click="addOrderList(good)">
                    <span class="foodImg">
                      <img :src="good.goodsImg" alt="图片不见了~">
                    </span>
                    <div class="detail">
                       <span class="foodName">{{good.goodsName}}</span>
                       <span class="foodPrice">￥{{good.price}}</span>
                       <span class="empty"></span>
                    </div>
                  </li>
                </ul>
              </el-tab-pane>
            </el-tabs>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>

import axios from 'axios'
export default {
  name: 'Pos',
  created () {
    // 拉取常用商品
    this.oftenGoods = axios.get('static/data/oftenGoods.json').then(Response => {
      this.oftenGoods = Response.data
    }).catch(error => {
      console.log(error)
      alert('网络错误,不能访问')
    })
    // 拉取商品
    axios.get('static/data/typeGoods.json').then(Response => {
      this.type0Goods = Response.data[0]
      this.type1Goods = Response.data[1]
      this.type2Goods = Response.data[2]
      this.type3Goods = Response.data[3]
    }).catch(error => {
      console.log(error)
      alert('网络错误,不能访问')
    })
  },
  data () {
    return {
      tableData: [],
      oftenGoods: [],
      type0Goods: [],
      type1Goods: [],
      type2Goods: [],
      type3Goods: [],
      totalAcount: 0,
      totalMoney: 0
    }
  },
  methods: {
    addOrderList (good) {
      this.totalAcount += 1
      this.totalMoney += good.price
      let arr = this.tableData.filter(o => o.goodsId === good.goodsId)
      if (arr.length > 0 && arr.length === 1) {
        arr[0].count++
      } else if (arr.length > 1) {
        alert('添加商品出错')
        return false
      } else {
        this.tableData.push({goodsId: good.goodsId, goodName: good.goodsName, price: good.price, count: 1})
      }
    },
    deleteItem (good) {
      this.totalAcount -= good.count
      this.totalMoney -= good.price * good.count
      this.tableData = this.tableData.filter(o => o.goodsId !== good.goodsId)
    },
    reduceItem (good) {
      this.totalAcount -= 1
      this.totalMoney -= good.price
      let item = this.tableData.filter(o => o.goodsId === good.goodsId)[0]
      item.count > 1 ? item.count-- : this.tableData = this.tableData.filter(o => o.goodsId !== good.goodsId)
    },
    deleteAll () {
      this.tableData = []
      this.totalAcount = 0
      this.totalMoney = 0
    },
    checkOut () {
      if (this.totalAcount !== 0) {
        this.tableData = []
        this.totalAcount = 0
        this.totalMoney = 0
        this.$message({
          message: '结账成功!',
          type: 'success'
        })
      } else {
        this.$message.error('不能空结!')
      }
    }
  },
  // 解决组件生成虚拟dom,无法设置高度为100%的问题
  mounted: function () {
    // 将body的值赋值给order-list这个节点   body的clientHeight为当前窗体的可视化高度
    document.getElementById('order-list').style.height =
      document.body.clientHeight + 'px'
  }
}
</script>
<style scoped lang="less">
@import url("../page/Pos.less");
</style>
