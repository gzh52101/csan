<template>
  <div>
    <span class="demonstration"></span>
    <el-carousel height="150px">
      <el-carousel-item v-for="item in 5" :key="item">
        <img src="" alt="" />
        <h3 class="small" style="color:orange">{{item}}&nbsp;&nbsp;对不起，您访问的图片被小黄人劫持了</h3>
      </el-carousel-item>
    </el-carousel>

    <ul class="ulBox">
        <li v-for="item in recommend" :key="item._id" class="liList">
            <a :href="item.url" class="TopA">{{item.title}}</a>
            <div class="info-tag">
                <a href="" class="oneA">{{item.nickname}}</a>
                <div >{{item.views}}阅读</div>
                <a href="" class="twoA"><i class="el-icon-close"></i></a>
            </div>
        </li>
    </ul>
  </div>
  
</template>
<script>
// import {baseUrl} from '../utils/request'
import axios from "axios";
export default {
  name: "Tj",
  data() {
    return {
        recommend:[],
    };
  },
  methods: {},
  async created() {
   const {data} = await axios.get(`http://112.74.35.224:8841/data/Joachern`, {})
   this.recommend = data.data

    // axios.get(`http://112.74.35.224:8841/data/Joachern`, {}).then((res) => {
    //   console.log("res=>", res.data);
    // });
  },
  
};
</script>

<style>
    ul,li{
        list-style: none;
        margin: 0;
        padding: 0;
    }
    a{
        text-decoration: none;
    }
    ul.ulBox{
        border-top: none;
        display: flex;
        flex-direction: column;
        justify-content:space-between;
        border-top: none;
    }
    li.liList{
        width: 100%;
        /* height: 50px; */
        /* position: relative; */
        /* padding:12px 16px 4px; */
        padding: 16px 12px 4px;
        border-bottom: 1px solid #d8d8d8;
    }
    .liList>.TopA{
        display: block;
        color: #2f2f2f;
        word-break: break-all;
        outline: none;
        font-size:20px;
        padding: 16px 12px 4px;
        font-weight:bold;
    }
    .info-tag{
        /* margin-right: -15px; */
        padding-left:12px;
        height:20px;
        font-size:12px;
        display:flex;
        flex-direction:row;
    }
    .info-tag>.oneA{
        display: block;
        max-width: 95%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #4f4f4f;
        padding-right:10px;
    }
    .info-tag>.twoA{
        position: absolute;
        right:20px
    }


</style>
