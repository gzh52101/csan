<template>
  <el-container>
    <el-header style="padding: 0; background-color: #545c64">
      <el-row :gutter="20">
        <!-- <el-col :span="8"> -->
        <!-- <el-menu
            class="el-menu-demo"
            mode="horizontal"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            router
            :default-active="currentpath"
          >
            <el-menu-item
              :index="item.path"
              v-for="item in menu"
              :key="item.name"
              >{{ item.text }}</el-menu-item
            >
          </el-menu> -->
        <!-- </el-col> -->
        <el-col :span="8">
          <p style="line-height: 10px; color: #fff; font-size: 25px">
            Alert管理系统
          </p>
        </el-col>
        <el-col :span="16">
          <p style="text-align: right; color: #fff"><span>chen</span>您好！</p>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside width="200px" style="overflow: hidden">
        <el-row style="width: 400px">
          <el-col :span="12" style="height: 800px; background-color: #545c64">
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b"
            >
              <el-menu-item
                @click="goto(item.path)"
                v-for="item in list"
                :key="item.path"
              >
                <i class="el-icon-menu"></i>
                <span slot="title">{{ item.text }}</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <el-main style="overflow: hidden">
        <router-view></router-view>
        <!-- main -->
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      // menu: [
      //   {
      //     path: "/home",
      //     text: "首页",
      //     name: "home",
      //   },
      //   {
      //     path: "/mine",
      //     text: "我的",
      //     name: "mine",
      //   },
      // ],
      list: [
        {
          path: "/dynamic",
          text: "动态",
          name: "dynamic",
        },
        {
          path: "/rem",
          text: "推荐",
          name: "rem",
        },
        {
          path: "/java",
          text: "Java",
          name: "java",
        },
        {
          path: "/life",
          text: "程序人生",
          name: "life",
        },
        {
          path: "/python",
          text: "python",
          name: "python",
        },
        {
          path: "/ai",
          text: "人工智能",
          name: "ai",
        },
        {
          path: "/user",
          text: "用户管理",
          name: "user",
        },
        {
          path: "/manager",
          text: "管理员",
          name: "manager",
        },
      ],
      currentpath: "/home",
      userInfo: null,
    };
  },
  methods: {
    goto(item) {
      // if (typeof item === "object") {
      //   if (this.$route.path !== item.path) {
      //     this.$route.push({ path: item.path });
      //   }
      // } else {
      //   if (this.$route.path !== item) {
      //     this.$router.push(item);
      //   }
      // }
      const url = this.currentpath+item;
      // console.log(url);
      // if (this.$route.path !== item) {
      // }
      this.$router.push(url);
      // this.currentpath = item.path;
    },
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