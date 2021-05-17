<template>
  <el-table :data="tableData" style="width: 800px">
    <el-table-column prop="date" label="日期" width="180"> </el-table-column>
    <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
    <el-table-column prop="address" label="地址"> </el-table-column>
    <el-table-column prop="address" label="操作">
        <el-button type="info" size="mini">修改</el-button>
        <el-button type="danger" size="mini" @click="delitem">删除</el-button>
    </el-table-column>
    <!-- <thead>
      <tr>
        <th>日期</th>
        <th>姓名</th>
        <th>地址</th>
        <th>修改</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in tableData" :key="item.id">
        <td>{{item.date}}</td>
        <td>{{item.name}}</td>
        <td>{{item.address}}</td>
        <td>
          <el-button type="info" size="mini">修改</el-button>
          <el-button type="danger" size="mini" @click="delitem(item.id)">删除</el-button>
        </td>
      </tr>
    </tbody> -->
  </el-table>
</template>
<script>
export default {
  name: "Dynamic",
  data() {
    return {
      tableData: [
        {
          id:1,
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          id:2,
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          id:3,
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          id:4,
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
  methods: {
    delitem(id)
    {
      console.log(id);
      this.tableData= this.tableData.filter((item)=>{
          return item.id != id;
       })
    }
  },
};
</script>