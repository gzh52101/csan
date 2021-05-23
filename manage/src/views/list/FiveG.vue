<template>
  <div>
    <el-button type="primary" @click="handleadd" size="mini">添加</el-button>
    <el-table :data="getData" stripe style="width: 100%">
      <el-table-column label="序号" width="60">
        <template slot-scope="scope">
          <span>{{ scope.$index + 1 }}</span>
        </template>
      </el-table-column>
      <el-table-column label="标题" width="200">
        <template slot-scope="scope">
          <span class="textshow">{{ scope.row.title }}</span>
        </template>
      </el-table-column>
      <el-table-column label="用户名" width="120">
        <template slot-scope="scope">
          <span>{{ scope.row.user_name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="内容" width="300">
        <template slot-scope="scope">
          <span class="textshow">{{ scope.row.desc }}</span>
        </template>
      </el-table-column>
      <el-table-column label="评论量" width="80">
        <template slot-scope="scope">
          <span>{{ scope.row.comments }}</span>
        </template>
      </el-table-column>
      <el-table-column label="浏览量" width="80">
        <template slot-scope="scope">
          <span class="textshow">{{ scope.row.views }}</span>
        </template>
      </el-table-column>
      <el-table-column label="上传时间" width="200">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span>{{ formaTime(scope.row.shown_time * 1) }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            type="success"
            plain
            size="mini"
            @click="handleEdit(scope.row._id, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.row._id, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="Java" width="40%" :visible.sync="dialogFormVisible">
      <el-form :model="updateData">
        <el-form-item label="标题 :" :label-width="formLabelWidth">
          <el-input
            v-model="updateData.title"
            autocomplete="off"
            style="width: 400px"
          ></el-input>
        </el-form-item>
        <el-form-item label="用户名 :" :label-width="formLabelWidth">
          <el-input
            v-model="updateData.user_name"
            autocomplete="off"
            style="width: 400px"
          ></el-input>
        </el-form-item>
        <el-form-item label="内容 :" :label-width="formLabelWidth">
          <el-input
            v-model="updateData.desc"
            autocomplete="off"
            style="width: 400px"
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 6 }"
          ></el-input>
        </el-form-item>
        <el-form-item label="评论量 :" :label-width="formLabelWidth">
          <el-input
            v-model="updateData.comments"
            autocomplete="off"
            style="width: 400px"
          ></el-input>
        </el-form-item>
        <el-form-item label="浏览量 :" :label-width="formLabelWidth">
          <el-input
            v-model="updateData.views"
            autocomplete="off"
            style="width: 400px"
          ></el-input>
        </el-form-item>
        <el-form-item label="上传时间 :" :label-width="formLabelWidth">
          <div class="block">
            <span class="demonstration"></span>
            <el-date-picker
              v-model="updateData.shown_time"
              type="date"
              placeholder="选择日期"
              format="yyyy-MM-dd"
            >
            </el-date-picker>
          </div>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false" size="mini"
          >取 消</el-button
        >
        <el-button
          type="primary"
          @click="handlesubmit(updateData._id, updateData.flag)"
          size="mini"
          >确 定</el-button
        >
      </div>
    </el-dialog>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="gettotal"
      :page-size="5"
      class="pagination"
      @current-change="pagechange"
    ></el-pagination>
  </div>
</template>
<script>
export default {
  name: "Java",
  data() {
    return {
      FiveGInfo: null,
      updateData: {
        _id: "",
        title: "",
        user_name: "",
        desc: "",
        comments: "",
        views: "",
        shown_time: "",
      },
      dialogFormVisible: false,
      formLabelWidth: "100px",
      tempimgurl: "",
      init: 0,
      size: 5,
    };
  },
  computed: {
    getData() {
      return this.$store.state.FiveG.FiveGInfo || [];
    },
    gettotal() {
      return this.$store.state.Web.total || 0;
    },
  },
  methods: {
    handleadd() {
      this.dialogFormVisible = true;
      this.updateData.flag = "add";
    },
    handleEdit(id, row) {
      this.dialogFormVisible = true;
      this.updateData._id = id;
      this.updateData.title = row.title;
      this.updateData.user_name = row.user_name;
      this.updateData.desc = row.desc;
      this.updateData.comments = row.comments;
      this.updateData.views = row.views;
      this.updateData.shown_time = this.formaTime(row.shown_time * 1);
      this.updateData.flag = "update";
    },
    handlesubmit(id, flag) {
      let tempitem = {
        title: this.updateData.title,
        user_name: this.updateData.user_name,
        desc: this.updateData.desc,
        comments: this.updateData.comments,
        views: this.updateData.views,
        shown_time: this.updateData.shown_time * 1,
      };
      if (flag == "update") {
        let payload = {
          url: "http://112.74.35.224:8841/data/5g/set",
          data: { id: id, set: tempitem },
          type: "post",
        };
        this.$store.dispatch("ajaxFrom", payload).then(
          (res) => {
            this.getFiveGData();
            this.getDatatotal();
            console.log(res);
          },
          (err) => {
            console.log(err);
          }
        );
        for (let key in this.updateData) {
          this.updateData[key] = "";
        }
      } else if (flag == "add") {
        let payload = {
          url: "http://112.74.35.224:8841/data/5g/inse",
          data: tempitem,
          type: "post",
        };
        this.$store.dispatch("ajaxFrom", payload).then(
          (res) => {
            this.getFiveGData();
            this.getDatatotal();
            console.log(res);
          },
          (err) => {
            console.log(err);
          }
        );
        for (let key in this.updateData) {
          this.updateData[key] = "";
        }
      }
      this.flag = "update";
      this.dialogFormVisible = false;
    },
    handleDelete(id) {
      let payload = {
        url: "http://112.74.35.224:8841/data/5g/remove",
        data: { id: id },
        type: "post",
      };
      this.$store.dispatch("ajaxFrom", payload).then(
        (res) => {
          this.getFiveGData();
          this.getDatatotal();
          console.log(res);
        },
        (err) => {
          console.log(err);
        }
      );
    },
    formaTime(time) {
      let d = new Date(time);
      let res = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
      return res;
    },
    getFiveGData() {
      let { init, size } = this;
      let payload = {
        url: "http://112.74.35.224:8841/data/paging",
        data: { dbteb: "data5g", init: init, end: size },
        type: "post",
      };
      this.$store.dispatch("ajaxFrom", payload).then(
        (res) => {
          let result = JSON.parse(res);
          this.$store.state.FiveG.FiveGInfo = result.data;
        },
        (err) => {
          console.log(err);
        }
      );
    },
    getDatatotal() {
      let payload = {
        url: "http://112.74.35.224:8841/data/5g",
        data: {},
        type: "get",
      };
      this.$store.dispatch("ajaxFrom", payload).then(
        (res) => {
          let result = JSON.parse(res);
          this.$store.state.Web.total = result.data.length;
        },
        (err) => {
          console.log(err);
        }
      );
    },
    pagechange(page) {
      this.init = (page - 1) * this.size;
      this.getFiveGData();
      this.getDatatotal();
    },
  },
  created() {
    this.getFiveGData();
    this.getDatatotal();
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