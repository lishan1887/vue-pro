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
        <el-row type="flex"  justify="space-around" :gutter="24" style="margin: 10px 0px 0px 0px">
            <el-col :span="8" class="rowTop card" style="padding: 0px 0px 0px 0px;">
                <!-- <el-card style="margin-left:10px"> -->
                    <div class="row-bg"  >
                        <h4>本年入职概括</h4>
                    </div>
                    <div class="onboarding">
                        <div class="onboardingNum employee" >合同制员工</div>
                        <span class="number">587
                            <span class="onboardingNum">人</span>
                        </span> 
                    </div>
                    <div class="onboarding dispatch">
                        <div class="onboardingNum employee" >劳务派遣员工</div>
                        <span class="number">73
                            <span class="onboardingNum">人</span>
                        </span> 
                    </div>
                    <div class="onboarding outsourcing">
                        <div class="onboardingNum employee" >紧密型外包</div>
                        <span class="number">1468
                            <span class="onboardingNum">人</span>
                        </span> 
                    </div>
                    <p>全口径:  2008人</p>
                    <div class="stillEmployed">
                        <span>仍在职人数：1280人</span>
                        <!-- <span> -->
                        <div ref="retention" style="width:300px;height:30px;margin:-40px 200px"></div>
                        
                        
                        <!-- <span >保有率 80%</span> -->
                    </div>
                    <div ref="employees" class="changeData"></div>
                <!-- </el-card> -->
            </el-col>
            <el-col :span="8" class="rowTop card" style="padding: 0px 0px 0px 0px;">
                <!-- <el-card class="card"> -->
                    <div  class="row-bg">
                        <h4>实有人数概括</h4>
                    </div>
                    
                    <div class="onboarding">
                        <div class="onboardingNum employee" >合同制员工</div>
                        <span class="number">587
                            <span class="onboardingNum">人</span>
                        </span> 
                    </div>
                    <div class="onboarding dispatch">
                        <div class="onboardingNum employee" >劳务派遣员工</div>
                        <span class="number">73
                            <span class="onboardingNum">人</span>
                        </span> 
                    </div>
                    <div class="onboarding outsourcing">
                        <div class="onboardingNum employee" >紧密型外包</div>
                        <span class="number">1468
                            <span class="onboardingNum">人</span>
                        </span> 
                    </div>
                    <p>全口径: 2008人</p>
                    <div class="stillEmployed">
                        <span>本年净增：1280人</span>
                        <div ref="increase" style="width:300px;height:30px;margin:-40px 200px"></div>
                        <!-- <span >增幅 5.1%</span> -->
                    </div>
                    <div ref="actualNumber" class="changeData"></div>
                <!-- </el-card> -->
            </el-col>
            <el-col :span="8" class="rowTop card" style="padding: 0px 0px 0px 0px;margin-right:20px">
                <!-- <el-card class="card" style="margin-right:20px"> -->
                    <div class="row-bg">
                    <h4>本年离职概括</h4>  
                    </div>
                    <div class="onboarding">
                        <div class="onboardingNum employee" >合同制员工</div>
                        <span class="number">587
                            <span class="onboardingNum">人</span>
                        </span> 
                    </div>
                    <div class="onboarding dispatch">
                        <div class="onboardingNum employee" >劳务派遣员工</div>
                        <span class="number">73
                            <span class="onboardingNum">人</span>
                        </span> 
                    </div>
                    <div class="onboarding outsourcing">
                        <div class="onboardingNum employee" >紧密型外包</div>
                        <span class="number">1468
                            <span class="onboardingNum">人</span>
                        </span> 
                    </div>
                    <p>全口径: 2008人</p>
                    <div class="stillEmployed">
                        <p class="resignation">待离职：30人</p>
                    </div>
                    <div ref="resignation" class="changeData"></div>
                <!-- </el-card> -->
            </el-col>
        </el-row>
        <div class="list"><span>关注队伍人员分布</span></div>
        <el-table
            :data="tableData"
            ref="singleTable"
            class="elTable"
            border
            @current-change="handleCurrentChange"
            :row-class-name="tableRowClassName"
            :header-cell-style="{background:'#010820',color: '#FFFFFF',borderColor:'#2C9BD7'}"
            :cell-style="{borderColor:'#2C9BD7'}"
            style="width: 99%;margin:0 10px 0 10px">
            <el-table-column
                prop="date"
                label="区分"
                
                width="150">
                </el-table-column>
                <el-table-column
                prop="date"
                label="入职人数(占比)"
                width="150">
                </el-table-column>
                <el-table-column
                prop="date"
                label="在职人数(占比)"
                width="150">
                </el-table-column>
                <el-table-column
                prop="date"
                label="离职人数(占比)"
                width="150">
                </el-table-column>
                 <el-table-column
                prop="date"
                label="男性人数(占比)"
                width="150">
                </el-table-column>
                 <el-table-column
                prop="date"
                label="女性人数(占比)"
                width="150">
                </el-table-column>
                <el-table-column
                prop="date"
                label="平均年龄(占比)"
                width="150">
                </el-table-column>
                <el-table-column
                prop="date"
                label="平均工龄(占比)"
                width="150">
                </el-table-column>
                <el-table-column
                prop="date"
                label="平均司龄(占比)"
                width="150">
                </el-table-column>
                <el-table-column
                prop="date"
                label="研究生学历及以上(占比)"
                width="150">
                </el-table-column>
                <el-table-column
                prop="date"
                label="本科人数(占比)"
                width="150">
                </el-table-column>
                <el-table-column
                prop="date"
                label="大学专科学历及以下(占比)"
                width="150">
                </el-table-column>
                <el-table-column
                prop="date"
                label="共产党员(占比)">
                </el-table-column>
        </el-table>
    </div>
</template>
<script>
import dayjs from 'dayjs'
export default {
    name: 'Management',
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
        this.contractBar()
        this.actualLine()
        this.resignationBar()
        this.retentionBar()
        this.increaseBar()
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
        // 保有率分布图
         retentionBar() {
            let myChart = this.$echarts.init(this.$refs["retention"]);
            let option = {
                    title: {
                        text: "保有率",
                        // left: "0px",
                        y: 'center',
                        textStyle: {
                            color: "#02D3E9",
                            fontSize: "14",
                            fontWeight: '600',
                            fontFamily: 'PingFangSC-Semibold',
                            lineHeight: 15,
                        },
                    },
                     grid: {
                        left: '25%',
                        top: '0',
                        right: '0',
                        bottom: '0',
                        containLabel: true,
                        width : '95%'
                    },
                    xAxis: {
                        type: 'value',
                        splitLine: {show: false},
                        axisLabel: {show: false},
                        axisTick: {show: false},
                        axisLine: {show: false},
                    },
                    yAxis: {
                        type: 'category',
                        axisTick: {show: false},
                        axisLine: {show: false},
                        axisLabel: {show: false},
                    },
                    series: [
                        {
                            name: '',
                            type: 'bar',
                            barWidth: 18,
                            data: [50],
                            label: {
                                show: true,
                                // position    : 'middle',
                                offset: [10,2],
                                formatter: '{c}{a}%',
                                color: '#fff',
                                fontSize: 14
                            },
                            itemStyle       : {
                                normal: {
                                    // color: this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    // { offset: 0, color: "#19E3FA " },
                                    // { offset: 1, color: "#19E3FA " },
                                    // ]),
                                    color: "#19E3FA "
                                },
                                barBorderRadius: 9,
                            },
                            zlevel: 1
                        },
                        {
                            name: '进度条背景',
                            type: 'bar',
                            barGap: '-100%',
                            barWidth: 18,
                            data: [100],
                            color: '#114A57',//柱条颜色
                            itemStyle: {
                                normal: {
                                    barBorderRadius: 9,
                                    borderColor: '#114A57',
                                }
                            }
                            // zlevel: 0
                        }
                    ]
                };
            // 绘制图表
            myChart.setOption(option);
            window.addEventListener("resize", () => {
                myChart.resize();
            });
        },
        // 增幅
        increaseBar() {
            let myChart = this.$echarts.init(this.$refs["increase"]);
            let option = {
                    title: {
                        text: "增幅",
                        // left: "0px",
                        y: 'center',
                        textStyle: {
                            color: "#02D3E9",
                            fontSize: "14",
                            fontWeight: '600',
                            fontFamily: 'PingFangSC-Semibold',
                            lineHeight: 15,
                        },
                    },
                     grid: {
                        left: '25%',
                        top: '0',
                        right: '0',
                        bottom: '0',
                        containLabel: true,
                        width : '95%'
                    },
                    xAxis: {
                        type: 'value',
                        splitLine: {show: false},
                        axisLabel: {show: false},
                        axisTick: {show: false},
                        axisLine: {show: false},
                    },
                    yAxis: {
                        type: 'category',
                        axisTick: {show: false},
                        axisLine: {show: false},
                        axisLabel: {show: false},
                    },
                    series: [
                        {
                            name: '',
                            type: 'bar',
                            barWidth: 18,
                            data: [5],
                            label: {
                                show: true,
                                // position    : 'middle',
                                offset: [10,2],
                                formatter: '{c}{a}%',
                                color: '#fff',
                                fontSize: 14
                            },
                            itemStyle       : {
                                normal: {
                                    // color: this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    // { offset: 0, color: "#19E3FA " },
                                    // { offset: 1, color: "#19E3FA " },
                                    // ]),
                                    color: "#1F8EFA "
                                },
                                barBorderRadius: 9,
                            },
                            zlevel: 1
                        },
                        {
                            name: '进度条背景',
                            type: 'bar',
                            barGap: '-100%',
                            barWidth: 18,
                            data: [100],
                            color: '#114A57',//柱条颜色
                            itemStyle: {
                                normal: {
                                    barBorderRadius: 9,
                                    borderColor: '#114A57',
                                }
                            }
                            // zlevel: 0
                        }
                    ]
                };
            // 绘制图表
            myChart.setOption(option);
            window.addEventListener("resize", () => {
                myChart.resize();
            });
        },
        //合同制来源分布图
        contractBar() {
            let myChart = this.$echarts.init(this.$refs["employees"]);
            let option = {
                    title: {
                        text: "合\n同\n制\n来\n源\n分\n布",
                        left: "78px",
                        y: 'center',
                        textStyle: {
                            color: "#02D3E9",
                            fontSize: "14",
                            fontWeight: '600',
                            fontFamily: 'PingFangSC-Semibold',
                            lineHeight: 15,
                        },
                    },
                    tooltip: {
                        trigger: "item",
                        formatter: "{a} <br/>{b}: {c} ({d}%)",
                        },
                    legend: {
                        itemHeight: 15,
                        itemWidth: 17,
                        orient: "vertical",
                        right:'20%',
                        // x: 'right',
                        y: 'center',
                        textStyle: {
                            color: "#FFFFFF",
                            fontSize: 12,
                        },
                    },
                    series: [
                        {
                            name: "合同制来源分布",
                            type: "pie",
                            radius: ["50%", "100%"],
                            center: ["40%", "50%"],
                            avoidLabelOverlap: false,
                            label: {
                                show: false,
                                position: "center",
                            },
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                },
                                normal:{
                                    color: ((params) => {
                                    //自定义颜色
                                    let colorList = ['#007BD8 ', '#D900F7', '#FF7B00'];
                                    return colorList[params.dataIndex]
                                    })
                                }
                            },
                            emphasis: {
                                label: {
                                    show: true,
                                    fontSize: "15",
                                    fontWeight: "bold",
                                },
                            },
                            labelLine: {
                                show: true,
                                },
                            data: [
                                { value: 1445, name: "校招" },
                                { value: 248, name: "社招" },
                                { value: 148, name: "其他" },
                            ],
                        },
                ],
            };

            // 绘制图表
            myChart.setOption(option);
            window.addEventListener("resize", () => {
                myChart.resize();
            });
        },
          // 实有人数对比
        actualLine(){
            let option = {
                    title: {
                        text: "实\n有\n人\n数\n对\n比",
                        left: "40px",
                        y: 'center',
                        textStyle: {
                            color: "#02D3E9",
                            fontSize: "14",
                            fontWeight: '600',
                            fontFamily: 'PingFangSC-Semibold',
                            // lineHeight: 15,
                        },
                    },
                    grid: {
                        x: 100,
                        y: 100,
                        x2: 15,
                        y2: 35,
                        top: '20%',
                        left:'20%',
                        right:'10%',
                        borderWidth: 1,
                    },
                    tooltip: {
                        trigger: "item",
                        formatter: "{a} <br/>{b}: {c} ({d}%)",
                        },
                    xAxis: [
                        {
                            type: 'category',
                            data: ['2020', '2021'],
                            axisLine: {
                                show: true,
                                lineStyle: {
                                    color: '#506BFF',
                                    width:  0.5
                                }
                            }
                        }
                    ],
                    yAxis: [
                        {
                        type: 'value',
                        max: 3000,
                        min: 0,
                        splitNumber : 4,
                        axisLabel: {
                            show: true,
                            textStyle: {
                            fontSize: 12,
                            color: "#8ED8FF",
                            },
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                            width: 0.5,
                            color: "#506BFF",
                            },
                        },
                        }
                    ],
                    legend: {
                        itemHeight: 15,
                        itemWidth: 17,
                        right:'10%',
                        y: 'top',
                        data: ["2020", "2021"],
                        textStyle: {
                            color: "#FFFFFF",
                            fontSize: 12,
                        },
                    },
                    series: [
                        {
                            name: "2020",
                            type: "bar",
                            data: [2200,800,1800],
                            barMaxWidth: 10,
                            barGap: 0,
                            smooth: true,
                            itemStyle: {
                                // emphasis: {
                                    // barBorderRadius: 10,
                                // },
                                normal: {
                                    // barBorderRadius: 10,
                                    color: this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    { offset: 0, color: "#0D99DD" },
                                    { offset: 1, color: "#184194" },
                                    ]),
                                },
                            },
                        },
                        {
                            name: "2021",
                            type: "bar",
                            data: [2500,1000,1500],
                            barMaxWidth: 10,
                            smooth: true,
                            itemStyle: {
                                // emphasis: {
                                    // barBorderRadius: 10,
                                // },
                                normal: {
                                    // barBorderRadius: 10,
                                    color: this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    { offset: 0, color: "#1F8EFA" },
                                    { offset: 1, color: "#184194" },
                                    ]),
                                },
                            },
                        }
                    ],
            };
            this.$echarts.init(this.$refs.actualNumber).setOption(option);
            window.addEventListener("resize", () => {
                myChart.resize();
            });
        },
          // 离职情况
        resignationBar() {
            let option = {
                    title: {
                        text: "离\n职\n情\n况",
                        left: "78px",
                        y: 'center',
                        textStyle: {
                            color: "#02D3E9",
                            fontSize: "14",
                            fontWeight: '600',
                            fontFamily: 'PingFangSC-Semibold',
                            lineHeight: 15,
                        },
                    },
                    tooltip: {
                        trigger: "item",
                        formatter: "{a} <br/>{b}: {c} ({d}%)",
                        },
                    legend: {
                        itemHeight: 15,
                        itemWidth: 17,
                        orient: "vertical",
                        right:'20%',
                        y: 'center',
                        textStyle: {
                            color: "#FFFFFF",
                            fontSize: 12,
                        },
                    },
                    series: [
                        {
                            name: "合同制来源分布",
                            type: "pie",
                            radius: ["50%", "100%"],
                            center: ["40%", "50%"],
                            avoidLabelOverlap: false,
                            label: {
                                show: false,
                                position: "center",
                            },
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                },
                                normal:{
                                    color: ((params) => {
                                    //自定义颜色
                                    let colorList = ['#007BD8 ', '#D900F7', '#FF7B00'];
                                    return colorList[params.dataIndex]
                                    })
                                }
                            },
                            emphasis: {
                                label: {
                                    show: true,
                                    fontSize: "15",
                                    fontWeight: "bold",
                                },
                            },
                            labelLine: {
                                show: true,
                                },
                            data: [
                                { value: 1445, name: "校招" },
                                { value: 248, name: "社招" },
                                { value: 148, name: "其他" },
                            ],
                        },
                ],
            };
            this.$echarts.init(this.$refs.resignation).setOption(option);
            window.addEventListener("resize", () => {
                myChart.resize();
            });
        },
    },
        
}
</script>
<style lang="less">
.el-table, .el-table__expanded-cell, .el-table tr{
    background-color: transparent; 
    -webkit-transition: .3s;
    transition: .3s;
    border: transparent;
}


.el-table__body tr:hover > td{
    background-color:#6347EA !important;
}
</style>

<style scoped lang="less">
.BPMlist{
  background: url("../assets/background/background.jpg") 100%;
//   height: 100%;
}
/deep/.card{
    background-color: transparent; 
    border: transparent;
    box-shadow: inset 0px 1px 20px 3px rgba(44,155,215,0.45);
    // padding-right: 0px;
}
.elTable{
    border: 0.7px solid #2C9BD7;
    box-shadow: inset 0px 1px 20px 3px rgba(44, 155, 215, 0.45);
}

/deep/.el-table thead{
    font-family: PingFangSC-Medium;
    font-size: 16px;
    color: #FFFFFF;
    letter-spacing: 1.6px;
    text-align: center;
    font-weight: 500;
}

.rowTop{
    margin-left: 20px;
    // padding: 0px 0px 0px 0px;
    p{
        font-family: PingFangSC-Medium;
        font-size: 18px;
        color: #FFFFFF;
        letter-spacing: 0;
        font-weight: 500;
        text-align: right;
        margin: 10px 10% 5px;
    }
}
.row-bg {
    // padding: 10px 0;
    background: rgba(38,46,108,0.52);
    box-shadow: inset 0px 1px 20px 3px rgba(44, 155, 215, 0.45);
    // margin-top:20px;
    width: 100%;
    height: 38px;
    // margin-left:15px;
    
    h4{
        font-family: PingFangSC-Medium;
        font-size: 20px;
        color: #FFFFFF;
        letter-spacing: 2px;
        font-weight: 500;
        margin-left: 28px;
        line-height: 38px;
        width: 100%;
    }
  }

  .changeData{
    // width: 300px;
    height: 160px;
    margin: 10px  0  20px;
    }
    .stillEmployed{
        width: 572px;
        height: 48px;
        background:  rgba(5,39,119,0.60);
        margin: 10px 10px 30px 15px;
        span{
            font-family: PingFangSC-Semibold;
            font-size: 14px;
            color: #02D3E9;
            letter-spacing: 0;
            font-weight: 600;
            line-height: 48px;
            margin-left: 23px;
        }
        p{
            font-family: PingFangSC-Semibold;
            font-size: 14px;
            color: #02D3E9;
            letter-spacing: 0;
            font-weight: 600;
            line-height: 48px;
        }
    }
  .onboarding{
      background: url("../assets/background/onboarding.png");
      display: flex;
      height: 62px;
      width: 571.47px;
      margin-left: 20px;
      margin-top:5px;
      text-align: center;
      line-height: 62px;
      .onboardingNum{
          font-family: PingFangSC-Medium;
            font-size: 14px;
            color: #FFFFFF;
            letter-spacing: 0;
            font-weight: 500;
            // line-height: 20px;
      }
       .number{
          font-family: AdobeGothicStd-Bold;
        font-size: 48px;
        color: #FFFFFF;
        letter-spacing: 0;
        font-weight: 700;
         margin-left: 70px;
      }
      .employee{
          margin-left: 74.75px;
          width: 84.39px;
      }
    

  }
  .dispatch{
        background: url("../assets/background/dispatch.png");
      }
    .outsourcing{
        background: url("../assets/background/outsourcing.png");
    }
/deep/.el-table{
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #FFFFFF;
    letter-spacing: 1.2px;
    text-align: center;
    font-weight: 400;
		 &::before {
			  height: 0px;
              box-shadow: inset 0px 1px 20px 3px rgba(44, 155, 215, 0.45);
		  }
		  &::after {
			 width: 0;
		  }
		 .el-table__fixed:before {
			 height: 0;
		  }
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
  margin-bottom: 10px;
  h1{
    font-family: PingFangSC-Semibold;
    font-size: 36px;
    color: #EAD297;
    letter-spacing: 0;
    text-align: center;
    font-weight: 600;
    margin-top:-20px
  }
    p{
        text-align: left;
        /* padding-right: 50px; */
        /* margin-top: 10px; */
        font-family: PingFangSC-Medium;
        font-size: 14px;
        color: #FFFFFF;
        letter-spacing: 0;
        font-weight: 400;
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
    box-shadow: inset 0px 1px 20px 3px rgba(44, 155, 215, 0.45);
    height: 38px;
    margin:0 10px 0 10px;
    // margin-top: 20px;
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
