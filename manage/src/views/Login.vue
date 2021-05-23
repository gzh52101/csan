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
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "change" },
          {
            min: 4,
            max: 10,
            message: "长度在 4 到 10 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    submitForm() {
      this.$refs.ruleForm.validate((valid) => {
        console.log("valid", valid);
        if (valid) {
          const { username, password } = this.loginData;
          this.ajaxFrom('http://112.74.35.224:8841/root',{ username, password },'post').then((res)=>{
             let result = JSON.parse(res).data[0];
            //  console.log(result);
             this.$store.commit('manager/login',result)
             if(this.$store.getters['manager/islogin'])
             {
                this.$router.push('/home');
             }
             else{
               this.$message.error('密码或账号错误，请重新登录哟~');
               this.reset();
             }
          },(err)=>{
            console.log(err);
          })
        }
      });

    },
    goto(path) {
      this.$router.push(path);
    },
    reset() {
      this.loginData.username = "";
      this.loginData.password = "";
    },
    ajaxFrom(url,data,type) {
      return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open(type, url);
        xhr.setRequestHeader(
          "Content-Type",
          "application/x-www-form-urlencoded"
        );
        xhr.onreadystatechange = function () {
          if (xhr.readyState !== 4) {
            return;
          }
          if (xhr.status === 200) {
            resolve(xhr.responseText);
          } else {
            reject(xhr.responseText);
          }
        };
        xhr.send(JSON.stringify(data));
      });
    },
  },
  created() {},
};
</script>
<style>
</style>