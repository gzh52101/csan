<template>
  <el-container>
    <el-header style="padding: 0; background-color: #545c64">
      <el-row :gutter="20">
        <el-col :span="16">
          <p style="line-height: 10px; color: #fff; font-size: 25px;margin-left:10px">
            Alert管理系统
          </p>
        </el-col>
        <template>
        <el-col :span="8" style="text-align:right">
         <strong style="color:#fff;margin-right:5px; line-height: 60px">{{managerInfo.username}},欢迎使用</strong>
          <el-button type="danger" plain size="mini" @click="logout">退出登录</el-button>
        </el-col>
        </template>
      </el-row>
    </el-header>
    <el-container>
      <el-aside width="150px" style="overflow: hidden">
        <el-row style="width: 400px">
          <el-col :span="12" style="height: 800px; background-color: #545c64">
            <el-menu
              default-active="1"
              class="el-menu-vertical-demo"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b"
            >
              <el-menu-item
                @click="goto(item.path)"
                v-for="item in list"
                :key="item.path"
                :index="item.path"
              >
                <i :class="item.icon"></i>
                <span slot="title">{{ item.text }}</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <el-main style="height:800px; overflow: hidden;padding:10px">
        <router-view style="height:800px; overflow: hidden"></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      list: [
        {
          path: "/java",
          text: "Java",
          name: "java",
           icon:"el-icon-s-promotion"
        },
        {
          path: "/Joachern",
          text: "程序人生",
          name: "Joachern",
           icon:"el-icon-s-shop"
        },
        {
          path: "/python",
          text: "python",
          name: "python",
           icon:"el-icon-s-marketing"
        },
        {
          path: "/5g",
          text: "5G",
          name: "5g",
           icon:"el-icon-s-data"
        },
        {
          path: "/Web",
          text: "Web",
          name: "Web",
           icon:"el-icon-info"
        },
        {
          path: "/user",
          text: "用户",
          name: "user",
           icon:"el-icon-s-custom"
        },
      ],
      currentpath: "/home",
      managerInfo: null,
    };
  },
  methods: {
    goto(item) {
      const url = this.currentpath+item;
      if (this.$route.path !== url) {
        this.$router.push(url);
      }
    },
    logout()
    {
      this.$store.commit('manager/logout');
      this.$router.push('/login');
    }
  },
  watch:{
    'managerInfo':function(n,o){
      console.log(o);
      if(!n._id)
      {
        this.$router.push('/login');
      }
    }
  },
  created(){
    this.managerInfo = this.$store.state.manager.managerInfo
  },
  components: {},
};
</script>
<style>
body,
html {
  margin: 0;
  padding: 0;
}
</style>