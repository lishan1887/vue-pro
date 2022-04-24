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
    <el-row :gutter="24" style="margin-top: 10px">
      <el-col :span="8" class="hr1">
        <el-card class="card" style="margin-left:10px">
          <div slot="header" style="margin-left: 25px">
            <p>队伍总量</p>
          </div>
          <div class="text">
            <div class="fullBore">
              <div style="margin-top:7px"><span>全口径员工</span></div>
              <p style="font-size: 48px;margin-top:7px;">1935
                <span>人</span>
              </p>
              
            </div>
            <div class="contract">
              <div style="margin-top:7px"><span>合同制员工</span></div>
              
              <p style="font-size: 48px;margin-top:7px;">1935
                <span>人</span>
              </p>
              
            </div>
            <div class="non-contract">
              <div style="margin-top:7px"><span>非合同制员工</span></div>
              <p style="font-size: 48px;margin-top:7px;">935
                <span>人</span>
              </p>
            </div>
          </div>
          <div ref="Changes" style="height: 240px; margin-top:30px"></div>
          <div class="hrData">
            <div ref="education" class="changeData"></div>
            <div ref="age" class="changeData"></div>
            <div ref="profession"  class="changeData"></div>
          </div>
        </el-card>
        <el-card style="margin-top: 30px;margin-left:10px" class="card">
          <div slot="header" style="margin-left: 25px">
            <p>招聘信息改为招聘进展（干部/三级/员工）</p>
          </div>
          <div ref="analysis" class="analysis" style="margin-top: 50px"></div>
          <div ref="direction" class="analysis" style="margin-top: 90px"></div>
          <div ref="phDTalent" class="analysis" style="margin: 90px 0 100px"></div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="card">
          <div slot="header" style="margin-left: 25px">
            <p>关键队伍</p>
          </div>
          <div ref="comparison" style="height: 200px; width: 100%"></div>
          <div ref="year" style="height: 200px"></div>
          <!-- <div class="look"> -->
              <!-- <p class="result">看结果</p> -->
          <div class="scaling">
              <div style="margin-top: 3%">
                <span>云能力</span>
                <div class="cloud">
                  <img src="../assets/background/cloud.png" class="step-icon" />
                  <span>当前在岗91人</span>
                  <p>总人数100人</p>
                  <el-progress
                    :text-inside="true"
                    :stroke-width="22"
                    :percentage="91"
                    :color="cloudCapabilities"
                    class="internet"
                  ></el-progress>
                </div>
              </div>
              <div style="margin: 3% 0 0 3%">
                <span>网络安全</span>
                <div class="cloud">
                  <img src="../assets/background/security.png" class="step-icon" />
                  <span>当前在岗91人</span>
                  <p>总人数100人</p>
                  <el-progress
                    :text-inside="true"
                    :stroke-width="22"
                    :percentage="60"
                    :color="customColor"
                    class="internet"
                  ></el-progress>
                </div>
              </div>
          </div>
          <div class="scaling">
            <div style="margin-top: 3%">
              <span>大数据</span>
              <div class="cloud">
                <img src="../assets/background/bigData.png" class="step-icon" />
                <span>当前在岗91人</span>
                <p>总人数100人</p>
                <el-progress
                  :text-inside="true"
                  :stroke-width="22"
                  :percentage="91"
                  :color="bigNum"
                  class="internet"
                ></el-progress>
              </div>
            </div>
            <div style="margin: 3% 0 0 3%">
              <span>物联网</span>
              <div class="cloud">
                <img src="../assets/background/internet.png" class="step-icon" />
                <span>当前在岗91人</span>
                <p>总人数100人</p>
                <el-progress
                  :text-inside="true"
                  :stroke-width="22"
                  :percentage="60"
                  :color="internetColor"
                  class="internet"
                ></el-progress>
              </div>
            </div>
          </div>
          <div class="scaling">
            <div style="margin-top: 3%">
              <span>人工智能</span>
              <div class="cloud">
                <img
                  src="../assets/background/artificial.png"
                  class="step-icon"
                />
                <span>当前在岗91人</span>
                <p>总人数100人</p>
                <el-progress
                  :text-inside="true"
                  :stroke-width="22"
                  :percentage="60"
                  :color="artificialColor"
                  class="internet"
                ></el-progress>
              </div>
            </div>
            <div style="margin: 3% 0 0 3%">
              <span>大IT能力</span>
              <div class="cloud">
                <img src="../assets/background/bigIt.png" class="step-icon" />
                <span>当前在岗91人</span>
                <p>总人数100人</p>
                <el-progress
                  :text-inside="true"
                  :stroke-width="22"
                  :percentage="60"
                  :color="itColor"
                  class="internet"
                ></el-progress>
              </div>
            </div>
          </div>
          <div style="margin-top: 3%">
            <span>紧缺资格证书人员</span>
            <div class="cloud">
              <img src="../assets/background/qualified.png" class="step-icon" />
              <span>当前在岗91人</span>
              <p>总人数100人</p>
              <el-progress
                :text-inside="true"
                :stroke-width="22"
                :percentage="60"
                :color="supplyColor"
                class="internet"
              ></el-progress>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="card" style="margin-right:10px">
          <div slot="header" style="margin-left: 25px">
            <p>标签人员</p>
          </div>
          <div ref="humanEffect" style="height: 200px;"></div>
          <div ref="process" style="height: 200px"></div>
          <div ref="team" style="height: 200px"></div>
          <div ref="marketing" style="height: 200px;"></div>
          <div ref="marketingProcess" style="height: 200px"></div>
          <div ref="teamManagement" style="height: 200px"></div>
          <!-- <div ref="humanEffect" style="height: 200px;"></div>
          <div ref="process" style="height: 200px"></div>
          <div ref="team" style="height: 200px"></div>
          <div ref="team" style="height: 200px"></div> -->
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import dayjs from "dayjs";
// import echarts from 'echarts'
export default {
  name: "HrScreen",
  data() {
    return {
      cloudCapabilities: '#007BD8',         // 云能力进度条背景
      customColor: '#00D887',                // 网络安全背景色
      bigNum: '#15ACE0',
      internetColor: '#00CED8',
      artificialColor:  '#15ACE0',
      itColor: '#18CFA4',
      supplyColor: '#007BD8 '
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
    this.drawline();
    this.directionBar();
    this.yearData();
    this.totalTeam();
    this.monthlyData();
    this.humanData();
    this.processData();
    this.teamData();
    this.ageBar();
    this.changesData();
    this.professionBar();
    this.talentLine()
    this.marketingData()
    this.marketingProcessData()
    this.managementData()
  },
  methods: {
    // 全年招聘人数

    drawline () {
      //初始化容器
      let myChart = this.$echarts.init(this.$refs["analysis"]);
      //初始化图标配置选项
      let option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // Use axis to trigger tooltip
            type: "shadow", // 'shadow' as default; can also be 'line' or 'shadow'
          },
        },
        title: {
          text: "核心人才",
          left: "10px",
          top: '5px',
          textStyle: {
            fontSize: 14,
            color: "#FFFFFF",
          },
        },
        legend: {
          itemHeight: 13,
          itemWidth: 15,
          icon: "rect",
          data: ["干部", "三级", "员工"],
          right: 10,
          top: 10,
          // bottom: 180,
          textStyle: {
            color: "#FFFFFF",
            fontSize: 12,
          },
          itemGap: 13, //间距
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "1%",
          containLabel: true,
          height: '50%'
        },
        xAxis: {
          show: false,
          type: "value",
        },
        yAxis: {
          show: false,
          type: "category",
          data: ["Sun"],
        },
        series: [
          {
            name: "干部",
            type: "bar",
            stack: "total",
            barWidth: 60,
            label: {
              show: true,
              formatter: (params) => {
                return params.value + "%";
              },
              color: "#FFFFFF",
              fontSize: 16,
            },
            itemStyle: {
              normal: {
                color: "#FB9C00",
              },
            },
            emphasis: {
              focus: "series",
            },
            data: [11],
          },
          {
            name: "三级",
            type: "bar",
            stack: "total",
            label: {
              show: true,
              formatter: (params) => {
                return params.value + "%";
              },
              color: "#FFFFFF",
              fontSize: 16,
            },
            itemStyle: {
              normal: {
                color: "#0D99DD",
              },
            },
            emphasis: {
              focus: "series",
            },
            data: [79],
          },
          {
            name: "员工",
            type: "bar",
            stack: "total",
            label: {
              show: true,
              formatter: (params) => {
                return params.value + "%";
              },
              color: "#FFFFFF",
              fontSize: 16,
            },
            itemStyle: {
              normal: {
                color: "#AD00C6",
              },
            },
            emphasis: {
              focus: "series",
            },
            data: [10],
          },
        ],
      };
      //设置成功
      myChart.setOption(option);
      window.addEventListener("resize", () => {
        myChart.resize();
      });
    },
    // 投入方向人数
    directionBar () {
      //初始化容器
      let myChart = this.$echarts.init(this.$refs["direction"]);
      //初始化图标配置选项
      let option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // Use axis to trigger tooltip
            type: "shadow", // 'shadow' as default; can also be 'line' or 'shadow'
          },
        },
        title: {
          text: "四级人才(领军/专家/骨干)",
          left: "10px",
          top: '7px',
          textStyle: {
            fontSize: 14,
            color: "#FFFFFF",
          },
        },
        legend: {
          itemHeight: 13,
          itemWidth: 10,
          icon: "rect",
          data: [
            "领军",
            "专家",
            "骨干",
            // "网络技术",
            // "运营支撑",
            // "职能管理",
          ],
          right: 15,
          top: 15,
          // bottom: 180,
          textStyle: {
            color: "#FFFFFF",
            fontSize: 12,
          },
          itemGap: 13, //间距
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "1%",
          containLabel: true,
          height: '50%'
        },
        xAxis: {
          show: false,
          type: "value",
        },
        yAxis: {
          show: false,
          type: "category",
        },
        series: [
          {
            name: "领军",
            type: "bar",
            stack: "total",
            barWidth: 60,
            label: {
              show: true,
              formatter: (params) => {
                return params.value + "%";
              },
              color: "#FFFFFF",
              fontSize: 16,
            },
            itemStyle: {
              normal: {
                color: "#FB9C00",
              },
            },
            emphasis: {
              focus: "series",
            },
            data: [20],
          },
          {
            name: "专家",
            type: "bar",
            stack: "total",
            label: {
              show: true,
              formatter: (params) => {
                return params.value + "%";
              },
              color: "#FFFFFF",
              fontSize: 16,
            },
            itemStyle: {
              normal: {
                color: "#0D99DD",
              },
            },
            emphasis: {
              focus: "series",
            },
            data: [40],
          },
          {
            name: "骨干",
            type: "bar",
            stack: "total",
            label: {
              show: true,
              formatter: (params) => {
                return params.value + "%";
              },
              color: "#FFFFFF",
              fontSize: 16,
            },
            itemStyle: {
              normal: {
                color: "#AD00C6",
              },
            },
            emphasis: {
              focus: "series",
            },
            data: [10],
          },
        ],
      };
      //设置成功
      myChart.setOption(option);
      window.addEventListener("resize", () => {
        myChart.resize();
      });
    },
    // 博士人才
    talentLine () {
      //初始化容器
      let myChart = this.$echarts.init(this.$refs["phDTalent"]);
      //初始化图标配置选项
      let option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // Use axis to trigger tooltip
            type: "shadow", // 'shadow' as default; can also be 'line' or 'shadow'
          },
        },
        title: {
          text: "博士人才",
          left: "10px",
          top: '7px',
          textStyle: {
            fontSize: 14,
            color: "#FFFFFF",
          },
        },
        legend: {
          itemHeight: 13,
          itemWidth: 15,
          icon: "rect",
          data: ["大数据", "安全领域"],
          right: 10,
          top: 10,
          // bottom: 180,
          textStyle: {
            color: "#FFFFFF",
            fontSize: 12,
          },
          itemGap: 13, //间距
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "1%",
          containLabel: true,
          height: '50%'
        },
        xAxis: {
          show: false,
          type: "value",
        },
        yAxis: {
          show: false,
          type: "category",
          data: ["Sun"],
        },
        series: [
          {
            name: "大数据",
            type: "bar",
            stack: "total",
            barWidth: 60,
            label: {
              show: true,
              formatter: (params) => {
                return params.value + "%";
              },
              color: "#FFFFFF",
              fontSize: 16,
            },
            itemStyle: {
              normal: {
                color: "#FB9C00",
              },
            },
            emphasis: {
              focus: "series",
            },
            data: [11],
          },
          {
            name: "安全领域",
            type: "bar",
            stack: "total",
            label: {
              show: true,
              formatter: (params) => {
                return params.value + "%";
              },
              color: "#FFFFFF",
              fontSize: 16,
            },
            itemStyle: {
              normal: {
                color: "#0D99DD",
              },
            },
            emphasis: {
              focus: "series",
            },
            data: [79],
          },
        ],
      };
      //设置成功
      myChart.setOption(option);
      window.addEventListener("resize", () => {
        myChart.resize();
      });
    },
    // 历年变化数据
    changesData () {
      //初始化容器
      let myChart = this.$echarts.init(this.$refs["Changes"]);
      //初始化图标配置选项
      let option = {
         grid: {
          x: 100,
          y: 100,
          x2: 35,
          y2: 55,
          top: '20%',
          borderWidth: 1,
          left: '8%',  
        },
        xAxis: {
          type: "category",
          // boundaryGap: false,
          data: [
            "2019",
            "2020",
            "2021"
          ],
          axisLabel: {
            show: true,
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
          max: 2000,
          name: "历年变化数据",
          nameTextStyle: {
            color: "#02D3E9",
            fontSize: "14",
          },
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
            // name: "客户转化率",
            data: [1450, 1550, 1950,],
            type: "line",
            symbol: "circle",
            symbolSize: 7,
            label: {
              show: true,
              position: "top",
              formatter: (params) => {
                return params.value + "%";
              },
              color: "#E79A09",
              fontSize: 10,
            },
            itemStyle: {
              normal: {
                color: "#E79A09", //改变折线点的颜色
                lineStyle: {
                  // width: 0,
                  color: "#E79A09", //隐藏线
                },
              },
            },
            areaStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "#1647A3", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "rgba(22,71,163,0.00)", // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              },
            },
            lineStyle: {
              color: "#E79A09",
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
        title: {
          text: "学历",
          left: "10px",
          top: '10px',
          textStyle: {
            color: "#02D3E9",
            fontSize: "14",
          },
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)",
        },
        legend: {
          itemHeight: 13,
          itemWidth: 13,
          orient: "rect",
          x: 'right',
          y: 'center',
          textStyle: {
            color: "#FFFFFF",
            fontSize: 12,
          },
        },
        series: [
          {
            name: "学历",
            type: "pie",
            radius: ["25%", "60%"],
            center: ["30%", "60%"],
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
              { value: 1445, name: "大学本科" },
              { value: 248, name: "专科" },
              { value: 148, name: "研究生" },
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
              title: {
            text: "年龄",
            left: "10px",
            top: '10px',
            textStyle: {
              color: "#02D3E9",
              fontSize: "14",
            },
          },
          tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b}: {c} ({d}%)",
          },
          legend: {
            itemHeight: 13,
            itemWidth: 13,
            orient: "rect",
            x: 'right',
            y: 'center',
            textStyle: {
              color: "#FFFFFF",
              fontSize: 12,
            },
          },
          series: [
            {
              name: "学历",
              type: "pie",
              radius: ["25%", "60%"],
              center: ["30%", "60%"],
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
                { value: 1445, name: "30岁以下" },
                { value: 248, name: "31-40" },
                { value: 148, name: "40以上" },
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
              title: {
                text: "专业",
                left: "10px",
                top: '10px',
                textStyle: {
                  color: "#02D3E9",
                  fontSize: "14",
                },
              },
              tooltip: {
                trigger: "item",
                formatter: "{a} <br/>{b}: {c} ({d}%)",
              },
              legend: {
                itemHeight: 13,
                itemWidth: 13,
                orient: "rect",
                // right: 'right',
                // top: 30,
                x: 'right',
                y: 'center',
                textStyle: {
                  color: "#FFFFFF",
                  fontSize: 12,
                },
              },
              series: [
                {
                  name: "学历",
                  type: "pie",
                  radius: ["25%", "60%"],
                  center: ["30%", "60%"],
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
                    { value: 1445, name: "市场营销" },
                    { value: 248, name: "科技创新" },
                    { value: 148, name: "其他" },
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
    // 队伍人员月度对比数据
    monthlyData () {
      //初始化容器
      let myChart = this.$echarts.init(this.$refs["comparison"]);
      //初始化图标配置选项
      let option = {
        grid: {
          x: 75,
          y: 70,
          x2: 35,
          y2: 55,
          top: '20%',
          borderWidth: 1,
        },
        xAxis: {
          type: "category",
          // boundaryGap: false,
          data: [
            "科创",
            "自研",
            "政府BU",
            "区分政企",
            "工程师",
            "家庭运营",
          ],
          axisLabel: {
            show: true,
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
          max: 200,
          name: "队伍人员月度对比数据",
          nameTextStyle: {
            color: "#02D3E9",
            fontSize: "14",
          },
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
          data: ["当月人数", "上月人数"],
          right: 10,
          // top: 30,
          // bottom: 180,
          textStyle: {
            color: "#FFFFFF",
            fontSize: 12,
          },
          itemGap: 13, //间距
        },
        series: [
          {
            name: "上月人数",
            data: [150, 70, 110, 100, 90, 200],
            type: "line",
            symbol: "circle",
            symbolSize: 7,
            label: {
              show: true,
              position: "top",
              formatter: (params) => {
                return params.value + "%";
              },
              color: "#E79A09",
              fontSize: 10,
            },
            itemStyle: {
              normal: {
                color: "#E79A09", //改变折线点的颜色
                lineStyle: {
                  color: "#E79A09", //改变折线颜色
                },
              },
            },

            lineStyle: {
              color: "#E79A09",
            },
          },
          {
            name: "当月人数",
            data: [150, 70, 110, 100, 90, 200],
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
                  { offset: 0, color: "#31B8E4" },
                  { offset: 1, color: "#184194" },
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
    // 队伍人员年度对比数据
    yearData () {
      //初始化容器
      let myChart = this.$echarts.init(this.$refs["year"]);
      //初始化图标配置选项
      let option = {
        grid: {
          x: 75,
          y: 70,
          x2: 35,
          y2: 55,
          top: '20%',
          borderWidth: 1,
        },
        xAxis: {
          type: "category",
          // boundaryGap: false,
          data: [
            "1月",
            "2月",
            "3月",
            "4月",
            "5月",
            "6月",
            "7月",
            "8月",
            "9月",
            "10月",
            "11月",
            "12月",
          ],
          axisLabel: {
            show: true,
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
          max: 6000,
          min: 0,
          interval: 2000,
          name: "队伍人员年度对比数据",
          nameTextStyle: {
            color: "#02D3E9",
            fontSize: "14",
          },
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
          data: ["当月月初数据", "当月月底数据"],
          right: 10,
          // top: 30,
          // bottom: 180,
          textStyle: {
            color: "#FFFFFF",
            fontSize: 12,
          },
          itemGap: 13, //间距
        },
        series: [
          {
            name: "当月月初数据",
            data: [
             5000, 3800, 5300, 4000, 4300, 3800, 3600, 4200, 5100, 5200, 5300,
              5600,
            ],
            type: "line",
            // smooth: true,
            symbol: "circle",
            symbolSize: 7,
            label: {
              show: true,
              position: "top",
              formatter: (params) => {
                return params.value + "%";
              },
              color: "#E79A09",
              fontSize: 10,
            },
            itemStyle: {
              normal: {
                color: "#E79A09", //改变折线点的颜色
                lineStyle: {
                  color: "#E79A09", //改变折线颜色
                },
              },
            },
            areaStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "#1647A3", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "rgba(22,71,163,0.00)", // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              },
            },
            lineStyle: {
              color: "#E79A09",
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
    // 人效分析
    humanData () {
      //初始化容器
      let myChart = this.$echarts.init(this.$refs["humanEffect"]);
      //初始化图标配置选项
      let option = {
         title: {
              text: "营\n销\n结\n果",
              left: "10px",
              top: 'center',
              backgroundColor: 'rgba(38,46,108,0.52)',
              textStyle: {
                fontSize: '12px',
                color: '#FFFFFF',
                lineHeight: 32,
                fontWeight: '400',
                fontFamily: 'PingFangSC-Regular'
              },
            },
        grid: {
          x: 100,
          y: 100,
          x2: 35,
          y2: 55,
          top: '20%',
          borderWidth: 1,
        },
        xAxis: {
          type: "category",
          // boundaryGap: false,
          data: [
            "智能制造",
            "交通物流",
            "智慧城市",
            "现代服务",
            "云网生态",
            "金融科技",
            "教育医卫",
          ],
          nameTextStyle: {
            color: "#8ED8FF",
            // font-size: '12px'
          },
          axisLabel: {
            show: true,
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
          max: 200,
          name: "人效分析",
          nameTextStyle: {
            color: "#02D3E9",
            fontSize: "14",
          },
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
          data: ["人均创收（万）", "客户转化率"],
          right: 10,
          textStyle: {
            color: "#FFFFFF",
            fontSize: 12,
          },
          itemGap: 13, //间距
        },
        series: [
          {
            name: "客户转化率",
            data: [150, 70, 170, 90, 70, 160, 200],
            type: "line",
            // smooth: true,
            symbol: "circle",
            symbolSize: 7,
            label: {
              show: true,
              position: "top",
              formatter: (params) => {
                return params.value + "%";
              },
              color: "#E79A09",
              fontSize: 10,
            },
            itemStyle: {
              normal: {
                color: "#E79A09", //改变折线点的颜色
                lineStyle: {
                  width: 0,
                  color: "rgba(0, 0, 0, 0)", //隐藏线
                },
              },
            },
            areaStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "#EA8C33", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "#100C01", // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              },
            },
            lineStyle: {
              color: "#E79A09",
            },
          },
          {
            name: "人均创收（万）",
            data: [170, 70, 180, 100, 90, 180, 200],
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
                  { offset: 0, color: "#31B8E4" },
                  // { ot: 0.5, color: '#188df0' },
                  { offset: 1, color: "#184194" },
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
    // 看过程
    processData () {
      //初始化容器
      let myChart = this.$echarts.init(this.$refs["process"]);
      //初始化图标配置选项
      let option = {
            title: {
              text: "营\n销\n过\n程",
              left: "10px",
              top: 'center',
              backgroundColor: 'rgba(38,46,108,0.52)',
              textStyle: {
                fontSize: '12px',
                color: '#FFFFFF',
                lineHeight: 32,
                fontWeight: '400',
                fontFamily: 'PingFangSC-Regular'
                // padding: '25'
              },
            },
        grid: {
          x: 100,
          y: 100,
          x2: 35,
          y2: 55,
          top: '20%',
          borderWidth: 1,
        },
        xAxis: {
          type: "category",
          // boundaryGap: false,
          data: [
            "智能制造",
            "交通物流",
            "智慧城市",
            "现代服务",
            "云网生态",
            "金融科技",
            "教育医卫",
          ],
          nameTextStyle: {
            color: "#8ED8FF",
            // font-size: '12px'
          },
          axisLabel: {
            show: true,
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
          max: 200,
          // name: '人均客户拜访量 (户)',
          nameTextStyle: {
            color: "#02D3E9",
            fontSize: "14",
          },
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
          data: ["人均客户拜访量 (户)", "商机转化率"],
          right: 10,
          // top: 50,
          // bottom: 180,
          textStyle: {
            color: "#FFFFFF",
            fontSize: 12,
          },
          itemGap: 13, //间距
        },
        series: [
          {
            name: "商机转化率",
            data: [150, 70, 170, 90, 70, 160, 200],
            type: "line",
            // smooth: true,
            // radius: ["20%", "40%"],
            symbol: "circle",
            symbolSize: 7,
            label: {
              show: true,
              position: "top",
              formatter: (params) => {
                return params.value + "%";
              },
              color: "#E79A09",
              fontSize: 10,
            },
            itemStyle: {
              normal: {
                color: "#E79A09", //改变折线点的颜色
                lineStyle: {
                  width: 0,
                  color: "rgba(0, 0, 0, 0)", //隐藏线
                },
              },
            },
            areaStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "#EA8C33", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "#100C01", // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              },
            },
            lineStyle: {
              color: "#E79A09",
            },
          },
          {
            name: "人均客户拜访量 (户)",
            data: [170, 70, 180, 100, 90, 180, 200],
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
                  { offset: 0, color: "#31B8E4" },
                  // { ot: 0.5, color: '#188df0' },
                  { offset: 1, color: "#184194" },
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
    // 看团队
    teamData () {
      //初始化容器
      let myChart = this.$echarts.init(this.$refs["team"]);
      //初始化图标配置选项
      let option = {
        title: {
              text: "团\n队\n管\n理",
              left: "10px",
              top: 'center',
              backgroundColor: 'rgba(38,46,108,0.52)',
              textStyle: {
                fontSize: '12px',
                color: '#FFFFFF',
                lineHeight: 32,
                fontWeight: '400',
                fontFamily: 'PingFangSC-Regular'
                // padding: '25'
              },
            },
        grid: {
          x: 100,
          y: 100,
          x2: 35,
          y2: 55,
          top: '20%',
          borderWidth: 1,
        },
        xAxis: {
          type: "category",
          // boundaryGap: false,
          data: [
            "智能制造",
            "交通物流",
            "智慧城市",
            "现代服务",
            "云网生态",
            "金融科技",
            "教育医卫",
          ],
          nameTextStyle: {
            color: "#8ED8FF",
            // font-size: '12px'
          },
          axisLabel: {
            show: true,
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
          max: 200,
          // name: '人均客户拜访量 (户)',
          nameTextStyle: {
            color: "#02D3E9",
            fontSize: "14",
          },
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
          data: ["销售数", "客户转化率", "考勤准确率"],
          right: 10,
          // top: 50,
          // bottom: 180,
          textStyle: {
            color: "#FFFFFF",
            fontSize: 12,
          },
          itemGap: 13, //间距
        },
        series: [
          {
            name: "客户转化率",
            data: [150, 70, 170, 90, 70, 160, 200],
            type: "line",
            // smooth: true,
            // radius: ["20%", "40%"],
            symbol: "circle",
            symbolSize: 7,
            label: {
              show: true,
              position: "top",
              formatter: (params) => {
                return params.value + "%";
              },
              color: "#E79A09",
              fontSize: 10,
            },
            itemStyle: {
              normal: {
                color: "#E79A09", //改变折线点的颜色
                lineStyle: {
                  width: 0,
                  color: "rgba(0, 0, 0, 0)", //隐藏线
                },
              },
            },
            areaStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "#EA8C33", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "#100C01", // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              },
            },
            lineStyle: {
              color: "#E79A09",
            },
          },
          {
            name: "考勤准确率",
            data: [130, 60, 120, 80, 100, 120, 150],
            type: "line",
            // smooth: true,
            // radius: ["20%", "40%"],
            symbol: "circle",
            symbolSize: 7,
            label: {
              show: true,
              position: "bottom",
              formatter: (params) => {
                return params.value + "%";
              },
              color: "#2CA3D3",
              fontSize: 10,
            },
            itemStyle: {
              normal: {
                color: "#2CA3D3", //改变折线点的颜色
                lineStyle: {
                  width: 0,
                  color: "rgba(0, 0, 0, 0)", //隐藏线
                },
              },
            },
            areaStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "#33EAD5", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "#100C01", // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              },
            },
            lineStyle: {
              color: "#E79A09",
            },
          },
          {
            name: "销售数",
            data: [170, 70, 180, 100, 90, 180, 200],
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
                  { offset: 0, color: "#31B8E4" },
                  // { ot: 0.5, color: '#188df0' },
                  { offset: 1, color: "#184194" },
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
    marketingData  () {
      //初始化容器
      let myChart = this.$echarts.init(this.$refs["marketing"]);
      //初始化图标配置选项
      let option = {
         title: {
              text: "营\n销\n结\n果",
              left: "10px",
              top: 'center',
              backgroundColor: 'rgba(38,46,108,0.52)',
              textStyle: {
                fontSize: '12px',
                color: '#FFFFFF',
                lineHeight: 32,
                fontWeight: '400',
                fontFamily: 'PingFangSC-Regular'
              },
            },
        grid: {
          x: 100,
          y: 100,
          x2: 35,
          y2: 55,
          top: '20%',
          borderWidth: 1,
        },
        xAxis: {
          type: "category",
          // boundaryGap: false,
          data: [
            "智能制造",
            "交通物流",
            "智慧城市",
            "现代服务",
            "云网生态",
            "金融科技",
            "教育医卫",
          ],
          nameTextStyle: {
            color: "#8ED8FF",
            // font-size: '12px'
          },
          axisLabel: {
            show: true,
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
          max: 200,
          name: "人效分析",
          nameTextStyle: {
            color: "#02D3E9",
            fontSize: "14",
          },
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
          data: ["人均创收（万）", "客户转化率"],
          right: 10,
          textStyle: {
            color: "#FFFFFF",
            fontSize: 12,
          },
          itemGap: 13, //间距
        },
        series: [
          {
            name: "客户转化率",
            data: [150, 70, 170, 90, 70, 160, 200],
            type: "line",
            // smooth: true,
            symbol: "circle",
            symbolSize: 7,
            label: {
              show: true,
              position: "top",
              formatter: (params) => {
                return params.value + "%";
              },
              color: "#E79A09",
              fontSize: 10,
            },
            itemStyle: {
              normal: {
                color: "#E79A09", //改变折线点的颜色
                lineStyle: {
                  width: 0,
                  color: "rgba(0, 0, 0, 0)", //隐藏线
                },
              },
            },
            areaStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "#EA8C33", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "#100C01", // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              },
            },
            lineStyle: {
              color: "#E79A09",
            },
          },
          {
            name: "人均创收（万）",
            data: [170, 70, 180, 100, 90, 180, 200],
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
                  { offset: 0, color: "#31B8E4" },
                  // { ot: 0.5, color: '#188df0' },
                  { offset: 1, color: "#184194" },
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
    marketingProcessData () {
      //初始化容器
      let myChart = this.$echarts.init(this.$refs["marketingProcess"]);
      //初始化图标配置选项
      let option = {
            title: {
              text: "营\n销\n过\n程",
              left: "10px",
              top: 'center',
              backgroundColor: 'rgba(38,46,108,0.52)',
              textStyle: {
                fontSize: '12px',
                color: '#FFFFFF',
                lineHeight: 32,
                fontWeight: '400',
                fontFamily: 'PingFangSC-Regular'
                // padding: '25'
              },
            },
        grid: {
          x: 100,
          y: 100,
          x2: 35,
          y2: 55,
          top: '20%',
          borderWidth: 1,
        },
        xAxis: {
          type: "category",
          // boundaryGap: false,
          data: [
            "智能制造",
            "交通物流",
            "智慧城市",
            "现代服务",
            "云网生态",
            "金融科技",
            "教育医卫",
          ],
          nameTextStyle: {
            color: "#8ED8FF",
            // font-size: '12px'
          },
          axisLabel: {
            show: true,
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
          max: 200,
          // name: '人均客户拜访量 (户)',
          nameTextStyle: {
            color: "#02D3E9",
            fontSize: "14",
          },
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
          data: ["人均客户拜访量 (户)", "商机转化率"],
          right: 10,
          // top: 50,
          // bottom: 180,
          textStyle: {
            color: "#FFFFFF",
            fontSize: 12,
          },
          itemGap: 13, //间距
        },
        series: [
          {
            name: "商机转化率",
            data: [150, 70, 170, 90, 70, 160, 200],
            type: "line",
            // smooth: true,
            // radius: ["20%", "40%"],
            symbol: "circle",
            symbolSize: 7,
            label: {
              show: true,
              position: "top",
              formatter: (params) => {
                return params.value + "%";
              },
              color: "#E79A09",
              fontSize: 10,
            },
            itemStyle: {
              normal: {
                color: "#E79A09", //改变折线点的颜色
                lineStyle: {
                  width: 0,
                  color: "rgba(0, 0, 0, 0)", //隐藏线
                },
              },
            },
            areaStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "#EA8C33", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "#100C01", // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              },
            },
            lineStyle: {
              color: "#E79A09",
            },
          },
          {
            name: "人均客户拜访量 (户)",
            data: [170, 70, 180, 100, 90, 180, 200],
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
                  { offset: 0, color: "#31B8E4" },
                  // { ot: 0.5, color: '#188df0' },
                  { offset: 1, color: "#184194" },
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
    managementData () {
      //初始化容器
      let myChart = this.$echarts.init(this.$refs["teamManagement"]);
      //初始化图标配置选项
      let option = {
        title: {
              text: "团\n队\n管\n理",
              left: "10px",
              top: 'center',
              backgroundColor: 'rgba(38,46,108,0.52)',
              textStyle: {
                fontSize: '12px',
                color: '#FFFFFF',
                lineHeight: 32,
                fontWeight: '400',
                fontFamily: 'PingFangSC-Regular'
                // padding: '25'
              },
            },
        grid: {
          x: 100,
          y: 100,
          x2: 35,
          y2: 55,
          top: '20%',
          borderWidth: 1,
        },
        xAxis: {
          type: "category",
          // boundaryGap: false,
          data: [
            "智能制造",
            "交通物流",
            "智慧城市",
            "现代服务",
            "云网生态",
            "金融科技",
            "教育医卫",
          ],
          nameTextStyle: {
            color: "#8ED8FF",
            // font-size: '12px'
          },
          axisLabel: {
            show: true,
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
          max: 200,
          // name: '人均客户拜访量 (户)',
          nameTextStyle: {
            color: "#02D3E9",
            fontSize: "14",
          },
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
          data: ["销售数", "客户转化率", "考勤准确率"],
          right: 10,
          // top: 50,
          // bottom: 180,
          textStyle: {
            color: "#FFFFFF",
            fontSize: 12,
          },
          itemGap: 13, //间距
        },
        series: [
          {
            name: "客户转化率",
            data: [150, 70, 170, 90, 70, 160, 200],
            type: "line",
            // smooth: true,
            // radius: ["20%", "40%"],
            symbol: "circle",
            symbolSize: 7,
            label: {
              show: true,
              position: "top",
              formatter: (params) => {
                return params.value + "%";
              },
              color: "#E79A09",
              fontSize: 10,
            },
            itemStyle: {
              normal: {
                color: "#E79A09", //改变折线点的颜色
                lineStyle: {
                  width: 0,
                  color: "rgba(0, 0, 0, 0)", //隐藏线
                },
              },
            },
            areaStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "#EA8C33", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "#100C01", // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              },
            },
            lineStyle: {
              color: "#E79A09",
            },
          },
          {
            name: "考勤准确率",
            data: [130, 60, 120, 80, 100, 120, 150],
            type: "line",
            // smooth: true,
            // radius: ["20%", "40%"],
            symbol: "circle",
            symbolSize: 7,
            label: {
              show: true,
              position: "bottom",
              formatter: (params) => {
                return params.value + "%";
              },
              color: "#2CA3D3",
              fontSize: 10,
            },
            itemStyle: {
              normal: {
                color: "#2CA3D3", //改变折线点的颜色
                lineStyle: {
                  width: 0,
                  color: "rgba(0, 0, 0, 0)", //隐藏线
                },
              },
            },
            areaStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "#33EAD5", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "#100C01", // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              },
            },
            lineStyle: {
              color: "#E79A09",
            },
          },
          {
            name: "销售数",
            data: [170, 70, 180, 100, 90, 180, 200],
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
                  { offset: 0, color: "#31B8E4" },
                  // { ot: 0.5, color: '#188df0' },
                  { offset: 1, color: "#184194" },
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
.scaling{
  display: flex;
  // margin-right: 20px;
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
.el-progress-bar__inner{
    background-image: linear-gradient(
180deg
, #007BD8 0%, #15ACE0 100%);
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
.text {
  display: flex;
  justify-content: space-around;
  // margin-top: 50px;
}
.fullBore:nth-of-type(1) {
  background: url("../assets/background/fullBore.png");
  height: 82px;
  width: 180px;
  text-align: center;
  span {
    font-size: 14px;
    color: #ffffff;
    letter-spacing: 0;
    font-weight: 500;
    // margin-top: 10px;
  }
}
.contract:nth-of-type(2) {
  background: url("../assets/background/contractSystem.png");
  height: 82px;
  width: 180px;
  text-align: center;
  span {
    font-size: 14px;
    color: #ffffff;
    letter-spacing: 0;
    font-weight: 500;
    margin-top: 10px;
  }
}
.non-contract:nth-of-type(3) {
  background: url("../assets/background/non-contract.png");
  height: 82px;
  width: 180px;
  text-align: center;
  span {
    font-size: 14px;
    color: #ffffff;
    letter-spacing: 0;
    font-weight: 500;
    margin-top: 10px;
  }
}
.changeData{
  width: 180px;
  height: 145px;
  background: rgba(4,32,96,0.40);
}
.total {
  margin-right: 20px;
}
/deep/.card span {
  font-family: PingFangSC-Semibold;
  font-size: 14px;
  color: #02d3e9;
  letter-spacing: 0;
  font-weight: 600;
  /* margin-bottom: 4px; */
}
.cloud {
  position: relative;
  width: 280px;
  height: 74px;
  background: rgba(4, 32, 96, 0.4);
  margin-top: 4px;
}
.cloud span {
  font-family: PingFangSC-Medium;
  font-size: 14px;
  color: #ffffff;
  letter-spacing: 0;
  font-weight: 500;
  margin: 5px 25%;
  position: absolute;
}
.card .cloud p {
  text-align: right;
  margin-right: 12px;
  color: #00d7ed;
  font-size: 14px;
  margin-top: 10px;
  font-weight: 600;
  // font-family: PingFangSC-Semibold;
  letter-spacing: 0;
}
.internet {
  width: 60%;
  margin: 0px 30% 10px;
  /* opacity: 0.9;
    background-image: linear-gradient(180deg, #00CED8 0%, #15ACE0 100%);
    border-radius: 8px 0px 0px 8px; */
}
/* .element.style{
    background-image: linear-gradient(180deg, #00D887 0%, #15E0AC 100%);
  } */
.step-icon {
  position: absolute;
  left: 0%;
}
.heard {
  height: 99px;
  background: url("../assets/background/heard.png");
  margin-bottom: 10px;
  h1 {
    font-family: PingFangSC-Semibold;
    font-size: 36px;
    color: #9CE3F6 ;
    letter-spacing: 0;
    text-align: center;
    font-weight: 600;
    margin-top:-20px
    
  }
}
.allin {
  background: #5050ff;
}
.allout {
  background: #f49b3b;
}
/* .time p {
  color: #666666;
} */
.BPMlist {
  background: url("../assets/background/background.jpg") 100%;
  // height: 100%;
}
// .fullBore .contract{

//   // width: 40px;
//   // height: 30px;

//   p{
//     font-size: 48px;
//   }

// }
.contractSystem {
  width: 40px;
  height: 30px;
}
.noContract {
  width: 30%;
}
.hrData {
  display: flex;
  justify-content: space-around;
}
/deep/.el-card__header {
  background: rgba(38, 46, 108, 0.52);
  height: 38px;
  padding: 0px 0px;
  border: transparent;
}
.card p {
  font-family: PingFangSC-Medium;
  font-size: 20px;
  color: #ffffff;
  letter-spacing: 2px;
  font-weight: 500;
  line-height: 38px;
}
/deep/.el-card {
  box-shadow: inset 0px 1px 20px 3px rgba(44, 155, 215, 0.45);
  background-color: transparent;
  /* color: #303133; */
  -webkit-transition: 0.3s;
  transition: 0.3s;
  border: transparent;
  // height: 150px;
}
.analysis {
  width: 548px;
  height: 86px;
  background: rgba(4, 32, 96, 0.4);
  // margin-top:4px
  // margin-left:0px;
}
// .seeResult{
//   display: flex;
// }
.result {
  width: 32px;
  height: 68px;
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #ffffff;
  letter-spacing: 0;
  font-weight: 400;
  writing-mode: tb-rl;
  letter-spacing: 10px;
  margin-top: -15%;
  // transform: rotate(-90deg);
  background: rgba(38, 46, 108, 0.52);
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
}
// .seeResult{
//   display: flex;
// }
.highLevel {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.highRecruitment{
  display: flex;
  margin: 20px 0 5px 15px;
  
  // height: 40px;
  // width: 80px;
  // background-image: linear-gradient(180deg, #63D7D9 0%, rgba(99,215,217,0.60) 53%, #63D7D9 100%);
}
.recruits{
  background: url("../assets/background/recruits.png");
  font-family: PingFangSC-Semibold;
  font-size: 28px;
  color: #FFFFFF;
  font-weight: 600;
  margin-left:5px
}
.yearRecruitment{
  display: flex;
  // justify-content: row;
  margin-left:120px;
}
.card .talent {
  font-family: PingFangSC-Semibold;
  font-size: 14px;
  color: #fd9500;
  letter-spacing: 0;
  font-weight: 600;
}
.card .recruitment {
  font-family: PingFangSC-Semibold;
  font-size: 14px;
  color: #02D3E9;
  letter-spacing: 0;
  font-weight: 600;
}
.card .introduce {
  font-family: PingFangSC-Semibold;
  font-size: 14px;
  color: #ffffff;
  letter-spacing: 0;
  // line-height: 29px;
  font-weight: 600;
}
.card .number {
  font-family: PingFangSC-Semibold;
  font-size: 21px;
  color: #ff8f00;
  letter-spacing: 0;
  line-height: 29px;
  font-weight: 600;
}
.card .talentsNum {
  width: 25px;
  height: 37px;
  background-image: linear-gradient(
    180deg,
    #f3b944 0%,
    rgba(243, 185, 68, 0.6) 53%,
    #f3b944 100%
  );
  font-family: PingFangSC-Semibold;
  font-size: 28px;
  color: #ffffff;
  font-weight: 600;
  margin-left: 5px;
  text-align: center;
}
</style>