<template>
  <div class="BPMlist">
    <div class="head">
      
      <div class="headLogo" style="margin-top:20px"></div>
      <!-- <span class="headDate">
        <p >星期{{ week }}</p>
        <p>{{ date }}</p>
      </span> -->
      <h1 class="headHr" >人力驾驶舱</h1>
      <div class="headTime" >{{ time }}</div>
    </div>
    <el-row :gutter="24" style="margin: 10px 0px 0px 0px">
      <el-col :span="6">
        <!-- <el-card class="card"> -->
        <div class="cardUp">
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
                  <div class="leftFullWr" style="margin:20px 0 0 20px">同比 <span class="yearOnYear">12.4%</span>
                    <img src="../assets/hrFront/addPic.png"  height="24px" style="margin-left:3px"/>
                  </div>
                  <p class="leftFullWr" style="margin:10px 0 28px 20px">环比<span  class="yearOnYear" style="color: #0FFD8F;">3.66%</span>
                    <img src="../assets/hrFront/reduce.png"  height="24px" style="margin-left:5px"/>
                  </p>
              </div>
              <div class="leftFull" style="margin-left:10px">
                  <p class="leftFullWr">紧密型外包</p>
                  <span>3287<span style="font-size: 12px;">人</span></span>
                  <p class="leftFullWr" style="margin:20px 0 0 20px">同比 <span class="yearOnYear">12.4%</span>
                    <img src="../assets/hrFront/addPic.png"  height="24px" style="margin-left:3px"/>
                  </p>
                  <p class="leftFullWr" style="margin:10px 0 28px 20px">环比<span  class="yearOnYear" style="color: #0FFD8F;">3.66%</span>
                    <img src="../assets/hrFront/reduce.png"  height="24px" style="margin-left:5px"/>
                  </p>
              </div>
          </div>
        </div>
        <!-- </el-card> -->
        <div class="cardlower">
        <!-- <el-card style="margin-top: 30px;margin-left:10px" class="card"> -->
          <div >
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
        <!-- </el-card> -->
        </div>
      </el-col>
      <el-col :span="12">
        <div class="card">
        <!-- <el-card class="card"> -->
          <div slot="header" >
                
                <div class="central">人员效能</div>
                <div style="margin-left:35px;">
                  <img src="../assets/hrFront/central.png"  width="800px" />
                </div>
                
                <div class="ranking">
                  <span class="leftRank">05</span> 
                  <span class="national">全国排名</span>
                  <span class="south">南方排名</span>
                  <span class="rightRank">02</span> 
                  <img src="../assets/hrFront/ranking.png" width="800px" height="20px"/>
                 
                </div>
                <div class="centralPic">
                    <div class="science">
                      <div class="chain">
                        <p style="margin:10px 0 10px 121px;">环比</p>
                        <img src="../assets/hrFront/reduce.png"  height="24px" style="margin-left:60px"/>
                        <span class="percent">3.66%</span>
                      </div>
                      <div class="chainMiddle">
                        <span class="percentageNum">78.52<span class="percentage">%</span></span>
                        <p class="laborRate">全员劳产率</p>
                      </div>
                      <div class="chainRight">
                        <p style="margin:10px 0 10px 40px;">同比</p>
                        <span class="percent" style="margin-left:40px;color: #F64454;">12.4%</span>
                        <img src="../assets/hrFront/addPic.png"  height="24px" style="margin-left:5px"/>
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
                        <span class="percentageNum">78.52<span class="percentage">万/人</span></span>
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
                    <div class="perCapita opportunities" @click="marketingClick(1)" :class="{actionsColor:clickColor==1}">人均创收</div>
                    <div class="perCapita opportunities" style="margin-left:10px" @click="marketingClick(2)" :class="{actionsColor:clickColor==2}">客户收入覆盖率</div>
                  </div>
                  <div>
                     <div ref="perCapitaIncome" style="height: 280px; width: 250px" v-show="clickColor==1"></div>
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
                      <div class="deliveryRate  opportunities" @click="processClick(1)" :class="{actionsColor:processColor==1}">交付率</div>
                      <div class="deliveryRate opportunities" style="margin-left:10px" @click="processClick(2)" :class="{actionsColor:processColor==2}">商机转化率</div>
                    </div>
                    <div class="perCapitaTop">
                      <div class="deliveryRate opportunities" @click="processClick(3)" :class="{actionsColor:processColor==3}">人均商机数</div>
                      <div class="deliveryRate opportunities" style="margin-left:10px" @click="processClick(4)" :class="{actionsColor:processColor==4}">人均客户拜访数</div>
                    </div>
                    <div>
                      <div ref="business" style="height: 280px; width: 250px"></div>
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
                          <div class="deliveryRate  opportunities" @click="teamClick(1)" :class="{actionsColor:teamColor==1}">销售配置到位率</div>
                          <div class="deliveryRate opportunities" style="margin-left:10px" @click="teamClick(2)" :class="{actionsColor:teamColor==2}">考勤达标率</div>
                        </div>
                        <div class="perCapitaTop">
                          <div class="deliveryRate opportunities" @click="teamClick(3)" :class="{actionsColor:teamColor==3}">认证通过率</div>
                          <div class="deliveryRate opportunities" style="margin-left:10px" @click="teamClick(4)" :class="{actionsColor:teamColor==4}">薪酬绩效同向</div>
                        </div>
                    </div>
                    <div>
                      <div ref="team" style="height: 280px; width: 250px"></div>
                    </div>
                  </div>
                <!-- </div> -->
              </div>
            </div>
        <!-- </el-card> -->
        </div>
      </el-col>
      <el-col :span="6">
        <div class="cardRightUp">
        <!-- <el-card class="card" style="margin-right:10px"> -->
          <div>
            <p class="line" style="margin-left:320px">关键人才</p>
            <img src="../assets/hrFront/rightTitle.png"  height="20px"  width="420px"/>  
          </div>
          <div class="analyze" style="margin-top:20px">
            <div class="rightPic" @click="keyTalent(1)" :class="{active:activeName==1}">
              <p class="leftFullWr" style="margin-bottom:5px" :class="{actions:activeName==1}">科创人才</p>
              <p class="leftFullNum">165<span>人</span></p>
            </div>
            <div class="rightPic"  style="margin-left:10px" @click="keyTalent(2)" :class="{active:activeName==2}">
              <p class="leftFullWr" style="margin-bottom:5px" :class="{actions:activeName==2}">研发人员</p>
              <p class="leftFullNum">165<span>人</span></p>
            </div>
            <div class="rightPic" style="margin-left:10px" @click="keyTalent(3)" :class="{active:activeName==3}">
              <p class="leftFullWr" style="margin-bottom:5px" :class="{actions:activeName==3}">政企上级</p>
              <p class="leftFullNum">165<span>人</span></p>
            </div>
          </div>
          <div class="analyze" style="margin-top:10px">
            <div class="rightPic" @click="keyTalent(4)" :class="{active:activeName==4}">
              <p class="leftFullWr" style="margin-bottom:5px" :class="{actions:activeName==4}">政企下级</p>
              <p class="leftFullNum">165<span>人</span></p>
            </div>
            <div class="rightPic"  style="margin-left:10px" @click="keyTalent(5)" :class="{active:activeName==5}">
              <p class="leftFullWr" style="margin-bottom:5px" :class="{actions:activeName==5}">智慧沃商工程师</p>
              <p class="leftFullNum">165<span>人</span></p>
            </div>
            <div class="rightPic" style="margin-left:10px" @click="keyTalent(6)" :class="{active:activeName==6}">
              <p class="leftFullWr" style="margin-bottom:5px" :class="{actions:activeName==6}">智慧家庭工程师</p>
              <p class="leftFullNum">165<span>人</span></p>
            </div>
          </div>
          <div style="text-align:center;margin-top:20px">
            <img src="../assets/hrFront/resultLeft.png" width="6px" height="10px"/>
            <span class="result" v-if="activeName==1">科创人才</span>
            <span class="result" v-if="activeName==2">研发人员</span>
            <span class="result" v-if="activeName==3">政企上级</span>
            <span class="result" v-if="activeName==4">政企下级</span>
            <span class="result" v-if="activeName==5">智慧沃商工程师</span>
            <span class="result" v-if="activeName==6">智慧家庭工程师</span>
            <img src="../assets/hrFront/resultRight.png" width="6px" height="10px"/>
          </div>
          <div >
            <div ref="division" style="height: 200px; width: 400px" v-show="activeName==1"></div>
            <div ref="research" style="height: 200px; width: 400px" v-show="activeName==2"></div>
            <div ref="superior" style="height: 200px; width: 400px" v-show="activeName==3"></div>
            <div ref="government" style="height: 200px; width: 400px" v-show="activeName==4"></div>
            <div ref="yosho" style="height: 200px; width: 400px" v-show="activeName==5"></div>
            <div ref="family" style="height: 200px; width: 400px" v-show="activeName==6"></div>
          </div>
          <div ref="innovation" style="height: 200px; width: 400px" v-show="activeName==1"></div>
          <div ref="develop" style="height: 200px; width: 400px" v-show="activeName==2"></div>
          <div ref="enterprise" style="width:400px;height:180px;" v-show="activeName==3"></div>
          <div ref="subordinates" style="width:400px;height:180px;" v-show="activeName==4"></div>
          <div ref="smart" style="width:400px;height:180px;" v-show="activeName==5"></div>
          <div ref="homeEngineer" style="width:400px;height:180px;" v-show="activeName==6"></div>
        </div>
        <!-- </el-card> -->
        <div class="cardRightLower">
           <div>
              <p class="line" style="margin-left:320px">人才引擎</p>
              <img src="../assets/hrFront/rightTitle.png"  height="20px"  width="420px"/>  
            </div>
            <div class="fullBoreBar"  style="margin-top:30px">
              <div>
                <div class="fullBoreBar">
                  <div class="intelligence">人工智能</div>
                  <div class="technology">科创人才</div>
                </div>
                
                <div class="fullBoreBar">
                  <div class="capabilities">云能力</div>
                  <div>
                    <p class="big">大数据</p>
                    <p  class="safety">网络安全</p>
                  </div>
                  <div  class="Internet">物联网</div>
                </div>
              </div>
              <div>
                <p class="intelligent">人工智能</p>
                <div class="artificial">
                  <span class="leftFullWr">实有</span>
                  <span class="number" style="margin-left:40px">465<span class="result">人</span></span>
                </div>
                <div class="artificial" >
                  <span class="leftFullWr" >在岗</span>
                  <span class="number"  style="margin-left:40px">433<span class="result">人</span></span>
                </div>
              </div>
            </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import dayjs from "dayjs";
export default {
  name: "HrFront",
  data() {
    return {
      activeName: 3,
      clickColor: 1,
      processColor: 1,
      teamColor:  1,
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
      this.monthlyData();      // 人员总量
      this.totalTeam();        // 学历    
      this.ageBar();           // 年龄
      this.professionBar();    // 职务拼图
      this.talentBar();        // 人才
      this.perCapitaBar();     // 人均创收 
      this.businessLine();     // 商机
      this.teamLine();         // 团队管理
      this.superiorBar();      // 政企上级
      this.superiorPie();      // 政企上级
      this.divisionBar();      // 科创人才
      this.governmentBar();    // 政企下级
      this.yoshoBar();         // 智慧沃商
      this.familyBar();        // 智慧家庭
      this.researchBar();       // 研发人员
      this.researchPie();
      this.innovationPie();
      this.subordinatesPie();
      this.smartPie()         // 智慧沃商
      this.homeEngineerPie()  // 智慧家庭
  },
  methods: {
    // 关键人才
    keyTalent(index){
        this.activeName = index;
    },
    // 营销结果
    marketingClick(index){
      this.clickColor = index
    },
    // 营销过程
    processClick(index){
      this.processColor = index
    },
    // 团队管理
    teamClick(){
      this.teamColor = index
    },
    // 人员总量
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
              formatter: "{a}<br/>{b}: {c}({d}%)",
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
                left: "100",
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
                name: "学历",
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
             tooltip: {
              trigger: "item",
              formatter: "{a} <br/>{b}: {c} ({d}%)",
            },
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
                left: "100",
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
                name: "年龄",
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
          myChart.setOption(option);
          window.addEventListener("resize", () => {
            myChart.resize();
          });
        },
    // 职务拼图
    professionBar () {
      let myChart = this.$echarts.init(this.$refs["profession"]);
      let option = {
            tooltip: {
                trigger: "item",
                formatter: "{a} <br/>{b}: {c} ({d}%)",
              },
             legend: {
              itemHeight: 7,
              itemWidth: 7,
              bottom: '1%',
              textStyle: {
                color: "#FFFFFF",
                fontSize: 12,
              },
            },
            graphic: {
                type: "text",
                left: "100",
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
                name: "职务",
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
            myChart.setOption(option);
            window.addEventListener("resize", () => {
              myChart.resize();
            });
    },
    // 人才
    talentBar(){
         let myChart = this.$echarts.init(this.$refs["talent"]);
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
                left: "100",
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
                name: "人才",
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
            showBackground: true,
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
    // 智慧沃商工程师
    yoshoBar () {
      //初始化容器
      let myChart = this.$echarts.init(this.$refs["yosho"]);
      //初始化图标配置选项
      let option = {
        grid: {
          x: 35,
          y: 25,
          x2: -5,
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
            showBackground: true,
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
     // 智慧家庭工程师
    familyBar () {
      //初始化容器
      let myChart = this.$echarts.init(this.$refs["family"]);
      //初始化图标配置选项
      let option = {
        grid: {
          x: 35,
          y: 25,
          x2: -5,
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
            showBackground: true,
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
    // 科创人才
    divisionBar(){
        // if(this.activeName == 3){
      let myChart = this.$echarts.init(this.$refs.division);
      let option = {
        grid: {
          x: 35,
          y: 25,
          x2: -5,
          borderWidth: 1,
        },
        xAxis: {
          type: "category",
          data: [
            "政企线",
            "市场线",
            "网络线",
            "数字化线",
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
            data: [380, 350, 320, 340] ,
            type: "bar",
            barMaxWidth: 10,
            showBackground: true,
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
    // 研发人员
    researchBar(){
        // if(this.activeName == 3){
      let myChart = this.$echarts.init(this.$refs.research);
      let option = {
        grid: {
          x: 35,
          y: 25,
          x2: -5,
          borderWidth: 1,
        },
        xAxis: {
          type: "category",
          data: [
            "政企线",
            "市场线",
            "网络线",
            "数字化线",
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
            data: [380, 350, 320, 340] ,
            type: "bar",
            barMaxWidth: 10,
            showBackground: true,
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
    // 政企上级
    superiorBar(){
       let myChart = this.$echarts.init(this.$refs['superior']);
      let option = {
        grid: {
          x: 35,
          y: 25,
          x2: -5,
          borderWidth: 1,
        },
        xAxis: {
          type: "category",
          data: [
            "金融科技",
            "云网生态",
            "现代服务",
            "交通物流",
            "智慧城市",
            "智能制造",
            "教育医卫",
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
            data: [380, 350, 320, 340, 360, 350,340] ,
            type: "bar",
            barMaxWidth: 10,
            showBackground: true,
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
            showBackground: true,
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
    // 科创
    innovationPie() {
      let myChart = this.$echarts.init(this.$refs["innovation"]);
      let option = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)",
        },
        legend: {
          orient: "vertical",
          icon:"circle",
          align:"left",
          right:20,
          y: "center",
          itemWidth:8,
          textStyle: {
            color: "#FFFFFF",
            fontSize: 12,
          },
        },
        series: [
          {
            type: "pie",
            name: "政企上级",
            radius: ["45%", "80%"],
            center: ["40%", "40%"],
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
                let colorList = [ '#DE3C56','#51FD97','#8064A2','#F79646'];
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
              { value: 145, name: "政企线" },
              { value: 208, name: "市场线" },
              { value: 148, name: "网格线" },
              { value: 148, name: "数字化线" },
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
    // 研发
    researchPie() {
      let myChart = this.$echarts.init(this.$refs["develop"]);
      let option = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)",
        },
        legend: {
          orient: "vertical",
          icon:"circle",
          align:"left",
          right:20,
          y: "center",
          itemWidth:8,
          textStyle: {
            color: "#FFFFFF",
            fontSize: 12,
          },
        },
        series: [
          {
            type: "pie",
            name: "政企上级",
            radius: ["45%", "80%"],
            center: ["40%", "40%"],
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
                let colorList = [ '#DE3C56','#51FD97','#8064A2','#F79646'];
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
              { value: 145, name: "科创" },
              { value: 208, name: "自研" },
              { value: 148, name: "政府" },
              { value: 148, name: "运营" },
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
     // 政企上级
    superiorPie() {
      let myChart = this.$echarts.init(this.$refs["enterprise"]);
      let option = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)",
        },
        legend: {
          orient: "vertical",
          icon:"circle",
          align:"left",
          right:20,
          y: "center",
          itemWidth:8,
          textStyle: {
            color: "#FFFFFF",
            fontSize: 12,
          },
        },
        series: [
          {
            type: "pie",
            name: "政企上级",
            radius: ["45%", "80%"],
            center: ["40%", "40%"],
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
                let colorList = ['#4A5CC7 ', '#15299C', '#236D22', '#DE3C56','#51FD97','#8064A2','#F79646'];
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
              { value: 145, name: "金融科技" },
              { value: 208, name: "云网生态" },
              { value: 148, name: "现代服务" },
              { value: 148, name: "交通物流" },
              { value: 148, name: "智慧城市" },
              { value: 148, name: "智能制造" },
              { value: 148, name: "教育医卫" },
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
     // 政企下级
    subordinatesPie() {
      let myChart = this.$echarts.init(this.$refs["subordinates"]);
      let option = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)",
        },
        legend: {
          orient: "vertical",
          icon:"circle",
          align:"left",
          right:20,
          y: "center",
          itemWidth:8,
          textStyle: {
            color: "#FFFFFF",
            fontSize: 12,
          },
        },
        series: [
          {
            type: "pie",
            name: "政企上级",
            radius: ["45%", "80%"],
            center: ["40%", "40%"],
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
                let colorList = ['#4A5CC7 ', '#15299C', '#236D22','#0E0C76', '#DE3C56','#51FD97','#530A8D','#9BBB59','#4BACC5','#8064A2','#F79646','#2C4D75','#772B2A'];
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
              { value: 145, name: "南区" },
              { value: 208, name: "北区" },
              { value: 148, name: "西区" },
              { value: 148, name: "东区" },
              { value: 148, name: "闵行区" },
              { value: 148, name: "宝山区" },
              { value: 148, name: "青浦区" },
              { value: 148, name: "奉贤区" },
              { value: 148, name: "嘉定区" },
              { value: 148, name: "松江区" },
              { value: 148, name: "金山区" },
              { value: 148, name: "崇明区" },
              { value: 148, name: "临港" },
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
    // 智慧沃商工程师
    smartPie() {
      let myChart = this.$echarts.init(this.$refs["smart"]);
      let option = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)",
        },
        legend: {
          orient: "vertical",
          icon:"circle",
          align:"left",
          right:20,
          y: "center",
          itemWidth:8,
          textStyle: {
            color: "#FFFFFF",
            fontSize: 12,
          },
        },
        series: [
          {
            type: "pie",
            name: "政企上级",
            radius: ["45%", "80%"],
            center: ["40%", "40%"],
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
                let colorList = ['#4A5CC7 ', '#15299C', '#236D22','#0E0C76', '#DE3C56','#51FD97','#530A8D','#9BBB59','#4BACC5','#8064A2','#F79646','#2C4D75','#772B2A'];
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
              { value: 145, name: "南区" },
              { value: 208, name: "北区" },
              { value: 148, name: "西区" },
              { value: 148, name: "东区" },
              { value: 148, name: "闵行区" },
              { value: 148, name: "宝山区" },
              { value: 148, name: "青浦区" },
              { value: 148, name: "奉贤区" },
              { value: 148, name: "嘉定区" },
              { value: 148, name: "松江区" },
              { value: 148, name: "金山区" },
              { value: 148, name: "崇明区" },
              { value: 148, name: "临港" },
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
     // 智慧沃商工程师
    homeEngineerPie() {
      let myChart = this.$echarts.init(this.$refs["homeEngineer"]);
      let option = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)",
        },
        legend: {
          orient: "vertical",
          icon:"circle",
          align:"left",
          right:20,
          y: "center",
          itemWidth:8,
          textStyle: {
            color: "#FFFFFF",
            fontSize: 12,
          },
        },
        series: [
          {
            type: "pie",
            name: "政企上级",
            radius: ["45%", "80%"],
            center: ["40%", "40%"],
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
                let colorList = ['#4A5CC7 ', '#15299C', '#236D22','#0E0C76', '#DE3C56','#51FD97','#530A8D','#9BBB59','#4BACC5','#8064A2','#F79646','#2C4D75','#772B2A'];
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
              { value: 145, name: "南区" },
              { value: 208, name: "北区" },
              { value: 148, name: "西区" },
              { value: 148, name: "东区" },
              { value: 148, name: "闵行区" },
              { value: 148, name: "宝山区" },
              { value: 148, name: "青浦区" },
              { value: 148, name: "奉贤区" },
              { value: 148, name: "嘉定区" },
              { value: 148, name: "松江区" },
              { value: 148, name: "金山区" },
              { value: 148, name: "崇明区" },
              { value: 148, name: "临港" },
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
  },
};
</script>
<style lang="less" scoped >
.card .text {
  /* color: white; */
  /* padding: 8px; */
  margin-top: 10px;
}
.cardUp{
  padding:0 20px 20px 20px;
  background: url("../assets/hrFront/cardUp.png") center;
  background-size: 100% 100%;
}
.cardlower{
  // padding:0 20px 20px 20px;
  background: url("../assets/hrFront/cardlower.png") center;
  background-size: 100% 100%;
  margin: 30px 0 20px 0px;
  // padding:0 20px 20px 20px
}
.cardRightUp{
  padding:0 20px 20px 20px;
  background: url("../assets/hrFront/cardRightUp.png") center;
  background-size: 100% 100%;
}
.cardRightLower{
  height: 260px;

  background: url("../assets/hrFront/cardRightLower.png") center;
  background-size: 100% 100%;
  margin: 30px 0 20px 10px;
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
    margin-left: 20px;
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
    background: url("../assets/hrFront/leftFull.png") center;
    background-size: 100% 100%;
    // background: rgba(0,48,102,0.20);
    // border: 1px solid rgba(0,98,209,0.50);
    // border: 1px solid rgba(0,98,209,0.50);
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
        margin-left: 50px;
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
    margin-left: 5px;
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
  background: url("../assets/hrFront/background.png") 100%;
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
  // background: rgba(4,32,96,0.40);
  
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
    margin-left: 40px;
  // span{
      
  // } 

}
.leftRank{
  font-family: LcdD;
  font-size: 60px;
  color: #F6FF1C;
  letter-spacing: 0;
  text-align: right;
  line-height: 60px;
  margin-left: 10px;
}

.rightRank{
  font-family: DS-DIGII;
  font-size: 60px;
  color: #1FFF39;
  letter-spacing: 0;
  text-align: right;
  line-height: 60px;
  margin-left: 25px;
}
.national{
    margin: 0px 0 0px 40px;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #FFFFFF;
    letter-spacing: 0;
    line-height: 14px;
  }
  .south{
    margin-left: 55%;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #FFFFFF;
    letter-spacing: 0;
    line-height: 14px;
  }
/deep/.el-card {
  // opacity: 0.6;
  background: rgba(14,34,89,0.79);
  // border: 1px solid rgba(11,62,187,0.79);
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
  width: 110px;
  height: 74px;
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #FFFFFF;
  letter-spacing: 0;
  text-align: center;
  line-height: 74px;
}
.opportunities{
  color: #23A1EF;
  background: rgba(14,34,89,0.79);
  border-radius: 2px;
  border-radius: 2px;
  font-size: 14px;
  letter-spacing: 0;
  text-align: center;
  // opacity: 0.28;
}
.actionsColor{
  color: #fff;
  background: #092C79;

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
.active{
    width: 140px;
    height: 75px;
    background: url("../assets/hrFront/rightBack.png") center;
    background-size: 100% 100%;
    
}
.actions{
  color: #FFFFFF;
}
.leftFullNum{
  font-family: PingFangSC-Semibold;
  font-size: 30px;
  color: #FFFFFF;
  letter-spacing: 0;
  line-height: 30px;
  margin: 0 0 0  20px
}
.artificial{
  width: 178px;
  height: 54px;
  background: url("../assets/hrFront/artificial.png") center;
  background-size: 100% 100%;
  text-align: center;
  line-height: 54px;
  margin: 20px 0 20px 0;
  // margin-left: 100px;
}
.number{
  font-family: PingFangSC-Medium;
  font-size: 28px;
  color: #FFFFFF;
  letter-spacing: 0;
  // text-align: right;
  line-height: 28px;
}
.intelligence{
  width: 147px;
  height: 49px;
  border: 1px dashed #FFD52E;
  border-radius: 6px;
  // border-radius: 6px;
  color: #FFD52E;
  font-size: 32px;
  text-align: center;
  line-height: 48px;
  margin-left: 10px;
}
.technology{
  font-family: PingFangSC-Medium;
  font-size: 22px;
  color: #E6A3D3;
  letter-spacing: 0;
  line-height: 48px;
  text-align: center;
  height: 49px;
  margin-left: 5px;
  // margin: 10px ;
}
.capabilities{
  width: 28px;
  height: 84px;
  font-family: PingFangSC-Medium;
  font-size: 28px;
  color: #0447FF;
  letter-spacing: 0;
  line-height: 28px;
  margin: 20px 0 0 10px;
}
.big{
  font-family: PingFangSC-Medium;
  font-size: 48px;
  color: #14EEFF;
  letter-spacing: 0;
  line-height: 48px;
  margin: 20px 0 10px 0px;
}
.safety{
  font-family: PingFangSC-Medium;
  font-size: 30px;
  color: #FFD52E;
  letter-spacing: 0;
  line-height: 30px;
  margin: 16px 0 10px 15px;
}
.Internet{
  height: 100px;
  width: 34px;
  font-family: PingFangSC-Medium;
  font-size: 34px;
  color: #4553DC;
  letter-spacing: 0;
  line-height: 32.6px;
  margin-top: 20px;
}
.intelligent{
  font-family: PingFangSC-Medium;
  font-size: 16px;
  color: #FFFFFF;
  letter-spacing: 0;
  line-height: 16px;
}
</style>