<template>
  <div>
    <h1 style="width: 500px; margin: auto; text-align: center">用户注册</h1>
    <el-form
      :model="regData"
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
        <el-input type="text" v-model="regData.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          type="password"
          v-model="regData.password"
          show-password
        ></el-input>
      </el-form-item>
      <el-form-item label="确定密码" prop="checkpass">
        <el-input
          type="password"
          v-model="regData.checkpass"
          show-password
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">提交</el-button>
        <el-button>重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
// import axios from "axios";
export default {
  name: "Reg",
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.regData.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    // var validateusername = (rule, value, callback) => {
      // rule 校验规则
      // value 当前字段值
      // callback 回调函数,用于确定校验是否通过
      // this.$request
      //   .get("/user/check", {
      //     username: value,
      //   })
      //   .then((data) => {
      //     if (data.code === 400) {
      //       callback(new Error("用户名已存在"));
      //     } else if (data.code === 200) {
      //       callback();
      //     }
      //   });
    // };
    return {
      regData: {
        username: "",
        password: "",
        checkpass: "",
      },
      imgvcode: "",
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "change" },
          {
            min: 4,
            max: 10,
            message: "长度在 4 到 10 个字符",
            trigger: "blur",
          },
          { validator: validateusername, trigger: "blur" },
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
        checkpass: [
          { required: true, message: "请再输入密码", trigger: "change" },
          {
            min: 6,
            max: 10,
            message: "长度在 6 到 10 个字符",
            trigger: "blur",
          },
          { validator: validatePass, trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    submitForm() {
      const { username, password } = this.regData;
      const tim = (new Date()).getTime();
      // axios
      //   .post("http://112.74.35.224:8233/dl.php", {
      //     a: username,
      //     b: password,
      //     tim: tim,
      //     headers: {'Content-type': 'application/x-www-form-urlencoded'}
      //   })
      //   .then(function (response) {
      //     console.log(response);
      //   })
      //   .catch(function (error) {
      //     console.log(error);
      //   });
    },
  },
  created() {},
};
</script>
<style>
.vcode {
  display: block;
  margin: 0 -20px;
  width: 120px;
  height: 38px;
  overflow: hidden;
}
.vcode svg {
  width: 120px;
  height: 40px;
}
</style>