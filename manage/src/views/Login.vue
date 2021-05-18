<template>
  <div>
    <h1 style="width: 500px; margin: auto; text-align: center">用户登录</h1>
    <el-form
      :model="loginData"
      label-width="100px"
      class="demo-ruleForm"
      :rules="rules"
      ref="ruleForm"
      style="
        width: 400px;
        margin: 20px auto;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        padding: 30px 50px 30px 0px;
      "
    >
      <el-form-item label="用户名" prop="username">
        <el-input type="text" v-model="loginData.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          type="password"
          v-model="loginData.password"
          show-password
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">提交</el-button>
        <el-button @click="reset">重置</el-button>
        <el-button type="text" @click="goto('/reg')">立即注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      loginData: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "change" },
          {
            min: 4,
            max: 10,
            message: "长度在 4 到 10 个字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "change" },
          {
            min: 6,
            max: 10,
            message: "长度在 6 到 10 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    submitForm() {
      // this.$refs.ruleForm.validate((valid) => {
      //   console.log("valid", valid);
      //   if (valid) {
      //     const { username, password, vcode } = this.loginData;
      //     this.$request
      //       .post("/login", {
      //         username,
      //         password,
      //       })
      //       .then((data) => {
      //         if (data.code === 200) {
      //           this.$router.push("/mine");
      //           localStorage.setItem('userInfo',JSON.stringify(data.data))
      //         } else if (data.code === 401) {
      //           this.$message.error("密码错误");
      //         }
      //       });
      //   }
      // });
      // this.$router.push('/home');
    },
    goto(path) {
      this.$router.push(path);
    },
    reset()
    {
      this.loginData.username ="";
      this.loginData.password ="";
    }
  },
  created() {
  },
};
</script>
<style>
</style>