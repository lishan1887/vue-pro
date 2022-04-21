<template>
  <div>
    <img class="banner" src="../assets/banner.jpg" alt="" />
    <el-card class="box-card">
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
    this.getAuditInfo();
  },

  methods: {
    handleClick() {},
    nextLink(e) {
      window.location.href = "#/audit";
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

<style loce>
.tr {
  text-align: right;
}
.tl {
  text-align: left;
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
.box-card {
  width: 70%;
  position: relative;
  top: -80px;
  left: 15%;
  min-height: 600px;
  /* margin: -100px auto 0 auto; */
}
</style>