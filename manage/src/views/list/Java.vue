<template>
  <div>
    <el-button type="primary" @click="handleadd" size="mini">添加</el-button>
    <div style="float: right">
      <el-input
        v-model="sreach"
        placeholder="请输入内容"
        style="width: 300px; margin-right: 10px"
        size="mini"
      ></el-input>
      <el-button type="primary" size="mini" @click="searchitem">查询</el-button>
    </div>
    <el-table :data="tableData" stripe style="width: 100%">
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
          <span>{{ scope.row.username }}</span>
        </template>
      </el-table-column>
      <el-table-column label="码龄" width="60">
        <template slot-scope="scope">
          <span>{{ scope.row.codetime }}</span>
        </template>
      </el-table-column>
      <el-table-column label="阅读量" width="80">
        <template slot-scope="scope">
          <span>{{ scope.row.read }}</span>
        </template>
      </el-table-column>
      <el-table-column label="内容" width="300">
        <template slot-scope="scope">
          <span class="textshow">{{ scope.row.content }}</span>
        </template>
      </el-table-column>
      <el-table-column label="上传时间" width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span>{{ scope.row.time }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            type="success"
            plain
            size="mini"
            @click="handleEdit(scope.row.id, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.row.id, scope.row)"
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
            v-model="updateData.username"
            autocomplete="off"
            style="width: 400px"
          ></el-input>
        </el-form-item>
        <el-form-item label="内容 :" :label-width="formLabelWidth">
          <el-input
            v-model="updateData.content"
            autocomplete="off"
            style="width: 400px"
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 6 }"
          ></el-input>
        </el-form-item>
        <el-form-item label="上传时间 :" :label-width="formLabelWidth">
          <div class="block">
            <span class="demonstration"></span>
            <el-date-picker
              v-model="updateData.time"
              type="date"
              placeholder="选择日期"
              format="yyyy-MM-dd"
            >
            </el-date-picker>
          </div>
        </el-form-item>
        <el-form-item label="码龄 :" :label-width="formLabelWidth">
          <el-input
            v-model="updateData.codetime"
            autocomplete="off"
            style="width: 400px"
          ></el-input>
        </el-form-item>
        <el-form-item label="阅读量 :" :label-width="formLabelWidth">
          <el-input
            v-model="updateData.read"
            autocomplete="off"
            style="width: 400px"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false" size="mini"
          >取 消</el-button
        >
        <el-button
          type="primary"
          @click="handlesubmit(updateData.id, updateData.flag)"
          size="mini"
          >确 定</el-button
        >
      </div>
    </el-dialog>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="tableData.length"
      class="pagination"
    ></el-pagination>
  </div>
</template>
<script>
export default {
  name: "Java",
  data() {
    return {
      tableData: [
        {
          id: 1,
          title: "删库跑路sping工程师的常见操作",
          username: "JavaEdge",
          content:
            "前言:很多需要使用事务的场景，都只是在方法上直接添加个@Transactional注解",
          time: "2021-5-13",
          codetime: "5",
          read: 152,
        },
        {
          id: 2,
          title: "删库跑路sping工程师的常见操作",
          username: "chen",
          content:
            "前言:很多需要使用事务的场景，都只是在方法上直接添加个@Transactional注解",
          time: "2021-5-13",
          codetime: "5",
          read: 152,
        },
        {
          id: 3,
          title: "删库跑路sping工程师的常见操作",
          username: "JavaEdge",
          content:
            "前言:很多需要使用事务的场景，都只是在方法上直接添加个@Transactional注解",
          time: "2021-5-13",
          codetime: "5",
          read: 152,
        },
      ],
      updateData: {
        id: "",
        title: "",
        username: "",
        content: "",
        time: "",
        codetime: "",
        read: "",
      },
      dialogFormVisible: false,
      formLabelWidth: "100px",
      tempimgurl: "",
      sreach: "",
    };
  },
  methods: {
    handleadd() {
      this.dialogFormVisible = true;
      this.updateData.flag = "add";
    },
    handleEdit(id, row) {
      this.dialogFormVisible = true;
      this.updateData.id = id;
      this.updateData.title = row.title;
      this.updateData.username = row.username;
      this.updateData.content = row.content;
      this.updateData.time = row.time;
      this.updateData.codetime = row.codetime;
      this.updateData.read = row.read;

      this.updateData.flag = "update";
    },
    handlesubmit(id, flag) {
      let tempitem = {
        id: Math.random()*1000+1,
        title: this.updateData.title,
        username: this.updateData.username,
        content: this.updateData.content,
        time: this.formaTime(new Date()),
        codetime: this.updateData.codetime,
        read: this.updateData.read,
      };
      if (flag == "update") {
        this.tableData.map((item) => {
          if (item.id == id) {
            item.id = this.updateData.id;
            item.title = this.updateData.title;
            item.username = this.updateData.username;
            item.content = this.updateData.content;
            item.time = this.formaTime(this.updateData.time);
            item.codetime = this.updateData.codetime;
            item.read = this.updateData.read;
          }
        });
        // console.log(this.updateData);
        console.log(id);
        for (let key in this.updateData) {
          this.updateData[key] = "";
        }
      } else if (flag == "add") {
        this.tableData.push(tempitem);
        for (let key in this.updateData) {
          this.updateData[key] = "";
        }
      }
      this.flag = "update";
      this.dialogFormVisible = false;
    },
    handleDelete(id) {
      this.tableData = this.tableData.filter((item) => {
        return item.id != id;
      });
    },
    formaTime(time) {
      let d = new Date(time);
      let res = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
      return res;
    },
    searchitem() {
      this.tableData = this.tableData.filter((item) => {
        return item.username == this.sreach;
      });
    },
  },
};
</script>
<style>
.pagination {
  margin: 400px auto 0;
  text-align: center;
}
.textshow {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>