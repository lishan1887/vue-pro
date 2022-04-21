<template>
  <div class="p15">
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item label="日期">
        <el-date-picker v-model="formDate" type="date" placeholder="选择日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="queryList">查询</el-button>
        <el-button type="primary" @click="dialogaudit=true">新增</el-button>
        <!-- <el-button type="primary" @click="onSubmit">修改</el-button> -->
      </el-form-item>
    </el-form>
    <el-card style="width: 100%">
      <!-- <el-row>
        <el-col :span="100">
          <el-button type="primary" @click="goAddpage">新增</el-button>
          <el-button type="success" @click="goAddpage">修改</el-button>
          <el-button type="danger" @click="goAddpage">删除</el-button>
        </el-col>
      </el-row> -->
      <el-table :data="auditData" border>
        <el-table-column prop="auditcode" label="稽核编码"></el-table-column>
        <el-table-column prop="audittype" label="稽核内容"></el-table-column>
        <el-table-column prop="auditname" label="稽核人员"></el-table-column>
        <el-table-column prop="audituserid" label="userid"></el-table-column>
        <el-table-column prop="audityear" label="年度"></el-table-column>
        <el-table-column prop="auditmonth" label="月度"></el-table-column>
        <el-table-column prop="auditday" label="日"></el-table-column>
        <el-table-column prop="auditerror" label="是否异常"></el-table-column>
        <el-table-column prop="auditresult" label="稽核概述"></el-table-column>
        <el-table-column prop="auditfile" label="反馈附件"></el-table-column>
        <el-table-column prop="auditremark" label="备注"></el-table-column>
        <el-table-column prop="status" label="状态"></el-table-column>
        <el-table-column prop="createtime" label="反馈时间"></el-table-column>
      </el-table>
      <!-- <el-table
        :data="auditData"
        border
        max-height="730"
        style="width: 100%; text-align: center"
        stripe
      >
        <el-table-column
          type="index"
          label="序号"
          style="text-align: center"
          width="100"
        >
        </el-table-column>

        <el-table-column
          prop="auditcode"
          style="text-align: center"
          label="稽核编码"
          width="80"
        >
        </el-table-column>

        <el-table-column prop="auditinfo" label="稽核点" width="150">
        </el-table-column>

        <el-table-column
          prop="auditname"
          label="稽核人员"
          style="text-align: center"
          width="80"
        >
        </el-table-column>

        <el-table-column
          prop="alternate1"
          label="本月稽核是否异常"
          style="text-align: center"
          width="200"
        >
        </el-table-column>

        <el-table-column
          prop="auditresult"
          label="本月稽核情况概述"
          width="400"
        >
        </el-table-column>

        <el-table-column prop="filelist" label="附件">
          <template scope="scope" style="text-align: center">
            <span v-for="i of scope.row.filelist">
              <a :href="i.link">{{ i.title }}</a
              ><br />
            </span>
          </template>
        </el-table-column>

        <el-table-column label="操作" width="130px">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="primary"
              icon="el-icon-edit"
            ></el-button>
            <el-button
              size="mini"
              type="danger"
              icon="el-icon-delete"
              @click="removeById(scope.row.goods_id)"
            ></el-button>
          </template>
        </el-table-column>
      </el-table> -->
    </el-card>
    <el-dialog title="新增" :visible.sync="dialogaudit" width="50%">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="稽核编码"><el-input v-model="form.auditcode"></el-input></el-form-item>
        <el-form-item label="稽核内容"><el-input v-model="form.audittype"></el-input></el-form-item>
        <el-form-item label="稽核人员"><el-input v-model="form.auditname"></el-input></el-form-item>
        <el-form-item label="userid"><el-input v-model="form.audituserid"></el-input></el-form-item>
        <el-form-item label="是否异常"><el-switch v-model="form.auditerror"></el-switch></el-form-item>
        <el-form-item label="稽核概述"><el-input v-model="form.auditresult"></el-input></el-form-item>
        <el-form-item label="反馈附件"><el-input v-model="form.auditfile"></el-input></el-form-item>
        <el-form-item label="备注"><el-input v-model="form.auditremark"></el-input></el-form-item>
        <el-form-item label="状态"><el-input v-model="form.status"></el-input></el-form-item>
        <el-form-item label="反馈时间"><el-input v-model="form.createtime"></el-input></el-form-item>
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
      dialogaudit:false,
      form:{
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
        "status":'', //状态
        "createtime":'', //反馈时间
      },
      formDate: new Date("2021-12-27"),

      //查询参数对象
      queryInfo: {
        query: "",
        pagenum: 1,
        pagesize: 10,
      },

      list: [],

      //商品列表
      goodslist: [],

      //总数据条数
      total: 0,

      auditData: [],
    };
  },

  created() {
    this.getAuditInfo();
  },

  methods: {
    auditSub(){
      let data={
        "auditcode":"1006",
        "audittype":"信安类投申诉日进展",
        "auditname":"胡泓",
        "audituserid":"huhong",
        "audityear":"2021",
        "auditmonth":"12",
        "auditday":"27",
        "auditerror":"",
        "auditresult":"",
        "auditfile":"",
        "auditremark":"",
        "status":"1",
        "alternate1":"",
        "alternate2":"",
        "alternate3":"",
        "alternate4":"",
        "alternate5":"",
        "createtime":"2021-12-2707:38:16"
      }
      this.$axios.post("/tgzqnew/impVol/updateAuditNetOrder", data)
        .then((res) => {
          console.log(res);
          // this.auditData = res.data.data;
        });
    },
    dategsh(de) {
      if (de == "") {
        return "";
      }
      if (typeof de == "string") {
        de = new Date(de);
      }
      let YYYY = de.getFullYear();
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
    queryList() {
      // http://localhost:3300/tgzqnew/impVol/selectAuditNetOrderList?audityear=2021&auditmonth=12&auditday=27
      var date = this.dategsh(this.formDate);
      this.$axios.get("/tgzqnew/impVol/selectAuditNetOrderList", {
          params: {
            audityear: date.YYYY,
            auditmonth: date.MM,
            auditday: date.DD,
          },
        })
        .then((res) => {
          console.log(res);
          this.auditData = res.data.data;
        });
    },
    goAddpage() {
      this.$axios
        .get("/tgzqnew/impVol/selectAuditNetOrder", {
          params: {
            auditcode: "1001",
            audituserid: "qiandajian1",
            audityear: "2021",
            auditmonth: "12",
            auditday: "27",
          },
        })
        .then((res) => {
          console.log(res);
        });
    },
    //查询稽核信息汇总
    getAuditInfo() {
      this.$axios
        .get("/tgzqnew/impVol/selectAuditOrder", {
          params: {
            audityear: 2021,
            auditmonth: 12,
          },
        })
        .then((res) => {
          if (res.data.code == 200) {
            let arr = res.data.data;
            arr.forEach((item) => {
              item.filelist = [];
              if (item.auditfile !== null && item.auditfile != "") {
                let arr = item.auditfile.split(",");
                for (let i of arr) {
                  item.filelist.push({
                    link: i,
                    title: decodeURIComponent(
                      i.slice(
                        Number(i.indexOf("original=") + 9),
                        i.indexOf("&TENANT_ID")
                      )
                    ),
                  });
                }
              } else {
                item.filelist = [
                  {
                    link: "",
                    title: "",
                  },
                ];
              }

              this.list.push(item);

              //  this.auditData.push(item);
            });

            this.auditData = this.list.sort((a, b) => {
              return a.auditcode - b.auditcode;
            });

            console.log(this.auditData);
          } else {
            this.$message({ message: "参数错误", type: "warning" });
          }
        });
    },
  },
};
</script>
<style  >
.p15 {
  padding: 15px;
}
</style>