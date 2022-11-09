<template>
  <div>
    <div class="top">
      <van-row>
        <van-col span="4" class="zi">9:41</van-col>
        <van-col span="10" offset="10"
          ><img src="../../images/信号.png" />
          <img src="../../images/信号 (1).png" />
          <img src="../../images/电池电量.png" alt=""
        /></van-col>
      </van-row>
      <span class="zi zh">我的求助<img src="../../images/刷新.png" /></span>
      <div class="tou">
        <van-row class="tou1">
          <van-col offset="7" span="10">
            <img src="../../images/头像 女孩.png" />中森名菜
          </van-col>
        </van-row>
      </div>
    </div>
    <div class="xiaoxi">您收到2条新的消息 <img src="../../images/icon_commone_消息提醒.png" alt=""></div>
    <div class="top1">
      <p>
        中森明菜是20世纪80年代，日本最具代表性的流行女歌手，被大家称为“元祖歌姬”。
        1985年、1986年，中森明菜连续两年蝉联获得日本唱片大赏，是第一名以流行歌曲获得该奖项的艺人，打破了当时史上最年轻的获奖者，她更是史上第一名蝉联大赏的女歌手。
        <img src="../../images/问号.png" alt="" />
      </p>
      <img src="../../images/tupian.png" alt="">
      <van-cell-group class="pl">
        <van-field v-model="value" placeholder="评论" />
      </van-cell-group>
    </div>
    <div class="wenzi">
      <p>
        彼年，听雨桥旁，一滴雨，一个季节，一滴泪，一片心湖，一朵花，一个世界。夜雨染成天水碧。有些人不需要姿态，也能成就一场惊鸿。
        <img src="../../images/正确.png" alt="" />
      </p>
      <p>熊二：保护森林，熊熊有责</p>
      <p>游客2：中森名菜好美</p>
      <p>游客3：中森名菜！！！！！</p>
      <van-cell-group class="pl">
        <van-field v-model="value" placeholder="评论" />
      </van-cell-group>
    </div>
    <div class="but">
      <!-- <img src="../../images/动态.png" alt="">
        <img src="../../images/发布求助.png" >
        <img src="../../images/个人中心.png" alt=""> -->
      <van-row type="flex" justify="space-between">
        <van-col span="6"><img src="../../images/动态.png" alt="" /></van-col>
        <van-col span="6"><img src="../../images/发布求助.png" /></van-col>
        <van-col span="6">
          <img src="../../images/个人中心.png" alt=""
        /></van-col>
      </van-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: "",
    };
  },
};
</script>
<style lang="less" scoped>
.top {
  height: 138px;
  width: 100%;
  background-color: rgb(0, 0, 0);
}
.tou {
  margin-top: 30px;
  margin-left: -260px;
}
.top1,
.wenzi {
  border-radius: 2%;
//   box-shadow: 20px;
box-shadow: 2px 10px 10px 10px rgba(218,231,239);
  //   height:370px;
  width: 90%;
  margin: 0 auto;
  border-style: solid;
  border-color: white;
  box-shadow: rgb(36, 36, 32);
  margin-top: 20px;
}
.pl {
  border-style: solid;
  border-color: rgb(177, 177, 177);
  height: 40px;
  width: 100%x;
  margin: 12px 36px;
  border-radius: 10% 10%;
}
p {
  text-align: justify;
}
.zi {
  color: white;
}
.zh {
  display: inline-table;
  margin-top: 18px;
}
.tou1 {
  margin-top: -19px;
  color: white;
}
.but {
  height: 60px;
  width: 100%;
  //   background-color: rgb(1, 120, 124);
  border-top-style: solid;
  border-top-color: rgb(177, 177, 177);
  margin-top: 20px;
}
.xiaoxi{
//    margin-left:100px;
font-size: 10px;
}
</style>