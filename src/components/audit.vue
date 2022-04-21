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
        <el-table-column prop="auditcode" label="稽核编码"></el-table-column>
        <el-table-column prop="audittype" label="稽核内容"  width="160"></el-table-column>
        <el-table-column prop="auditname" label="稽核人员"></el-table-column>
        <el-table-column prop="audituserid" label="userid"></el-table-column>
        <el-table-column prop="audityear" label="年度"></el-table-column>
        <el-table-column prop="auditmonth" label="月度"></el-table-column>
        <el-table-column prop="auditday" label="日"></el-table-column>
        <el-table-column prop="auditerror" label="是否异常"></el-table-column>
        <el-table-column prop="auditresult" label="稽核概述"></el-table-column>
        <el-table-column prop="auditfile" show-overflow-tooltip label="反馈附件"></el-table-column>
        <el-table-column prop="auditremark" label="备注"></el-table-column>
        <el-table-column prop="status" label="状态">
          <template slot-scope="scope">
            {{scope.row.status==1?'正常':'异常'}}
          </template>
        </el-table-column>
        <el-table-column prop="createtime" label="反馈时间" width="160"></el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="80"
          >
          <template slot-scope="scope">
            <el-button @click="eadtClick(scope.row)" size="small">编辑</el-button>
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
        <el-form-item label="稽核编码"><el-input v-model="form.auditcode"></el-input></el-form-item>
        <el-form-item label="稽核内容"><el-input v-model="form.audittype"></el-input></el-form-item>
        <el-form-item label="稽核人员"><el-input v-model="form.auditname"></el-input></el-form-item>
        <el-form-item label="userid"><el-input v-model="form.audituserid"></el-input></el-form-item>
        <el-form-item label="日期">
        <el-date-picker v-model="addDate" type="date" placeholder="选择日期"></el-date-picker>
        </el-form-item>
        <el-form-item label="是否异常">
          <el-radio-group v-model="form.auditerror">
            <el-radio label="1">是</el-radio>
            <el-radio label="0">否</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="稽核概述"><el-input v-model="form.auditresult"></el-input></el-form-item>
        <el-form-item label="反馈附件"><el-input v-model="form.auditfile"></el-input></el-form-item>
        <el-form-item label="备注"><el-input v-model="form.auditremark"></el-input></el-form-item>
        <el-form-item label="状态">
          <el-radio-group v-model="form.status">
            <el-radio label="1">启用</el-radio>
            <el-radio label="0">禁用</el-radio>
          </el-radio-group>
        </el-form-item>
        <!-- <el-form-item label="反馈时间"><el-input v-model="form.createtime"></el-input></el-form-item> -->
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
        "auditcode":'', //稽核编码
        "audittype":'', //稽核内容
        "auditname":'', //稽核人员
        "audituserid":'', //userid
        "audityear":'', //年度
        "auditmonth":'', //月度
        "auditday":'', //日
        "auditerror":'', //是否异常
        "auditresult":'', //稽核概述
        "auditfile":'', //反馈附件
        "auditremark":'', //备注
        "status":'1', //状态
        "alternate1":"",
        "alternate2":"",
        "alternate3":"",
        "alternate4":"",
        "alternate5":"",
        "createtime":this.newDate(), //反馈时间
      }
      console.log(this.newDate())
      this.dialogaudit=true
    },
    eadtClick(e){
      this.dialogaudit=true
      console.log(e)
      this.form=e
    },
    auditSub(){
      if(!this.form.id){
            var date = this.dategsh(this.addDate);
            this.form.audityear=date.YYYY
            this.form.auditmonth=date.MM
            this.form.auditday=date.DD
      }
      this.$axios.post(this.$store.state.url+"tgzqnew/impVol/updateAuditNetOrder", this.$querystring.stringify({
        content:JSON.stringify(this.form)
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
      this.$axios.get(this.$store.state.url+"tgzqnew/impVol/selectAuditNetOrderList", {
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
    },
  },
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