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
      <el-table-column label="序号" width="80">
        <template slot-scope="scope">
          <span>{{ scope.$index + 1 }}</span>
        </template>
      </el-table-column>
      <el-table-column label="姓名" width="80">
        <template slot-scope="scope">
          <span>{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="头像" width="80">
        <template slot-scope="scope">
          <img :src="scope.row.imgurl" style="width: 40px; height: 40px" />
        </template>
      </el-table-column>
      <el-table-column label="评价" width="80">
        <template slot-scope="scope">
          <span>{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="日期" width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span>{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column label="地址" width="300">
        <template slot-scope="scope">
          <span>{{ scope.row.address }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.row.id, scope.row)"
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
    <el-dialog title="推荐" width="40%" :visible.sync="dialogFormVisible">
      <el-form :model="updateData">
        <el-form-item label="时间 :" :label-width="formLabelWidth">
          <div class="block">
            <span class="demonstration"></span>
            <el-date-picker
              v-model="updateData.date"
              type="date"
              placeholder="选择日期"
              format="yyyy-MM-dd"
            >
            </el-date-picker>
          </div>
        </el-form-item>
        <el-form-item label="姓名 :" :label-width="formLabelWidth">
          <el-input
            v-model="updateData.name"
            autocomplete="off"
            style="width: 400px"
          ></el-input>
        </el-form-item>
        <el-form-item label="头像上传 :" :label-width="formLabelWidth">
          <el-upload
            class="avatar-uploader"
            action="http://112.74.35.224:5566/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="this.tempimgurl" :src="this.tempimgurl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="地址 :" :label-width="formLabelWidth">
          <el-input
            v-model="updateData.address"
            autocomplete="off"
            style="width: 400px"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="handlesubmit(updateData.id, updateData.flag)"
          >确 定</el-button
        >
      </div>
    </el-dialog>
    <el-pagination
      background
      layout="prev, pager, next"
      :page-count="20"
      class="pagination"
    ></el-pagination>
  </div>
</template>
<script>
export default {
  name: "Dynamic",
  data() {
    return {
      tableData: [
        {
          id: 1,
          date: "2016-05-02",
          name: "王小虎",
          imgurl:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=815616191,1441571081&fm=26&gp=0.jpg",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          id: 2,
          date: "2016-05-04",
          name: "王小虎",
          imgurl:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=815616191,1441571081&fm=26&gp=0.jpg",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          id: 3,
          date: "2016-05-01",
          name: "黄晓明",
          imgurl:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=815616191,1441571081&fm=26&gp=0.jpg",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          id: 4,
          date: "2016-05-03",
          name: "黄晓明",
          imgurl:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=815616191,1441571081&fm=26&gp=0.jpg",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
      updateData: {
        id: "",
        date: new Date(),
        imgurl: "",
        name: "",
        address: "",
        flag: "",
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
      this.updateData.date = row.date;
      this.updateData.name = row.name;
      this.updateData.address = row.address;
      this.updateData.flag = "update";
    },
    handlesubmit(id, flag) {
      let tempitem = {
        id: 8,
        date: this.formaTime(new Date()),
        name: this.updateData.name,
        imgurl:
          "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=815616191,1441571081&fm=26&gp=0.jpg",
        address: this.updateData.address,
      };
      if (flag == "update") {
        this.tableData.map((item) => {
          if (item.id == id) {
            item.date = this.formaTime(this.updateData.date);
            item.name = this.updateData.name;
            item.address = this.updateData.address;
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
    handleAvatarSuccess(res, file) {
      this.tempimgurl = URL.createObjectURL(file.raw);
      console.log(res);
      console.log(file);
      // console.log(this.tempid);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;
      console.log(file);
      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    searchitem() {
      this.tableData = this.tableData.filter((item) => {
        return item.name == this.sreach;
      });
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
  },
};
</script>
<style>
.pagination {
  margin: 400px auto 0;
  text-align: center;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>