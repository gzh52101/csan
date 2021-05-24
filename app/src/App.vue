<template>
  <!-- <router-link v-for="item in menu" :key="item.path" :to="item.path"  >
    {{item.text}}</router-link>-->
  <!-- <span v-for="item in menu" :key="item.path" @click="goto(item)" >
  {{item.text}}</span>
  <router-view></router-view> -->
  <div>
      <!-- 阻止移动端双击默认放大事件 -->
      <meta name="viewport" content="width=device-width, initial-scale=1.0,
       maximum-scale=1.0, minimum-scale=1.0, user-scalable=0">

  <!-- <keep-alive include="Login"> -->

    <div id="bigBox" v-show="showNav">
    <div class="title" v-show="isShow">
      <span id="csdn"  @click="goto('/tj')">CSDN</span>
      <div id="inputBox">
        <input @keyup.enter="seachAll" v-model="input" 
        placeholder="请输入内容" class="search_input" type="search"> 
      </div>
  
      <a v-if="isLogin" @click="goto('/mine')" style="margin-top:6px;margin-right:45px;font-size:16px">用户:{{userInfo.username}}</a>
    
      <a v-else @click="goto('/login')" style="margin-top:6px;margin-right:45px;font-size:16px">登录</a>

      <i class="el-icon-s-unfold" id="xlk"></i>
    </div>
    
    <div class="main" v-show="isSeach">
     <router-link class="nav_head"  v-for="item in menu" :key="item.path" :to="item.path" tag="span"
      :class="{active: active==item.name}" @click="addButtonActive(item.name)">
    {{item.text}}</router-link> <span style="width:20px"></span>
    </div>

    
    </div>

  <!-- </keep-alive> -->
    <div id="main">
    <router-view></router-view>
    </div>


  </div>
</template>

<script>


export default {
  name: "App",
  data() {
    return {
      menu: [
        {
          path: "/tj",
          name: "tj",
          text: "推荐",
        },
        {
          path: "/dt",
          name: "dt",
          text: "动态",
        },
        {
          path: "/cxrs",
          name: "cxrs",
          text: "程序人生",
        },
        {
          path: "/Python",
          name: "Python",
          text: "Python",
        },
        {
          path: "/Java",
          name: "Java",
          text: "Java",
        },
        {
          path: "/rgzn",
          name: "rgzn",
          text: "人工智能",
        },
           {
          path: "/qd",
          name: "qd",
          text: "前端",
        },   {
          path: "/jg",
          name: "jg",
          text: "架构",
        },
           {
          path: "/sjk",
          name: "sjk",
          text: "数据库",
        },
           {
          path: "/fiveG",
          name: "fiveG",
          text: "5G",
        },
           {
          path: "/yxkf",
          name: "yxkf",
          text: "游戏开发",
        },
        {
          path: "/ydkf",
          name: "ydkf",
          text: "移动开发",
        },
            {
          path: "/yw",
          name: "yw",
          text: "运维",
        },
        {
          path: "/aq",
          name: "aq",
          text: "安全",
        },
        {
          path: "/yfgl",
          name: "yfgl",
          text: "研发管理",
        },
        {
          path: "/wlw",
          name: "wlw",
          text: "物联网",
        },
        {
          path: "/jsjjc",
          name: "jsjjc",
          text: "计算机基础",
        },
        {
          path: "/yspkf",
          name: "yspkf",
          text: "音视频开发",
        },
        {
          path: "/qt",
          name: "qt",
          text: "其他的",
        },
        ],
    
      isShow:true,
      input:'',
      active:'',
      currentPath:'/Tj',
    };
  },
   computed:{
      isLogin(){
        return this.$store.getters.isLogin;
      },
      userInfo(){
      return this.$store.state.user.userInfo;
      },
      showNav(){
        return this.$store.state.common.showNav;
      },
      isSeach(){
        return this.$store.state.common.isSeach;
      }
    },
  methods: {
    seachAll(){
        this.$router.push('/seach').catch((err) => err);
    },

    goto(path) {
      this.$router.push(path).catch((err) => err);
      // const {path} = this.$route;
      this.currentPath = path;
    },
    addButtonActive(name){
      this.active = name
    },
    handleScroll(){
      // var scrollTop =  document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
      var scrollTop =  document.documentElement.scrollTop || document.body.scrollTop 
       var scroll = scrollTop - this.i;
       var scroll = scrollTop - this.i;
            this.i = scrollTop;
            // console.log('i',this.i)
            if(scroll>0 && this.i>40 ){
                // console.log('隐藏')
                this.isShow = false;
            }else{
                // console.log('显示')
                this.isShow = true;
            }
    }
  },
  components: {
    // Login,
  },
  created(){
    
  },
  mounted(){
    window.addEventListener('scroll', this.handleScroll, true);
  }
};
</script>

<style>
  html,body{
    margin: 0!important;
    padding: 0!important;
    /* font-size:100px; */
  }
  body{
    padding:0;
  }

  /* 移动端隐藏滚动条 */
  ::-webkit-scrollbar { display:none }

  #csdn{
       /* position:absolute; */
      padding-left:6px;
      padding-top:6px;
      font-size:22px;
      color:#000;
  }
  input{
			text-indent: 0;
		    background: transparent;
		    border: 0 none;
		    resize:none; 
		    outline:none;  /*清除选中效果的默认颜色边框 */
		    -webkit-appearance:none;  /*清除浏览器默认的样式 */
		    line-height: normal;   
	}
  #inputBox{
    width:146px;
    height: 32px;
    display: inline-block;
    margin-top:5px;
    border-radius: 32px;
    border: 1px solid #E0E0E0;
    padding: 2px 0 2px 12px;
    box-sizing: border-box;
    background: #fff;
  }
  #inputbox.search_input{
    width:99px;
    height: 26px;
    font-size: 16px;
    border-style: none; 
    outline: 0;
    /* margin: 0;
    padding: 0;
    /* line-height: 30px; */
     /* text-align: left;
    box-sizing: content-box;  */
    
  }
  #xlk{
      position:absolute;
      right:6px;
      top:6px;
      font-size:22px;
      color:#000;
      margin-top:3px;
  }
  div{
    height: 100%;
    display: flex;
    flex-direction: column;
    /* 此处为了清除 移动端出现的横向的滚动条 */
    overflow: hidden;
  }
  
  div.title{
    display: flex;
    flex-direction:row;
    justify-content: space-between;
    background-color:#fff;
    line-height: 25px;
    text-align: center;
    box-sizing: border-box;
    width:100%;
    font-size:18px;
    height:40px;
    align-content:space-between;

    position:fixed;
    top:0;
    left:0;
    right:0;
    z-index:100;
    /* transition:all 2s; */
    transition-property:all 2s linear 4s;
  }
  #main{
    width:100%;
    /* height:4000px; */
  }
  .main{
      margin-top:40px;
      display: flex;
      justify-content:flex-start;
      flex-direction:row;
      height:40px;
      width:100%;
      background-color: #e4e9ec;
      color:#4f4f4f;
      padding-left:20px;
      float:left;

      /* 禁止换行 */
      white-space: nowrap;
      /* 将溢出了x轴的区域 裁减掉 */
      overflow-x:auto;
  }
  .nav_head{
        margin-right:20px;
        padding-top:10px;
        line-height: 95%;
        /* text-align: center; */
        flex-direction:row;
        /* width: 100%; */
        /* overflow-x: auto;  */
        display:inline-block;
      
  }
  .nav_head.router-link-active{
    
    border-bottom: solid 3px #fc5531;
  }
  
  /* .el-menu--horizontal>.el-menu-item.is-active {
    border-bottom: solid 3px #fc5531;
    color: #e4e9ec;
  }*/
  
</style>
