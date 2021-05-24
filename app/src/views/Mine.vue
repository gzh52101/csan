<template>
    <div>
        
    <div class="main-content">
    <el-container>
      <el-header>
      <div class="title">
      <span id="csdn"  @click="goto('/tj')">CSDN</span>
      <div id="inputBox">
        <input v-model="input" placeholder="请输入内容" class="search_input" type="search"> 
      </div>
      <a  @click="goto('/mine')" style="margin-top:6px;margin-right:45px;font-size:16px">我的</a>
      <i class="el-icon-s-unfold" id="xlk"></i>
    </div>
      </el-header>
      
      <button @click="logout" style="width:100px;height:50px;background-color:#58bc58">退出登录</button>
    
    </el-container>
               
    </div>
    </div>

</template>
<script>
// import axios from 'axios';

export default {
    name:"Mine",
    data(){
      return {
        input:'',
      }
    },
    created(){
      this.$store.commit('displayNav',false)
    },
    destroyed(){
      this.$store.commit('displayNav', true)
    },

    methods:{
      goto(path){
        this.$router.push(path).catch((err) => err);
        this.currentPath = path;
      },
      logout(){
        this.$store.commit('logout');
        this.$router.push("/tj")
      }
      
    }
}
</script>

<style scoped>


.el-input{
  height: 50px;
}

*{
    margin: 0;
    padding: 0;
    border:none;
    /* font-size: 100%; */
}
    #LogYc{
      position: absolute;
      left:6px;
      top: 6px;
    }
    div.title{
      display: flex;
      flex-direction:row;
      justify-content: space-around;
      padding-bottom:40px;
      border-bottom: 1px solid #d8d8d8;
    }
    
    .main-content{
      height: 850px;
      display:flex;
      bottom: 0;
      left: 0;
      /* background-color: skyblue; */
      overflow-x: hidden;
      overflow-y: scroll;
    }
    .from{
      height: 400px;
      /* background-color: #58bc58; */
    }
    .tab{
      display: flex;
      flex-direction:row;
      justify-content: space-between;
      /* align-content: space-between; */
      height: 40px;
      padding-bottom:40px;
    }
    .tab>button{
      width:40%;
      height: 40px;
      background-color: #fff;
      border:none;
       outline:none;
       font-size:18px;
       /* border-bottom:2px  #fc5531; */
    }
    .tab>button.active{
        border-bottom-color: #fc5531;
        border-bottom-style: solid;
    }
    
  
    

    
</style>

