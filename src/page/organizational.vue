<template>
    <div class="BPMlist">
        <div class="heard">
             <span class="heardTime">{{ time }}</span>
            <span class="heardDate">
                <p >星期{{ week }}</p>
                <p>{{ date }}</p>
            </span>
            <h1>人力资源驾驶舱</h1>
        </div>
        <div class="list" style="margin:10px 10px 0 10px"><span>组织指标列表</span></div>
        <el-table
            :data="tableData"
            ref="singleTable"
            @current-change="handleCurrentChange"
            :row-class-name="tableRowClassName"
            :header-cell-style="{background:'#010820',color: '#FFFFFF'}"
            style="width: 99%;margin:0 10px 0 10px">
            <el-table-column
                prop="date"
                label="二级单位"
                :cell-style="{ background: '#0C96DA' }"
                width="120">
                </el-table-column>
                <el-table-column
                prop="date"
                label="分类1"
                width="110">
                </el-table-column>
                <el-table-column
                prop="date"
                label="分类2"
                width="110">
                </el-table-column>
                <el-table-column
                prop="date"
                label="分类3"
                width="110">
                </el-table-column>
                <el-table-column label="用工总量">
                    <el-table-column
                    prop="province"
                    label="合同"
                    width="60">
                    </el-table-column>
                    <el-table-column
                    prop="city"
                    label="派遣"
                    width="60">
                    </el-table-column>
                    <el-table-column
                    prop="address"
                    label="外包"
                    width="60">
                    </el-table-column>
            </el-table-column>
            <el-table-column label="合同制编制">
                    <el-table-column
                    prop="province"
                    label="总量"
                    width="60">
                    </el-table-column>
                    <el-table-column
                    prop="city"
                    label="空编"
                    width="60">
                    </el-table-column>
            </el-table-column>
            <el-table-column label="合同制平均三龄">
                    <el-table-column
                    prop="province"
                    label="年龄"
                    width="60">
                    </el-table-column>
                    <el-table-column
                    prop="city"
                    label="司龄"
                    width="60">
                    </el-table-column>
                    <el-table-column
                    prop="address"
                    label="工龄"
                    width="60">
                    </el-table-column>
            </el-table-column>
             <el-table-column label="合同制性别">
                    <el-table-column
                    prop="province"
                    label="男"
                    width="60">
                    </el-table-column>
                    <el-table-column
                    prop="city"
                    label="女"
                    width="60">
                    </el-table-column>
                    <el-table-column
                    prop="address"
                    label="比例"
                    width="60">
                    </el-table-column>
            </el-table-column>
            <el-table-column label="合同制学历">
                    <el-table-column
                    prop="province"
                    label="研究生+"
                    width="60">
                    </el-table-column>
                    <el-table-column
                    prop="city"
                    label="大学本科"
                    width="60">
                    </el-table-column>
                    <el-table-column
                    prop="address"
                    label="合计占比"
                    width="60">
                    </el-table-column>
            </el-table-column>
            <el-table-column label="党员">
                    <el-table-column
                    prop="province"
                    label="党员"
                    width="60">
                    </el-table-column>
                    <el-table-column
                    prop="city"
                    label="占比"
                    width="60">
                    </el-table-column>
            </el-table-column>
            <el-table-column label="合同制人员变化">
                    <el-table-column
                    prop="province"
                    label="入职"
                    width="60">
                    </el-table-column>
                    <el-table-column
                    prop="city"
                    label="辞职"
                    width="60">
                    </el-table-column>
                    <el-table-column
                    prop="city"
                    label="退出"
                    width="60">
                    </el-table-column>
                    <el-table-column
                    prop="city"
                    label="调入"
                    width="60">
                    </el-table-column>
                    <el-table-column
                    prop="city"
                    label="调出"
                    width="60">
                    </el-table-column>
                    <el-table-column
                    prop="city"
                    label="换岗"
                    width="60">
                    </el-table-column>
            </el-table-column>
             <el-table-column label="待入职">
                    <el-table-column
                    prop="province"
                    label="校招"
                    width="60">
                    </el-table-column>
                    <el-table-column
                    prop="city"
                    label="社招">
                    </el-table-column>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
import dayjs from 'dayjs'
export default {
    name: 'Organizational',
    data(){
        return {
             tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },{
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }]
        }
    },
    computed: {
        week() {
        const a = new Array("日", "一", "二", "三", "四", "五", "六");
        const week = new Date().getDay();
        const str = a[week];
        return str;
        },

        date() {
        return dayjs().format("YYYY年MM月DD日");
        },
        time() {
        return dayjs().format("HH:mm");
        },
    },
    mounted(){

    },
    methods:  {
        //奇偶行背景色不同 
        setCurrent(row) {
            this.$refs.singleTable.setCurrentRow(row);
        },
        handleCurrentChange(val) {
            this.currentRow = val;
        },
        tableRowClassName({row, rowIndex}) {
            if ((rowIndex+1) % 2  === 0) {
                return 'success-row';
            }
            return '';
        },
        
    }
}
</script>
<style lang="less">
.el-table, .el-table__expanded-cell, .el-table tr{
         background-color: transparent; 
    /* color: #303133; */
    -webkit-transition: .3s;
    transition: .3s;
    border: transparent;
    // color: #2C9BD7;
}


.el-table__body tr:hover > td{
    background-color:#6347EA !important;
}
</style>

<style scoped lang="less">
.BPMlist{
  background: url("../assets/background/background.jpg") 100%;
  height: 100%;
}
/deep/.el-table thead{
    font-family: PingFangSC-Medium;
    font-size: 16px;
    color: #FFFFFF;
    letter-spacing: 1.6px;
    text-align: center;
    font-weight: 500;
}
/deep/.el-table{
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #FFFFFF;
    letter-spacing: 1.2px;
    text-align: center;
    font-weight: 400;
}
/deep/.el-table .success-row {
    background: rgba(12,150,218,0.50);
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #FFFFFF;
    letter-spacing: 1.2px;
    text-align: center;
    font-weight: 400;
}
/deep/.el-table .el-table__cell{
    text-align: center;
}
.heard{
  height: 99px;
  background: url("../assets/background/heard.png");
  h1{
    font-family: PingFangSC-Semibold;
    font-size: 36px;
    color: #EAD297;
    letter-spacing: 0;
    text-align: center;
    font-weight: 600;
    margin-top:-20px
  }
}
.heardTime{
  font-family: Helvetica;
  font-size: 40px;
  color: #FFFFFF;
  letter-spacing: 0;
  text-align: center;
  font-weight: 400;
  // height: 48px;
  width: 130px;
  margin-left:1.3%;
  position: relative;
  margin-top:10px
}
.heardDate{
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #FFFFFF;
  letter-spacing: 0;
  // text-align: center;
  font-weight: 400;
  // height: 48px;
  // width: 50px;
  position: absolute;
  margin-left: 1.3%;
  margin-top:5px
}
.list{
    width: 99%;
    background: rgba(38,46,108,0.52);
    // box-shadow: inset 0px 1px 20px 3px rgba(44, 155, 215, 0.45);
    height: 38px;
    margin:0 10px 0 10px;
     span{
        font-family: PingFangSC-Medium;
        font-size: 20px;
        color: #FFFFFF;
        letter-spacing: 2px;
        font-weight: 500;
        margin-left: 28px
    }
    
    margin: auto;
    line-height: 38px;
    margin-top:20px
}

</style>
