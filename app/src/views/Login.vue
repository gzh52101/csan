<template>
    <div>
        
    <div class="main-content">
    <el-container>
      <el-header>
          <div class="title">
            <i class="el-icon-arrow-left" tag="button" @click="change()" id="LogYc"></i>
            <span>CSDN</span>
          </div>
      </el-header>
          <hr>

    <el-main>
      <div class="from">
          <div class="tab">
            <button class="active" >免密登录</button> 
            <button class="" >账号登录</button>
          </div>
          <el-form 
            class="el-form-input" 
            :model="formData"
            :rules="rules"
            ref="ruleForm"
          >
               <el-input type="username" v-model="formData.username" placeholder="用户名/手机号/邮箱" />
               <el-input type="password" v-model="formData.password" show-password placeholder="密码"/>
              <el-form-item>
                <el-button type="danger" @click="submitForm">登录</el-button>
                <el-button class="QQdl" href="">
                  <i icon=""></i>QQ注册登录</el-button>
              </el-form-item>
          </el-form>
          
      </div>
    </el-main>
    <el-footer>
        <span style="">其他登录方式</span>
    </el-footer>
    </el-container>
               
    </div>
    </div>

</template>
<script>
import axios from 'axios';

export default {
    name:"Login",
    data(){
      return {
        formData:{
          username: "",
          password: "",
          // active:true,
        },
        rules: {
          username:[
            { required: true,  trigger: "blur" }
          ],password:[
            { required: true,  trigger: "blur" }
          ]
        },

      }
    },
    created(){
      // console.log('this',this)
      this.$store.commit('displayNav',false)
    },
    destroyed(){
      this.$store.commit('displayNav', true)
    },

    methods:{
      change(){
        // console.log('回去',this.$router.back)
          // this.$router.back();
          // // if(this.){
          this.$router.push('/tj');
          // }
          
      },
      submitForm(){
          this.$refs.ruleForm.validate(valid => {
            //验证表单数据格式是否正确
            // console.log("valid", valid);
              if(valid){
                const { username, password } = this.formData;
                let userData =  JSON.stringify({username:username,password:password})
                axios.post(`http://112.74.35.224:8841/data/user/login`,
                userData)
                .then((res)=>{
                  //  console.log('res=>',res.data.code,res.data.data.length);
                    if(res.data.code===200 && res.data.data.length===1){
                      // localStorage.setItem('userInfo',JSON.stringify(res.data.data))
                      // console.log('route',this.$route)
                      const { targetUrl = "/tj" } = this.$route.query;

            //** 此处返回的res.data.data还是一个数组，需要将第一条数据拿出来，才可以成为合适的userInfo数据 **/
                      this.$store.commit("login", res.data.data[0]);
                      this.$router.push(targetUrl);
                    }else{
                      // this.$message.error("用户名或密码错误");
                      console.log("用户名或密码错误");
                    }
                })
              }
          })
      }
    }
}
</script>

<style scoped>


.el-input{
  height: 50px;
}
.QQdl{
  color: skyblue;
  margin-top:20px ;
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
