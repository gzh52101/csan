<template>
  <div>
    <el-table :data="getData" stripe style="width: 100%">
      <el-table-column label="序号" width="60">
        <template slot-scope="scope">
          <span>{{ scope.$index + 1 }}</span>
        </template>
      </el-table-column>
      <el-table-column label="用户账户" width="200">
        <template slot-scope="scope">
          <span class="textshow">{{ scope.row.username }}</span>
        </template>
      </el-table-column>
      <el-table-column label="用户密码" width="200">
        <template slot-scope="scope">
          <span class="textshow">{{ scope.row.password }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.row._id, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: "Java",
  data() {
    return {
      UserInfo: null,
      formLabelWidth: "100px",
      sreach: "",
    };
  },
  computed: {
    getData() {
      return this.$store.state.User.UserInfo || [];
    }
  },
  methods: {
    handleDelete(id) {
      let payload = {
        url: "http://112.74.35.224:8841/root/removeuser",
        data: { id: id },
        type: "post",
      };
      this.$store.dispatch("ajaxFrom", payload).then(
        (res) => {
          this.getUserData();
          console.log(res);
        },
        (err) => {
          console.log(err);
        }
      );
    },
    getUserData() {
      let payload = {
        url: "http://112.74.35.224:8841/root/inseuser",
        data: {},
        type: "get",
      };
      this.$store.dispatch("ajaxFrom", payload).then(
        (res) => {
          let result = JSON.parse(res);
          this.$store.state.User.UserInfo = result.data;
        },
        (err) => {
          console.log(err);
        }
      );
    },
  },
  created() {
    this.getUserData();
  },
};
</script>
<style scoped>
.pagination {
  margin: 20px auto;
  text-align: center;
}
.textshow {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>