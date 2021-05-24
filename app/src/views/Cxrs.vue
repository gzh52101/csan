<template>
  <div>
    <span class="demonstration"></span>
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
import axios from "axios";
export default {
  name: "Cxrs",
  data() {
    return {
        recommend:[],
    };
  },
  methods: {},

  async created() {
   const {data} = await axios.get(`http://112.74.35.224:8841/data/Joachern`, {})
   this.recommend = data.data
  },
};
</script>

<style>
</style>
