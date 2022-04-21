<template>
  <div>
    <div class='nav'>
      <h2>信息安全部</h2>
    </div>
    <img class="banner" src="../assets/banner.jpg" alt="" />
    <h3 class="tc banner-taiti">信息安全部工作台</h3>
    <div class="con-box">
      <el-row :gutter="36" >
        <el-col :span="8">
          <el-card class="box-card">
            <div class="bc-taiti">台账</div>
            <ul class='box-cList'>
              <li @click="nextLink('#/audit')">信安部稽核</li>
              <li>网信安报告</li>
              <li  @click="nextLink('#/FnetBeOver')">集客固网预期清单</li>
              <li @click="nextLink('#/msreport')">管理架构月度工作</li>
            </ul>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card class="box-card">
            <div class="bc-taiti">流程</div>
            <!-- <ul class='box-cList'>
              <li @click="nextLink('#/audit')">信安部稽核</li>
              <li>网信安报告</li>
              <li  @click="nextLink('#/FnetBeOver')">集客固网预期清单</li>
              <li>管理架构月度工作</li>
            </ul> -->
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card class="box-card">
            <div class="bc-taiti">管理功能</div>
            <!-- <ul class='box-cList'>
              <li @click="nextLink('#/audit')">信安部稽核</li>
              <li>网信安报告</li>
              <li  @click="nextLink('#/FnetBeOver')">集客固网预期清单</li>
              <li>管理架构月度工作</li>
            </ul> -->
          </el-card>
        </el-col>
      </el-row>
    </div>
    <el-card class="box-card" v-if="false">
      <!-- <el-tabs v-model="activeName" class="" type="card" @tab-click="handleClick">
        <el-tab-pane name="1">
            <span slot="label"><i class="el-icon-star-on"></i> 所有流程</span>
        </el-tab-pane>
        <el-tab-pane name="2">
            <span slot="label"><i class="el-icon-s-platform"></i> 业务门户</span>
        </el-tab-pane>
        <el-tab-pane name="3">
            <span slot="label"><i class="el-icon-s-marketing"></i> 统计分析</span>
        </el-tab-pane>
        <el-tab-pane name="4">
            <span slot="label"><i class="el-icon-s-tools"></i> 系统配置</span>

        </el-tab-pane>
      </el-tabs> -->
      <ul class="tp-list clearfix">
        <li v-for="i in 12" :key="i" @click="nextLink('/')">
          <el-row :gutter="20">
            <el-col :span="12" class="tr">
              <img src="../assets/icon/icon11.png" alt=""
            /></el-col>
            <el-col :span="12" class="tl">
              <span>信息化网络稽核</span>
              <a href="">查看</a></el-col
            >
          </el-row>
        </li>
      </ul>
    </el-card>
    <!-- <div class="div-box">
      <div class="l"></div>
      <div class="r"></div>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "1",
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
    // this.getAuditInfo();
    console.log(this.$store)
  },

  methods: {
    handleClick() {},
    nextLink(e) {
      window.location.href = e;
    },
    goAddpage() {
      this.$axios
        .get("/tgzqnew/impVol/selectAuditNetOrder", {
          auditcode: "1001",
          audituserid: "qiandajian1",
          audityear: "2021",
          auditmonth: "12",
          auditday: "27",
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

<style>
.banner-taiti{
  line-height: 80px;
  }
.bc-taiti{
  color: #333;
  line-height: 36px;
  font-weight: 800;
}
.nav{
  padding: 0 40px;
    height: 45px;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 999;
    background: rgba(82,90,108,.5);
    
}
.nav h2{
  color: #fff;
  font-size: 20px;
  line-height: 45px;
}
.tr {
  text-align: right;
}
.tl {
  text-align: left;
}
.tc {
  text-align: center;
}
.el-tabs__item {
  /* width: 25%;
  text-align: center;
  font-size: 16px; */
}
.tp-list {
  list-style: none;
  padding: 0 !important;
  /* border: 1px solid #eaeefb; */
  border-radius: 4px;
  color: #5e6d82;
}
.tp-list li span {
  display: inline-block;
  width: 100%;
}
.clearfix:after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
.tp-list li {
  cursor: pointer;
  float: left;
  width: 20%;
  text-align: center;
  padding: 42px 0;
  color: #666;
  font-size: 13px;
  /* border-right: 1px solid #eee;
    border-bottom: 1px solid #eee; */
  margin-right: -1px;
  margin-bottom: -1px;
}
.tp-list li:hover {
  box-shadow: 0 2px 12px 0 rgb(0, 0, 0, 0.2);
  position: relative;
  z-index: 2;
  transition: 0.3s;
}
.banner {
  display: block;
  width: 100%;
}
.con-box{
  width: 800px;
  margin: auto;
}
.box-card {
  width: 100%;
  position: relative;
  min-height: 320px;
  /* margin: -100px auto 0 auto; */
  box-shadow: 0 2px 12px 0 rgb(0, 0, 0, 0.2);
}
.box-cList{
  list-style: none;
  padding: 0 !important;
  line-height: 42px;
  color: #5e6d82;
}
.box-cList li{
  cursor: pointer;
}
.box-cList li:hover {
  color: #000;
  position: relative;
  transition: 0.3s;
}

.div-box{
  width: 200px;
  height: 35px;
  border-radius: 4px;
  /* overflow: hidden; */
}
.div-box .l,.div-box .r{
  height: 100%;
  float: left;
}
.div-box .l{
  
  width: 48%;
  background: #f00;
}
.div-box .r{
  width: 52%;
  background: #5e6d82;
}
.div-box .r:after{
  content: '';
  display: block;
    width: 0;
    height: 0;
    border-left: 0px solid red;
    border-right: 15px solid transparent;
    border-bottom: 35px solid red;
    z-index: 1;
}


</style>