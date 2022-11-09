<template>
  <div class="Mainbox">
    <el-container>
      <el-header class="headerbox" height="90px">
        <el-row :gutter="20" class="info">
          <el-col :span="1" push="8"
            ><div class="grid-content bg-purple"><img src="../../images/logo.png" alt="" class="logo"></div></el-col
          >
          <el-col :span="1" push="9"
            ><div class="grid-content bg-purple">
              <span class="info1 w" @mouseenter="enter" @mouseleave="leave"
                >学校概况</span
              >
            </div></el-col
          >
          <el-col :span="1" push="9"
            ><div class="grid-content bg-purple">
              <span class="info2 w">学院介绍</span>
            </div></el-col
          >
          <el-col :span="1" push="9"
            ><div class="grid-content bg-purple">
              <span class="info3 w">新闻中心</span>
            </div></el-col
          >
          <el-col :span="1" push="9"
            ><div class="grid-content bg-purple">
              <span class="info4 w">招新就业</span>
            </div></el-col
          >
          <el-col :span="1" push="9"
            ><div class="grid-content bg-purple">
              <span class="info5 w">人才培养</span>
            </div></el-col
          >
          <el-col :span="1" push="9"
            ><div class="grid-content bg-purple">
              <span class="info6 w">服务指南</span>
            </div></el-col
          >
          <el-col :span="1" push="9"
            ><div class="grid-content bg-purple">
              <spa class="info7 w">友情链接</spa>
            </div></el-col
          >
        </el-row>
      </el-header>
      <div class="zhong">
        <div v-show="showdiv" class="sh">
          <span class="li1">
            <ul>
              <li>学校简介</li>
              <li>组织机构</li>
              <li>大事记</li>
              <li>校园环境</li>
              <li>大学精神</li>
            </ul>
          </span>
          <span class="li2">
            <ul>
              <li>领导致辞</li>
              <li>理念特色</li>
              <li>领导关怀</li>
              <li>影像东软</li>
              <li>东软东软</li>
            </ul>
          </span>
        </div>
      </div>
      <el-main class="mainbox">
        <div class="main1">
          <div class="asi">
            <ul class="aside">
                <li class="y">学校新闻</li>
                <li class="y">通知通告</li>
                <li class="y">聚焦东软</li>
                <li class="y">媒体聚焦</li>
                <li class="y">信息公开</li>
            </ul>
          </div>
          <div class="maininfo">
            <div class="tou">当前位置：新闻中心>>学校新闻</div>
            <div class="xain"></div>
            <h3>我校开展10月党日活动暨党委书记讲授专题党课活动</h3>
            <h5>
              2022年11月2日 编辑：品牌发展部 来源： 图/陈怀宇 文/党群工作部
            </h5>
            <div class="p1">
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;近日，我校开展10月党日活动暨党委书记讲授专题党课活动。学校党委书记赖廷谦主讲专题党课，各学
              </p>
              <p>
                院党总支书记、副书记，相关部门负责人及部分师生代表到场聆听。
              </p>
              <div class="img1">
                <img src="../../images/one.jpg" alt="" />
              </div>
              <div>
                <img src="../../images/two.jpg" alt="" />
              </div>
            </div>
            <h5>我校开展10月党日活动暨党委书记讲授专题党课活动</h5>
            <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 课堂上，赖廷谦书记以《马克思主义中国化的飞跃——学习习近平新时代中国特色社会主义思想的感想》一诗揭开了此次专题党课活动的序幕，并分别从中国梦、新发展、“五位一体”、“四个全面”、科研创新、城乡一体化、强军兴军、港澳治理、“一带一路”、抗疫大考、反腐斗争方面回顾总结了党的十八大以来党和国家各项事业发生的历史性变革，取得的历史性成就。新时代的十年里，以习近平同志为核心的党中央高举中国特色社会主义伟大旗帜，带领全党全国各族人民进行伟大斗争、建设伟大工程、推进伟大事业、实现伟大梦想，推动中华民族伟大复兴进入了全新的发展阶段。
            </p>
            <div>
              <img src="../../images/three.jpg" alt="" />
            </div>
            <h5>赖廷谦书记讲授专题党课</h5>
            <div>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 赖廷谦书记指出，要深刻认识习近平新时代中国特色社会主义思想是马克思主义中国化最新成果，全面贯彻习近平新时代中国特色社会主义思想，深刻领悟“两个确立”的决定性意义，增强“四个意识”、坚定“四个自信”、做到“两个维护”，自觉在思想上政治上行动上同以习近平同志为核心的党中央保持高度一致，做到表里如一、知行合一，始终坚持和发展新时代中国特色社会主义
              </p>
            </div>
            <div>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 历史照亮未来，征程未有穷期。赖廷谦书记强调，全校师生要坚持以习近平新时代中国特色社会主义思想为指引，切实把思想与行动统一到党的二十大精神上来，深入贯彻落实习近平总书记在党的二十大报告中关于教育强国的重要论述，踔厉奋发，勇毅前行，持续推进学校内涵式高质量发展，不断为学校建设成为一流应用型大学贡献力量。
              </p>
            </div>
            <div class="dio">责任编辑：付婷</div>
            <div>
              <div class="erweim1">
                <img src="../../images/four.png" alt="" class="erweimone" />
              </div>
            </div>
          </div>
        </div>
      </el-main>
      <el-footer class="foot" height="200px">
        <el-row :gutter="20" height="100px">
          <el-col :span="1" push="5"
            ><img src="../../images/five.png" alt="" class="footlogo1"
          /></el-col>
          <el-col :span="5" push="5">
            <ul>
              <li>投诉举报方式：xf@nsu.edu.cn 、 028-64888000</li>
              <li>地址：四川省 成都市 都江堰市 青城山镇东软大道1号</li>
              <li>邮编：611844</li>
              <li>[蜀ICP备12011972号-2](https://beian.miit.gov.cn/)</li>
              <li>Copyright © 2002-2022 成都东软学院 All Rights Reserved</li>
            </ul>
          </el-col>
          <el-col :span="1" push="6" class="tuobiao1"
            ><img src="../../images/f_contactus.png" alt="" class="tubaio"
          /></el-col>
          <el-col :span="1" push="6" class="tuobiao1 z" 
            ><img src="../../images/f_wx.png" alt="" class="tubaio z1" @mouseenter="imgshow" @mouseleave="noimg"
          /></el-col>
          <el-col :span="1" push="6" class="tuobiao1"
            ><img src="../../images/f_wb.png" alt="" class="tubaio"
          /></el-col>
          <el-col :span="1" push="6" class="tuobiao1"
            ><img src="../../images/f_tt.png" alt="" class="tubaio"
          /></el-col>
          <el-col :span="1" push="6" class="tuobiao1"
            ><img src="../../images/f_jb.png" alt="" class="tubaio"
          /></el-col>
          <el-col :span="1" push="6" class="tuobiao1"
            ><img src="../../images/f_lz.png" alt="" class="tubaio"
          /></el-col>
        </el-row>
        <span class="wei" v-show="showimg"><img src="../../images/wxcode.jpg" alt="" class="wei1"></span>
      </el-footer>
    </el-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showdiv: false,
      showimg:false,
    };
  },
  methods: {
    enter() {
      this.showdiv = true;
    },
    leave() {
      this.showdiv = false;
    },
    imgshow(){
        this.showimg=true;
    },
    noimg(){
        this.showimg=false;
    }
  },
};
</script>
<style lang="less" scoped>
.headerbox {
  background-color: rgb(58, 81, 149);
  .info {
    margin-top: 40px;
  }
  .bg-purple {
    // background: #d3dce6;
    // margin: 0 auto;
    color: white;
  }
.logo{
    width:200px;
    height:60px;
    margin-left: -60px;
    margin-top:-14px;
}
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
}
.zhong {
  width: 100%;
  background-color: rgb(211, 211, 211);
  height: 40px;
  
}
.w {
  font-size: 16.5px;
}
ul {
  width: 95px;
  display: inline-table;
  li {
    margin: 10px 10px;
    color: white;
    list-style: none;
  }
}
.sh {
  width: 300px;
  background-color: rgba(81, 103, 163, 0.8);
  position: absolute;
    top:69px;
    left:900px;
}
.asi {
  width: 210px;
  height: 314px;
  background-color: rgb(42, 70, 143);
  float: left;
//   margin-left:-10px;
  .aside{
    margin-left:-80px;
    width:210px;
    .y:hover{
        background-color:rgb(55,92,188);
        
    }
  }
}
.maininfo {
  float: left;
  width: 770px;
  background-color: rgb(244, 244, 244);
  .xain {
    width: 100%;
    height: 5px;
    background-color: rgb(42, 70, 143);
  }
  .tou {
    margin-left: 40px;
    margin-top: 14px;
    width: 230px;
    height: 30px;
  }

  .p1 {
    text-align: none;
  }
}
.main1 {
  width: 1100px;
  margin: 0 auto;
}
img {
  width: 619px;
  height: 416px;
}
.erweimone {
  width: 500px;
  height: 300px;
  margin: 10px 10px;
}

.foot {
  background-color: rgb(92, 92, 92);

  ul {
    width: 400px;
    font-size: 14px;
    text-align: justify;
    margin-top: 20px;
  }
  .wei1{
    width:100px;
    height:100px;
    position: absolute;
    bottom:-1520px;
    left:1100px;
    // display: none;
  }

}
.footlogo1 {
  width: 100px;
  height: 100px;
  margin-top: 40px;
}
.tubaio {
  width: 40px;
  height: 40px;
}
.tuobiao1{
    margin-top:120px;
    margin-left:-30px
}
.z1:hover{
    filter: drop-shadow(10px 9px 0 rgba(0, 0, 0, .9));
}
p{
    text-align: justify;
}
.dio{
    float:right;
}
</style>