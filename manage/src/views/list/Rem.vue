<template>
  <el-table :data="tableData" stripe style="width:800px">
    <el-table-column prop="date" label="日期" width="180"> </el-table-column>
    <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
    <el-table-column prop="address" label="地址"> </el-table-column>
    <el-table-column prop="address" label="操作">
        <el-button type="info" size="mini">修改</el-button>
        <el-button type="danger" size="mini">删除</el-button>
    </el-table-column>
  </el-table>
</template>
<script>
export default {
  name: "Rem",
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王大虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王大虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王大虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王大虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
};
</script>