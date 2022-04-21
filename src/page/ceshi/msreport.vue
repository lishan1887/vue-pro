<template>
  <div class="p35">
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item label="日期">
        <el-date-picker v-model="formDate" type="date" placeholder="选择日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="queryList">查询</el-button>
        <el-button type="primary" @click="addClick">新增</el-button>
      </el-form-item>
    </el-form>
    <el-card style="width: 100%">
      <el-table :data="auditData" border size='small'>
        <el-table-column prop="taskcode" label="任务编码"></el-table-column>
        <el-table-column prop="taskliablefullname" label="责任人姓名"  width="160"></el-table-column>
        <el-table-column prop="taskliableuserid" label="责任人帐号"></el-table-column>
        <el-table-column prop="taskinfo" label="任务事项"></el-table-column>
        <el-table-column prop="tasksubmit" label="提交人"></el-table-column>
        <el-table-column prop="taskstaute" label="taskstaute"></el-table-column>
        <el-table-column prop="createtime" label="创建时间" width="160"></el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="80"
          >
          <template slot-scope="scope">
            <el-button @click="eadtClick(scope.row)" size="small">编辑</el-button>
            <el-button @click="delData(scope.row)"  type="danger" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        class="mt-15"
        background
        @current-change="webPage"
        :current-page.sync="currentPage"
        :page-size="pageSize"
        layout="prev, pager, next"
        :total="total">
      </el-pagination>
    </el-card>
    <el-dialog :title="!!form.id?'编辑':'新增'" :visible.sync="dialogaudit" width="50%">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="任务编码"><el-input v-model="form.taskcode"></el-input></el-form-item>
        <el-form-item label="责任人姓名"><el-input v-model="form.taskliablefullname"></el-input></el-form-item>
        <el-form-item label="责任人帐号"><el-input v-model="form.taskliableuserid"></el-input></el-form-item>
        <el-form-item label="任务事项"><el-input v-model="form.taskinfo"></el-input></el-form-item>
        <el-form-item label="提交人"><el-input v-model="form.tasksubmit"></el-input></el-form-item>
        <el-form-item label="任务状态"><el-input v-model="form.taskstaute"></el-input></el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogaudit = false">取 消</el-button>
        <el-button type="primary" @click="auditSub">确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>


export default {
  data() {
    return {
      addDate:new Date(),
      pageSize:10,
      currentPage:1,
      total:0,
      dialogaudit:false,
      form:{},
      formDate: new Date(),
      allData: [],
      auditData: [],
    };
  },

  created() {
    // this.getAuditInfo();
    this.queryList()
  },

  methods: {
    addClick(){
      this.form={
        "taskcode": "",//任务编码
        "taskliablefullname": "",//责任人姓名
        "taskliableuserid": "",//责任人帐号
        "taskinfo": "",//任务事项
        "tasksubmit": "",//提交人
        "taskstaute": "1",//任务状态
        "alternate1": "",
        "alternate2": "",
        "alternate3": "",
        "alternate4": "",
        "alternate5": "",
        "createtime": "",//创建时间
      }
      console.log(this.newDate())
      this.dialogaudit=true
    },
    eadtClick(e){
      this.dialogaudit=true
      console.log(e)
      this.form=e
    },
    delData(e){
      let id=e.id
      
      // let arr=[]
      // arr.push(id)
      this.$axios.post(this.$store.state.url+"tgzqnew/impVol/deltaskreport", this.$querystring.stringify({
        id:JSON.stringify(id)
      }))
        .then((res) => {
          console.log(res);
          if(res.data.code=='200'){
            this.$message({
              message: '删除成功',
              type: 'success'
            });
            this.dialogaudit=false
            this.queryList()
          }
          // this.auditData = res.data.data;
        });
    },

    },
    auditSub(){
      if(!this.form.id){
        this.form.createtime=this.newDate()
      }
      let arr=[]
      arr.push(this.form)
      this.$axios.post(this.$store.state.url+"tgzqnew/impVol/instaskreport", this.$querystring.stringify({
        content:JSON.stringify(arr)
      }))
        .then((res) => {
          console.log(res);
          if(res.data.code=='200'){
            this.$message({
              message: '提交成功',
              type: 'success'
            });
            this.dialogaudit=false
            this.queryList()
          }
          // this.auditData = res.data.data;
        });
    },
    newDate(e){
     let  formatNumber = n => {
      n = n.toString();
      return n[1] ? n : '0' + n
      };
     let  formatTime = date => {
          const year = date.getFullYear();
          const month = date.getMonth() + 1;
          const day = date.getDate();
          const hour = date.getHours()
          const minute = date.getMinutes()
          const second = date.getSeconds()
          return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
      };
     return formatTime(new Date())
    },
    dategsh(de) {
      if (de == "") {
        return "";
      }
      if (typeof de == "string") {
        de = new Date(de);
      }
      let YYYY = de.getFullYear()+'';
      let MM = de.getMonth() + 1;
      if (MM < 10) {
        MM = "0" + MM;
      } else {
        MM = MM.toString();
      }
      let DD = de.getDate();
      if (DD < 10) {
        DD = "0" + DD;
      } else {
        DD = DD.toString();
      }
      return {
        YYYY,
        MM,
        DD,
      };
    },
    webPage(e){
      if(e!=1){
        e=e*10-10
      }
      let auditData=this.allData.slice(e,e+10)
      this.auditData=auditData
    },
    queryList() {
      var date = this.dategsh(this.formDate);
      this.$axios.get(this.$store.state.url+"tgzqnew/impVol/selecttaskreport", {
          params: {
            audityear: date.YYYY,
            auditmonth: date.MM,
            auditday: date.DD,
          },
        })
        .then((res) => {
          this.total=res.data.data.length
          this.currentPage=1
          this.allData = res.data.data;
          this.webPage(1)
        });
    }
};
</script>
<style  >
.p35 {
  padding: 35px;
}
.mt-15{
  margin-top: 15px;
}
</style>