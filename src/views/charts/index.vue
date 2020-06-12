<template>
  <div class="main">
    <!-- 头部 -->
    <el-row>
      <el-col :span="24">
        <div class="header">
          <span class="title">嗨酒统计大数据平台</span>
        </div>
      </el-col>
    </el-row>

    <!-- 中间 -->
    <el-row :gutter="11" class="main-content">
      <el-col :span="7">
        <div class="broken-line">
          <div id="lineChart" class="chartImg"></div>
          <div id="barChart" class="chartImg"></div>
        </div>
      </el-col>
      <el-col :span="10">
        <el-row :gutter="11">
          <el-col :span="8">
            <div class="data-show">
              <span>访问量</span>
              <div class="visits-num">2,000</div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="data-show">
              <span>转发量</span>
              <div class="forward-num">1,000</div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="data-show">
              <span>打卡量</span>
              <div class="clock-num">1,500</div>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <div class="views-bar">
            <div id="view-bar"></div>
          </div>
        </el-row>
      </el-col>
      <el-col :span="7">
        <div class="broken-line">
          <div id="columnarChart" class="chartImg"></div>
          <div id="discountChart" class="chartImg"></div>
        </div>
      </el-col>
    </el-row>
    <!-- 底部 -->
    <div class="bottom">
      <el-row :gutter="8">
        <el-col :span="12">
          <div class="sex-img">
            <div id="pieChart"></div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="sex-img">
            <div id="progressBar"></div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  name: "hello",
  data() {
    return {};
  },
  mounted() {
    this.dranLine();
    this.dranBar();
    this.dranColumnar();
    this.dranDiscount();
    this.dranPie();
    this.dranProgress();
  },
  methods: {
    dranLine() {
      let myChart = this.$echarts.init(document.getElementById("lineChart"));
      window.addEventListener("resize", () => {
        myChart.resize();
      });
      myChart.setOption({
        title: {
          text: "APP下载",
          y: "12px",
          x: "8px",
          textStyle: {
            color: "#4BACEA",
            fontWeight: "500"
          }
        },
        tooltip: {
          trigger: "axis"
        },
        xAxis: {
          type: "category",
          axisLine: {
            lineStyle: {
              color: "#00aeef"
            }
          },
          axisTick: {
            show: false
          },

          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
        },
        legend: {
          icon: "rectangle",
          itemHeight: 2,
          data: ["Andriod", "IOS"],
          y: "12px",
          right: "42px",
          textStyle: {
            color: "#f4f4f6"
          }
        },
        yAxis: {
          type: "value",
          axisLine: {
            show: false,
            lineStyle: {
              color: "#00aeef"
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            formatter: "{value}%"
          },
          //坐标轴内线的样式
          splitLine: {
            lineStyle: {
              color: "#0466a2",
              width: 1
            }
          }
        },
        series: [
          {
            name: "Andriod",
            type: "line",
            data: [15, 50, 45, 60, 25, 85, 65],
            color: ["#26aff4"]
          },
          {
            name: "IOS",
            type: "line",
            data: [50, 30, 4, 66, 55, 90, 10],
            color: ["#ff00ff"]
          }
        ]
      });
    },
    dranBar() {
      let myChart = this.$echarts.init(document.getElementById("barChart"));
      window.addEventListener("resize", () => {
        myChart.resize();
      });
      myChart.setOption({
        title: {
          text: "注册用户与商家统计",
          y: "12px",
          x: "8px",
          textStyle: {
            color: "#4BACEA",
            fontWeight: "500"
          }
        },
        tooltip: {
          show: true
        },
        xAxis: {
          type: "category",
          axisLine: {
            lineStyle: {
              color: "#00aeef"
            }
          },
          axisTick: {
            show: false
          },

          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
        },
        yAxis: {
          type: "value",
          axisLine: {
            show: false,
            lineStyle: {
              color: "#00aeef"
            }
          },
          axisTick: {
            show: false
          },
          //坐标轴内线的样式
          splitLine: {
            lineStyle: {
              color: "#0466a2"
            }
          }
        },

        series: [
          {
            name: "Andriod",
            type: "bar",
            data: [150, 250, 25, 80, 333, 222, 111],
            color: ["#77a0f3"],
            itemStyle: {
              barBorderRadius: [18, 18, 0, 0]
            },
            barWidth: "15"
          },
          {
            name: "IOS",
            type: "bar",
            data: [350, 300, 114, 66, 89, 123, 321],
            color: ["#a869fc"],
            itemStyle: {
              barBorderRadius: [18, 18, 0, 0]
            },
            barGap: "0",
            barWidth: "15"
          }
        ]
      });
    },
    dranColumnar() {
      let myChart = this.$echarts.init(
        document.getElementById("columnarChart")
      );
      window.addEventListener("resize", () => {
        myChart.resize();
      });
      myChart.setOption({
        title: {
          text: "订单成交量",
          y: "12px",
          x: "8px",
          textStyle: {
            color: "#4BACEA",
            fontWeight: "500"
          }
        },
        tooltip: {
          show: true
        },
        xAxis: {
          type: "category",
          axisLine: {
            lineStyle: {
              color: "#268FE7"
            }
          },
          axisTick: {
            show: false
          },

          data: [
            "800",
            "900",
            "1000",
            "1100",
            "1200",
            "1300",
            "1400",
            "1500",
            "1600",
            "1700",
            "1800",
            "1900",
            "2000"
          ]
        },
        yAxis: {
          type: "value",
          axisLine: {
            lineStyle: {
              color: "#268FE7"
            }
          },
          axisTick: {
            show: false
          },
          //坐标轴内线的样式
          splitLine: {
            color: "#091DA8",

            lineStyle: {
              color: "#0466a2"
            }
          },
          splitLine: {
            show: false
          }
        },

        series: [
          {
            name: "订单成交量",
            type: "bar",
            data: [10, 20, 25, 5, 3, 15, 30, 20, 5, 18, 6, 27, 26],
            color: ["#77a0f3"],
            barWidth: "14"
          }
        ]
      });
    },
    dranDiscount() {
      let myChart = this.$echarts.init(
        document.getElementById("discountChart")
      );
      window.addEventListener("resize", () => {
        myChart.resize();
      });
      myChart.setOption({
        title: {
          text: "用户活跃度",
          y: "12px",
          x: "8px",
          textStyle: {
            color: "#268FE7",
            fontWeight: "500"
          }
        },
        tooltip: {
          trigger: "axis"
        },
        xAxis: {
          type: "category",
          axisLine: {
            show: false,
            lineStyle: {
              color: "#268FE7"
            }
          },
          axisTick: {
            show: false
          },

          data: [
            "8:00",
            "9:00",
            "10:00",
            "11:00",
            "12:00",
            "13:00",
            "14:00",
            "15:00",
            "16:00",
            "17:00",
            "18:00"
          ]
        },

        yAxis: {
          type: "value",
          axisLine: {
            show: false,
            lineStyle: {
              color: "#268FE7"
            }
          },
          axisTick: {
            show: false
          },

          //坐标轴内线的样式
          splitLine: {
            lineStyle: {
              color: "#C1C1C1"
            }
          }
        },
        series: [
          {
            name: "用户活跃量",
            type: "line",
            data: [8, 10, 16, 14, 18, 22, 20, 18, 14, 12, 10],
            color: ["#26aff4"],
            smooth: true,
            areaStyle: {
              normal: {
                color: {
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: " rgba(3,224,252,0.95)" // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "rgba(3,224,252,0.2)" // 100% 处的颜色
                    }
                  ],
                  globalCoord: false // 缺省为 false
                }
              }
            }
          }
        ]
      });
    },
    dranPie() {
      let myChart = this.$echarts.init(document.getElementById("pieChart"));
      window.addEventListener("resize", () => {
        myChart.resize();
      });
      myChart.setOption({
        title: [
          {
            text: "注册男女岁数分布",
            y: "10px",
            x: "8px",
            textStyle: {
              color: "#268FE7",
              fontWeight: "500"
            }
          },
          {
            subtext: "0-17岁",
            left: "10%",
            right: "75%",
            top: "77%",
            subtextStyle: {
              fontSize: 27,
              color: "#fff",
              fontWeight: 500
            }
          },
          {
            subtext: "18-30岁",
            left: "26%",
            right: "60%",
            top: "77%",
            subtextStyle: {
              fontSize: 27,
              color: "#fff",
              fontWeight: 500,
              textAlign: "center"
            }
          },
          {
            subtext: "31-40岁",
            left: "44%",
            right: "41%",
            top: "77%",
            subtextStyle: {
              fontSize: 27,
              color: "#fff",
              fontWeight: 500,
              textAlign: "center"
            }
          },
          {
            subtext: "41-50岁",
            right: "30%",
            left: "61%",
            top: "77%",
            subtextStyle: {
              fontSize: 27,
              color: "#fff",
              fontWeight: 500,
              textAlign: "center"
            }
          },
          {
            subtext: "51岁以上",
            left: "78%",
            top: "77%",
            subtextStyle: {
              fontSize: 27,
              color: "#fff",
              fontWeight: 500,
              textAlign: "center"
            }
          }
        ],

        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        color: ["#3198EC", "#FF00FC"],
        series: [
          {
            name: "0-17岁",
            type: "pie",
            radius: ["50%", "75%"],
            center: ["50%", "50%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center"
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 335, name: "男" },
              { value: 100, name: "女" }
            ],
            left: "5%",
            right: "75%",
            top: 0,
            bottom: 0,
            emphasis: {
              label: {
                show: true,
                fontSize: "27"
              }
            }
          },
          {
            name: "18-30岁",
            type: "pie",
            radius: ["50%", "75%"],
            center: ["50%", "50%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center"
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 50, name: "男" },
              { value: 100, name: "女" }
            ],
            left: "22.5%",
            right: "58.5%",
            top: 0,
            bottom: 0,
            emphasis: {
              label: {
                show: true,
                fontSize: "30",
                fontWeight: "bold"
              }
            }
          },
          {
            name: "31-40岁",
            type: "pie",
            radius: ["50%", "75%"],
            center: ["50%", "50%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center"
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 260, name: "男" },
              { value: 10, name: "女" }
            ],
            left: "40%",
            right: "40%",
            top: 0,
            bottom: 0,
            emphasis: {
              label: {
                show: true,
                fontSize: "30",
                fontWeight: "bold"
              }
            }
          },
          {
            name: "41-50岁",
            type: "pie",
            radius: ["50%", "75%"],
            center: ["50%", "50%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center"
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 50, name: "男" },
              { value: 100, name: "女" }
            ],
            left: "57.5%",
            right: "22.5%",
            top: 0,
            bottom: 0,
            emphasis: {
              label: {
                show: true,
                fontSize: "30",
                fontWeight: "bold"
              }
            }
          },
          {
            name: "51岁以上",
            type: "pie",
            radius: ["50%", "75%"],
            center: ["50%", "50%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center"
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 300, name: "男" },
              { value: 100, name: "女" }
            ],
            left: "75%",
            right: "5%",
            top: 0,
            bottom: 0,
            emphasis: {
              label: {
                show: true,
                fontSize: "30",
                fontWeight: "bold"
              }
            }
          }
        ]
      });
    },
    dranProgress() {
      let myChart = this.$echarts.init(document.getElementById("progressBar"));
      myChart.setOption({
        title: {
          text: "用户活跃度",
          y: "12px",
          x: "8px",
          textStyle: {
            color: "#268FE7",
            fontWeight: "500"
          }
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.main {
  height: 100vh;
  width: 100vw;
  background: url(../../assets/main_bg.png);
  padding: 10px 18px 10px;

  .header {
    background: url(../../assets/top_title.png);
    height: 7.2vh;
    background-size: 100% 100%;
    .title {
      display: block;
      color: #fff;
      font-size: 30px;
      text-align: center;
      line-height: 7.2vh;
    }
  }
  .main-content {
    margin-top: 17px;
    .broken-line {
      height: 29.5vh;
      .chartImg {
        background: url(../../assets/frame_below.png);
        background-size: 100% 100%;
      }
      #lineChart {
        width: 100%;
        height: 100%;
      }
      #barChart {
        margin-top: 1vh;
        width: 100%;
        height: 100%;
      }
      #columnarChart {
        width: 100%;
        height: 100%;
      }
      #discountChart {
        margin-top: 1vh;
        width: 100%;
        height: 100%;
      }
    }
    .data-show {
      height: 10.9vh;
      background: url(../../assets/frame_middle_up.png);
      background-size: 100% 100%;
      span {
        display: block;
        font-size: 18px;
        color: #4bacea;
        text-align: center;
        padding-top: 1.1vh;
      }
      div {
        font-weight: bold;
        text-align: center;
        font-size: 36px;
        padding-top: 6%;
      }
      .visits-num {
        color: #02ecff;
      }
      .forward-num {
        color: #fbce3c;
      }
      .clock-num {
        color: #30feca;
      }
    }
    .views-bar {
      width: 100%;
      height: 48vh;
      margin-top: 1.4vh;
      background: url(../../assets/frame_middle.png);
      background-size: 100% 100%;
    }
  }
  .bottom {
    margin-top: 1.57vh;
    .sex-img {
      width: 100%;
      height: 27vh;
      background: url(../../assets/frame_below.png);
      background-size: 100% 100%;

      #pieChart {
        width: 100%;
        height: 100%;
      }
      #progressBar {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
