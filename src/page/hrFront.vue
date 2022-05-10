<template>
  <div class="BPMlist">
    <div class="head">
      
      <div class="headLogo" style="margin-top:10px"></div>
      <!-- <span class="headDate">
        <p >星期{{ week }}</p>
        <p>{{ date }}</p>
      </span> -->
      <h1 class="headHr" >人力驾驶舱</h1>
      <div class="headTime" >{{ time }}</div>
    </div>
    <el-row :gutter="24" style="margin: 10px 0px 0px 0px">
      <el-col :span="6">
        <el-card class="card" >
            <div>
                <p class="line">人员总量</p>
                <img src="../assets/hrFront/leftTitle.png"  height="20px" />
            </div>
            <div class="fullBoreBar">
                <div class="fullBore">
                    <p>全口径</p>
                    <span>6000<p style="padding: 10px 0px 0px 10px">人</p></span>
                </div> 
                <div>
                     <div ref="comparison" style="height: 200px; width: 200px"></div>
                </div>
            </div>
         
          <div class="fullBoreBar">
              <div class="leftFull">
                  <p class="leftFullWr">合同制</p>
                  <span>3287<span style="font-size: 12px;">人</span></span>
                  <p class="leftFullWr" style="margin:20px 0 0 20px">同比 <span class="yearOnYear">12.4%</span></p>
                  <p class="leftFullWr" style="margin:10px 0 28px 20px">环比<span  class="yearOnYear" style="color: #0FFD8F;">3.66%</span></p>
              </div>
              <div class="leftFull">
                  <p class="leftFullWr">紧密型外包</p>
                  <span>3287<span style="font-size: 12px;">人</span></span>
                  <p class="leftFullWr" style="margin:20px 0 0 20px">同比 <span class="yearOnYear">12.4%</span></p>
                  <p class="leftFullWr" style="margin:10px 0 28px 20px">环比<span  class="yearOnYear" style="color: #0FFD8F;">3.66%</span></p>
              </div>
          </div>
        </el-card>
        <el-card style="margin-top: 30px;margin-left:10px" class="card">
          <div style="margin-left: 25px">
                <p class="line">人员结构</p>
                <img src="../assets/hrFront/leftTitle.png"  height="20px" />
            </div>
            <div class="hrData">
                <div ref="education" class="changeData"></div>
                <div ref="age" class="changeData"></div>
            </div>
             <div class="hrData">
                <div ref="profession"  class="changeData"></div>
                <div ref="talent" class="changeData"></div>
            </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="card">
          <div slot="header" >
                
                <div class="central">人员效能</div>
                <div style="margin-left:35px;">
                  <img src="../assets/hrFront/central.png"  width="800px" />
                </div>
                
                <div class="ranking"> 
                  <span class="national">全国排名</span>
                  <span class="south">南方排名</span>
                  <img src="../assets/hrFront/ranking.png" width="800px" height="20px"/>
                 
                </div>
                <div class="centralPic">
                    <div class="science">
                      <div class="chain">
                        <p style="margin:10px 0 10px 121px;">环比</p>
                        <span class="percent">3.66%</span>
                      </div>
                      <div class="chainMiddle">
                        <span class="percentageNum">78.52<span class="percentage">%</span></span>
                        <p class="laborRate">全员劳产率</p>
                      </div>
                      <div class="chainRight">
                        <p style="margin:10px 0 10px 40px;">同比</p>
                        <span class="percent" style="margin-left:40px;">12.4%</span>
                      </div>
                    </div>
                    <div class="science">
                      <div class="scienceNum" style="margin: -100px 0 0px 60px;">
                        <span class="percentageNum">78.52<span class="percentage">%</span></span>
                        <p class="laborRate" style="margin-top:-85px">科创人才占比</p>
                      </div>
                      <div class="scienceNum" style="margin: 10px 0 0 80px;">
                        <span class="percentageNum">78.52<span class="percentage">%</span></span>
                        <p class="laborRate" style="margin-top:-85px">人工成本利润率</p>
                      </div>
                      <div class="scienceNum" style="margin: -100px 0 0px 90px;">
                        <span class="percentageNum">78.52<span class="percentage">%</span></span>
                        <p class="laborRate" style="margin-top:-85px">人均创收</p>
                      </div>
                    </div>
                    <div class="central" style="margin-top:20px">人员效能</div>
                    <div style="margin-left:35px;">
                      <img src="../assets/hrFront/central.png"  width="800px" />
                    </div>
                </div>
              <div class="analyze">
                <div>
                  <div>
                    <img src="../assets/hrFront/resultLeft.png" width="6px" height="10px"/>
                    <span class="result">营销结果</span>
                    <img src="../assets/hrFront/resultRight.png" width="6px" height="10px"/>
                  </div>
                  <div class="perCapitaTop">
                    <div class="perCapita opportunities" >人均创收</div>
                    <div class="perCapita opportunities" style="margin-left:10px">客户收入覆盖率</div>
                  </div>
                  <div>
                     <div ref="perCapitaIncome" style="height: 200px; width: 250px"></div>
                  </div>
                </div>
                <div>
                   <!-- <div> -->
                    <div>
                      <img src="../assets/hrFront/resultLeft.png" width="6px" height="10px"/>
                      <span class="result">营销过程</span>
                      <img src="../assets/hrFront/resultRight.png" width="6px" height="10px"/>
                    </div>
                    <div class="perCapitaTop">
                      <div class="deliveryRate  opportunities">交付率</div>
                      <div class="deliveryRate opportunities" style="margin-left:10px">商机转化率</div>
                    </div>
                    <div class="perCapitaTop">
                      <div class="deliveryRate opportunities" >人均商机数</div>
                      <div class="deliveryRate opportunities" style="margin-left:10px">人均客户拜访数</div>
                    </div>
                    <div>
                      <div ref="business" style="height: 200px; width: 250px"></div>
                    </div>
                  <!-- </div> -->
                </div>
                <div>
                   <!-- <div> -->
                    <div>
                      <img src="../assets/hrFront/resultLeft.png" width="6px" height="10px"/>
                      <span class="result">团队管理</span>
                      <img src="../assets/hrFront/resultRight.png" width="6px" height="10px"/>
                    </div>
                    <div>
                       <div class="perCapitaTop">
                          <div class="deliveryRate  opportunities">销售配置到位率</div>
                          <div class="deliveryRate opportunities" style="margin-left:10px">考勤达标率</div>
                        </div>
                        <div class="perCapitaTop">
                          <div class="deliveryRate opportunities" >认证通过率</div>
                          <div class="deliveryRate opportunities" style="margin-left:10px">薪酬绩效同向</div>
                        </div>
                    </div>
                    <div>
                      <div ref="team" style="height: 200px; width: 250px"></div>
                    </div>
                  </div>
                <!-- </div> -->
              </div>
            </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="card" style="margin-right:10px">
          <div>
            <p class="line" style="margin-left:320px">关键人才</p>
            <img src="../assets/hrFront/rightTitle.png"  height="20px"  width="420px"/>  
          </div>
          <div class="analyze">
            <div class="rightPic">
              <p class="leftFullWr" style="margin-bottom:5px">科创人才</p>
              <p class="leftFullNum">165<span>人</span></p>
            </div>
            <div class="rightPic"  style="margin-left:10px">
              <p class="leftFullWr" style="margin-bottom:5px">研发人员</p>
              <p class="leftFullNum">165<span>人</span></p>
            </div>
            <div class="rightPic" style="margin-left:10px">
              <p class="leftFullWr" style="margin-bottom:5px">政企上级</p>
              <p class="leftFullNum">165<span>人</span></p>
            </div>
          </div>
          <div class="analyze" style="margin-top:10px">
            <div class="rightPic">
              <p class="leftFullWr" style="margin-bottom:5px">政企下级</p>
              <p class="leftFullNum">165<span>人</span></p>
            </div>
            <div class="rightPic"  style="margin-left:10px">
              <p class="leftFullWr" style="margin-bottom:5px">智慧沃商工程师</p>
              <p class="leftFullNum">165<span>人</span></p>
            </div>
            <div class="rightPic" style="margin-left:10px">
              <p class="leftFullWr" style="margin-bottom:5px">智慧家庭工程师</p>
              <p class="leftFullNum">165<span>人</span></p>
            </div>
          </div>
          <div style="text-align:center;margin-top:20px">
            <img src="../assets/hrFront/resultLeft.png" width="6px" height="10px"/>
            <span class="result">政企下级</span>
            <img src="../assets/hrFront/resultRight.png" width="6px" height="10px"/>
          </div>
          <div>
            <div ref="government" style="height: 200px; width: 400px"></div>
          </div>
          <div>
            <p class="line" style="margin-left:320px">人才引擎</p>
            <img src="../assets/hrFront/rightTitle.png"  height="20px"  width="420px"/>  
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import dayjs from "dayjs";
// import echarts from 'echarts'
export default {
  name: "HrFront",
  data() {
    return {
    //   
    };
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
  mounted() {
      this.monthlyData();
    //   this.drawPie()
      this.totalTeam();
      this.ageBar();
      this.professionBar()
      this.talentBar()
      this.perCapitaBar()
      this.businessLine()
      this.teamLine()
      this.governmentBar()
  },
  methods: {
      
    monthlyData () {
      //初始化容器
      let myChart = this.$echarts.init(this.$refs["comparison"]);
      //初始化图标配置选项
      let option = {
        grid: {
          x: 50,
          y: 35,
          x2: 10,
          y2: 25,
          borderWidth: 1,
        },
        xAxis: {
          type: "category",
          data: [
            "2020",
            "2021",
            "2022",
          ],
          axisLabel: {
            show: true,

            interval: 0,
            textStyle: {
              fontSize: 12,
              color: "#8ED8FF",
            },
          },
          axisLine: {
            lineStyle: {
                color: '#506BFF',
                width: 0.1,
            }
          },
        },
        yAxis: {
          type: "value",
          max: 10000,
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
        },
        legend: {
          itemHeight: 13,
          itemWidth: 13,
          icon: "rect",
          data: ["全口径", "合同制"],
          right: 10,
          textStyle: {
            color: "#FFFFFF",
            fontSize: 12,
          },
          itemGap: 13, //间距
        },
        series: [
          {
            name: "全口径",
            data: [4500, 5800, 7000],
            type: "bar",
            barMaxWidth: 10,
            smooth: true,
            itemStyle: {
              emphasis: {
                barBorderRadius: 10,
              },
              normal: {
                barBorderRadius: 10,
                color: "#FD6C6A"
              },
            },
          },
          {
            name: "合同制",
            data: [6800, 6500, 9000],
            type: "bar",
            barMaxWidth: 10,
            smooth: true,
            itemStyle: {
              emphasis: {
                barBorderRadius: 10,
              },
              normal: {
                barBorderRadius: 10,
                color: this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#FFF6A1" },
                  { offset: 1, color: "#FFB745" },
                ]),
              },
            },
          },
        ],
      };

      //设置成功
      myChart.setOption(option);
      window.addEventListener("resize", () => {
        myChart.resize();
      });
    },
     // 学历拼图
    totalTeam () {
      let myChart = this.$echarts.init(this.$refs["education"]);
      let option = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)",
        },
        legend: {
          itemHeight: 7,
          itemWidth: 7,
          bottom: '3%',
          left: 'center',
          textStyle: {
            color: "#FFFFFF",
            fontSize: 12,
          },
        },
         graphic: {
            type: "text",
            left: "90",
            top: "75",
            style: {
                text: "学历",
                textAlign: "center",
                fill: "#02D3E9",
            }
        },
        series: [
          {
            type: "pie",
            radius: ["50%", "70%"],
            center: ["50%", "40%"],
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
                let colorList = ['#21B1FE ', '#FDAD01', '#F63D8E', '#51FF98'];
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
              { value: 145, name: "博士及以上" },
              { value: 208, name: "硕士" },
              { value: 1448, name: "大学本科" },
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
    // 年龄拼图
    ageBar () {
      let myChart = this.$echarts.init(this.$refs["age"]);
      let option = {
             legend: {
          itemHeight: 7,
          itemWidth: 7,
          bottom: '1%',
          left: 'center',
          textStyle: {
            color: "#FFFFFF",
            fontSize: 12,
          },
        },
         graphic: {
            type: "text",
            left: "90",
            top: "75",
            style: {
                text: "年龄",
                textAlign: "center",
                fill: "#02D3E9",
            }
        },
        series: [
          {
            type: "pie",
            radius: ["50%", "70%"],
            center: ["50%", "40%"],
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
                let colorList = ['#21B1FE ', '#FDAD01', '#F63D8E', '#51FF98'];
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
              { value: 1245, name: "30岁及以下" },
              { value: 208, name: "31-35周岁" },
              { value: 148, name: "35-40周岁" },
              { value: 148, name: "40周岁以上" },
            ],
          },
        ],
      };
      // 绘制图表
      // this.$echarts.init(this.$refs.age).setOption(options);
      myChart.setOption(option);
      window.addEventListener("resize", () => {
        myChart.resize();
      });
    },
    // 专业拼图
    professionBar () {
      let myChart = this.$echarts.init(this.$refs["profession"]);
      let option = {
             legend: {
          itemHeight: 7,
          itemWidth: 7,
          bottom: '1%',
        //   top: "5%",
        //   left:
        //   left: 'center',
          textStyle: {
            color: "#FFFFFF",
            fontSize: 12,
          },
        },
         graphic: {
            type: "text",
            left: "90",
            top: "75",
            style: {
                text: "职务",
                textAlign: "center",
                fill: "#02D3E9",
            }
        },
        series: [
          {
            type: "pie",
            radius: ["50%", "70%"],
            center: ["50%", "40%"],
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
                let colorList = ['#21B1FE ', '#FDAD01', '#F63D8E', '#51FF98'];
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
              { value: 145, name: "中层干部及以上" },
              { value: 208, name: "三级经理" },
              { value: 248, name: "小CEO" },
              { value: 148, name: "普通合同制员工" },
            ],
          },
        ],
            };
            // 绘制图表
            // this.$echarts.init(this.$refs.profession).setOption(options);
            myChart.setOption(option);
            window.addEventListener("resize", () => {
              myChart.resize();
            });
    },
    // 人才
    talentBar(){
         let myChart = this.$echarts.init(this.$refs["talent"]);
      let option = {
             legend: {
          itemHeight: 7,
          itemWidth: 7,
          bottom: '3%',
          left: 'center',
          textStyle: {
            color: "#FFFFFF",
            fontSize: 12,
          },
        },
         graphic: {
            type: "text",
            left: "90",
            top: "75",
            style: {
                text: "人才",
                textAlign: "center",
                fill: "#02D3E9",
            }
        },
        series: [
          {
            type: "pie",
            radius: ["50%", "70%"],
            center: ["50%", "40%"],
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
                let colorList = ['#21B1FE ', '#FDAD01', '#F63D8E', '#51FF98'];
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
              { value: 145, name: "领军人才" },
              { value: 208, name: "专家人才 " },
              { value: 148, name: "骨干人才" },
              { value: 148, name: "新锐人才" },
            ],
          },
        ],
            };
            // 绘制图表
            // this.$echarts.init(this.$refs.profession).setOption(options);
            myChart.setOption(option);
            window.addEventListener("resize", () => {
              myChart.resize();
            });
    },
    // 商机
     businessLine () {
      //初始化容器
      let myChart = this.$echarts.init(this.$refs["business"]);
      //初始化图标配置选项
      let option = {
        grid: {
          x: 40,
          y: 25,
          x2: -5,
          // y2: 25,
        //   top: '20%',
          borderWidth: 1,
        },
        xAxis: {
          type: "category",
          
          // boundaryGap: true,
          data: [
            "金\n融\n科\n技",
            "云\n网\n生\n态",
            "现\n代\n服\n务",
            "交\n通\n物\n流",
            "智\n慧\n城\n市",
            "智\n能\n制\n造",
            "教\n育\n医\n疗"
          ],
          axisLabel: {
            show: true,

            interval: 0,
            textStyle: {
              fontSize: 12,
              color: "#8ED8FF",
            },
          },
          axisLine: {
            lineStyle: {
                color: '#506BFF',
                width: 0.1,
            }
          },
        },
        yAxis: {
          type: "value",
          max: 100,
          axisLabel: {
            show: true,
            interval: "auto",
            formatter: "{value}%",
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
        },
        series: [
          {
            
            data: [80, 50, 60, 55, 60, 80, 70],
            type: "line",
            symbol: "circle",
            symbolSize: 10,
            itemStyle: {
              emphasis: {
                barBorderRadius: 10,
              },
              normal: {
                barBorderRadius: 10,
                color: "#5CFAA9"
              },
            },
            lineStyle: {
              color: "#5CFAA9",
            },
          },
        ],
      };

      //设置成功
      myChart.setOption(option);
      window.addEventListener("resize", () => {
        myChart.resize();
      });
    },
      // 人均创收
     perCapitaBar () {
      //初始化容器
      let myChart = this.$echarts.init(this.$refs["perCapitaIncome"]);
      //初始化图标配置选项
      let option = {
        grid: {
          x: 35,
          y: 25,
          x2: -5,
          // y2: 25,
        //   top: '20%',
          borderWidth: 1,
        },
        xAxis: {
          type: "category",
          data: [
            "金\n融\n科\n技",
            "云\n网\n生\n态",
            "现\n代\n服\n务",
            "交\n通\n物\n流",
            "智\n慧\n城\n市",
            "智\n能\n制\n造",
            "教\n育\n医\n疗"
          ],
          axisLabel: {
            show: true,

            interval: 0,
            textStyle: {
              fontSize: 12,
              color: "#8ED8FF",
            },
          },
          axisLine: {
            lineStyle: {
                color: '#506BFF',
                width: 0.1,
            }
          },
        },
        yAxis: {
          type: "value",
          max: 500,
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
        },
        series: [
          {
            // name: "合同制",
            data: [380, 350, 320, 340, 360, 380, 370],
            type: "bar",
            barMaxWidth: 10,
            smooth: true,
            itemStyle: {
              emphasis: {
                barBorderRadius: 10,
              },
              normal: {
                barBorderRadius: 2,
                color: this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#FF5CA3" },
                  { offset: 1, color: "#9263DF" },
                ]),
              },
            },
          },
        ],
      };

      //设置成功
      myChart.setOption(option);
      window.addEventListener("resize", () => {
        myChart.resize();
      });
    },
    // 团队管理
     teamLine () {
      //初始化容器
      let myChart = this.$echarts.init(this.$refs["team"]);
      //初始化图标配置选项
      let option = {
        grid: {
          x: 40,
          y: 25,
          x2: -5,
          // y2: 25,
        //   top: '20%',
          borderWidth: 1,
        },
        xAxis: {
          type: "category",
          
          // boundaryGap: true,
          data: [
            "金\n融\n科\n技",
            "云\n网\n生\n态",
            "现\n代\n服\n务",
            "交\n通\n物\n流",
            "智\n慧\n城\n市",
            "智\n能\n制\n造",
            "教\n育\n医\n疗"
          ],
          axisLabel: {
            show: true,

            interval: 0,
            textStyle: {
              fontSize: 12,
              color: "#8ED8FF",
            },
          },
          axisLine: {
            lineStyle: {
                color: '#506BFF',
                width: 0.1,
            }
          },
        },
        yAxis: {
          type: "value",
          max: 100,
          axisLabel: {
            show: true,
            interval: "auto",
            formatter: "{value}%",
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
        },
        series: [
          {
            
            data: [80, 50, 60, 55, 60, 80, 70],
            type: "line",
            symbol: "circle",
            symbolSize: 10,
            itemStyle: {
              emphasis: {
                barBorderRadius: 10,
              },
              normal: {
                barBorderRadius: 10,
                color: "#5CFAA9"
              },
            },
            lineStyle: {
              color: "#5CFAA9",
            },
          },
        ],
      };

      //设置成功
      myChart.setOption(option);
      window.addEventListener("resize", () => {
        myChart.resize();
      });
    },
    // 政企下级
     governmentBar () {
      //初始化容器
      let myChart = this.$echarts.init(this.$refs["government"]);
      //初始化图标配置选项
      let option = {
        grid: {
          x: 35,
          y: 25,
          x2: -5,
          // y2: 25,
        //   top: '20%',
          borderWidth: 1,
        },
        xAxis: {
          type: "category",
          data: [
            "南区",
            "北区",
            "西区",
            "东区",
            "闵行",
            "宝山",
            "青浦",
            "奉贤",
            "嘉定",
            "松江",
            "金山",
            "崇明",
            "临港",
          ],
          axisLabel: {
            show: true,

            interval: 0,
            textStyle: {
              fontSize: 12,
              color: "#8ED8FF",
            },
          },
          axisLine: {
            lineStyle: {
                color: '#506BFF',
                width: 0.1,
            }
          },
        },
        yAxis: {
          type: "value",
          max: 500,
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
        },
        series: [
          {
            // name: "合同制",
            data: [380, 350, 320, 340, 360, 380, 370, 320, 330, 350, 310, 360, 355] ,
            type: "bar",
            barMaxWidth: 10,
            smooth: true,
            itemStyle: {
              emphasis: {
                barBorderRadius: 10,
              },
              normal: {
                barBorderRadius: 2,
                color: this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#91D4FE" },
                  { offset: 1, color: "#0AAEFF" },
                ]),
              },
            },
          },
        ],
      };

      //设置成功
      myChart.setOption(option);
      window.addEventListener("resize", () => {
        myChart.resize();
      });
    },
  },
};
</script>
<style lang="less" scoped >
.card .text {
  /* color: white; */
  /* padding: 8px; */
  margin-top: 10px;
}
.headTime{
  font-family: Helvetica;
  font-size: 40px;
  color: #FFFFFF;
  letter-spacing: 0;
  text-align: center;
  font-weight: 400;
  margin-right:20px;
  margin-top:20px
}
.headLogo{
    height: 42px;
    width: 75px;
    margin-left:20px;
    background: url("../assets/hrFront/logo.png") 100%;
}
.fullBoreBar{
    display: flex;
    justify-content: space-between;
}
.fullBore{
    width: 155px;
    height: 171px;
    margin-top: 15px;
    background: url("../assets/hrFront/fullBore.png") 100%;
    background-image: linear-gradient(90deg, #3D3299 6%, #7F54A5 97%);
    border-radius: 60px 10px 10px 10px;
    // margin-left: 10px;
    // text-align: center;
    // line-height: 171px;
    p{
        font-family: PingFangSC-Medium;
        font-size: 14px;
        color: #FFFFFF;
        letter-spacing: 0;
        line-height: 14px;
        padding: 54px 0 17px 10px; 
        
    }
    span{
        font-family: PingFangSC-Semibold;
        font-size: 40px;
        color: #FFFFFF;
        letter-spacing: 0;
        line-height: 40px;
        padding-left: 10px;
        // margin-top: 17px
    }
}
.leftFullWr{
  font-family: PingFangSC-Medium;
  font-size: 12px;
  color: #1DB1FF;
  letter-spacing: 0;
  line-height: 18px;
  margin: 14px 0 15px 20px;
}
.leftFull{
    height: 179px;
    width: 230px;
    background: rgba(0,48,102,0.20);
    border: 1px solid rgba(0,98,209,0.50);
    // p{
        
    // }
    span{
        font-family: PingFangSC-Medium;
        font-size: 34px;
        color: #FFFFFF;
        letter-spacing: 0;
        line-height: 34px;
        margin: 14px 0 0 20px;
    }
    .yearOnYear{
        font-family: PingFangSC-Medium;
        font-size: 24px;
        color: #F64454;
        letter-spacing: 0;
        line-height: 24px;
        margin-left: 61px;
    }
    
}
.chain{
  width: 185px;
  height: 62px;
  background: url("../assets/hrFront/chain.png") center;
  margin-left: 132px;
  margin-top: -40px;
  background-size: 100% 100%;

}
.percent{
   font-family: PingFangSC-Medium;
    font-size: 24px;
    color: #0FFD8F;
    letter-spacing: 0;
    line-height: 24px;
    margin-left: 80px;
    // margin-top: 10px;
}
.laborRate{
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #46BFFF !important;
  letter-spacing: 0;
  text-align: center;
  line-height: 14px;
  margin-top: -90px;
}
.chainMiddle{
  width: 242px;
  height: 242px;
  margin-top: -130px;
  background: url("../assets/hrFront/chainMiddle.png") center;
  background-size: 100% 100%;
  text-align: center;
  line-height: 300px;
}
 .percentage{
    font-family: PingFangSC-Medium;
    font-size: 12px;
    color: #FFFFFF;
    letter-spacing: 0;
    text-align: center;
    line-height: 12px;
 }
.scienceNum{
  width: 200px;
  height: 200px;
  background: url("../assets/hrFront/scienceLeft.png") center;
  background-size: 100% 100%;
  text-align: center;
  line-height: 250px;
}
// .talent{
//   margin: -20px 0 0 60px;
// }
.percentageNum{
    font-family: PingFangSC-Medium;
    font-size: 30px;
    color: #FFFFFF;
    letter-spacing: 0;
    text-align: center;
    line-height: 30px;
    // margin-top: 100px;
}
.chainRight{
  width: 185px;
  height: 62px;
  margin-top: -40px;
  background: url("../assets/hrFront/chainRight.png") center;
  background-size: 100% 100%;
}
.headDate{
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #FFFFFF;
  letter-spacing: 0;
  font-weight: 400;
  position: absolute;
  margin-left: 1.3%;
  margin-top:5px
}
/* .element.style{
    background-image: linear-gradient(180deg, #00D887 0%, #15E0AC 100%);
  } */

.head {
  height: 80px;
  background: url("../assets/hrFront/top.png");
  display: flex;
  justify-content: space-between;
  margin-bottom: 45px;
  .headHr {
    font-family: PingFangSC-Semibold;
    font-size: 36px;
    color: #fff ;
    letter-spacing: 0;
    text-align: center;
    font-weight: 600;
    margin-top:15px
    
  }
}
.BPMlist {
  background: url("../assets/background/background.jpg") 100%;
}
.contractSystem {
  width: 40px;
  height: 30px;
}
.hrData {
  display: flex;
  flex-direction: row;
}
.changeData{
  width: 260px;
  height: 200px;
  background: rgba(4,32,96,0.40);
  
}
/deep/.el-card__header {
//   background: rgba(38, 46, 108, 0.52);
//   height: 38px;
  padding: 0px 0px;
  border: transparent;
}
.card .p {
    font-family: PingFangSC-Medium;
    font-size: 18px;
    color: #FFFFFF;
    letter-spacing: 0;
    line-height: 18px;
    
}
.centralPic{
    // width: 859px;
    height: 400px;
    // margin-left: 24px;
    background: url("../assets/hrFront/centralPic.png") center;
    background-size: 100% 100%;
    // display: flex;
    margin-top: 45px;
    p{
      font-family: PingFangSC-Medium;
      font-size: 12px;
      color: #FFFFFF;
      letter-spacing: 0;
      line-height: 12px;
    }
}
.science{
  display: flex;
}
.line{
     font-family: PingFangSC-Medium;
    font-size: 18px;
    color: #FFFFFF;
    letter-spacing: 0;
    line-height: 18px;
    margin-left: 10px; 
}
.central{
    width: 800px;
    margin-left: 35px;
    font-family: PingFangSC-Medium;
    font-size: 18px;
    color: #FFFFFF;
    letter-spacing: 0;
    text-align: center;
    line-height: 18px;
}
.ranking{
    width: 800px;
    margin-top: 20px;
    margin-left: 35px;
  span{
      font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #FFFFFF;
        letter-spacing: 0;
        line-height: 14px;
  } 

}
.national{
    margin: 0px 0 20px 15%;
  }
  .south{
    margin-left: 55%;
  }
/deep/.el-card {
  // opacity: 0.46;
  background: rgba(14,34,89,0.79);
  border: 1px solid rgba(11,62,187,0.79);
  // border: 1px solid rgba(11,62,187,0.79);
}
.analyze{
  display: flex;
  justify-content: space-around;
  text-align: center;
}
.result{
  font-family: PingFangSC-Medium;
  font-size: 12px;
  color: #FFFFFF;
  letter-spacing: 0;
  line-height: 12px;
}
.perCapitaTop{
  display: flex;
  margin-top:10px;
}
.perCapita{
  width: 121px;
  height: 74px;
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #FFFFFF;
  letter-spacing: 0;
  text-align: center;
  line-height: 74px;
}
.opportunities{
  background: #062E7E;
  border-radius: 2px;
  border-radius: 2px;
  font-size: 14px;
  color: #FFFFFF;
  letter-spacing: 0;
  text-align: center;
}
.deliveryRate{
  width: 140px;
  height: 32px;
  text-align: center;
  line-height: 32px;
}
.rightPic{
  width: 140px;
  height: 75px;
  background: url("../assets/hrFront/rightPic.png") center;
  background-size: 100% 100%;
  text-align: left;
  span{
    font-family: PingFangSC-Medium;
    font-size: 12px;
    color: #FFFFFF;
    letter-spacing: 0;
  }
}
.leftFullNum{
  font-family: PingFangSC-Semibold;
  font-size: 30px;
  color: #FFFFFF;
  letter-spacing: 0;
  line-height: 30px;
  margin: 0 0 0  20px
}
</style>