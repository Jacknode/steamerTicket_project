<template>
  <div>
    <div class="container">
      <header>
        <div class="goBack"></div>
        <strong>订单填写</strong>
      </header>
      <div class="startToEnd clearfix">
        <div class="startBox">
          <h1>椒江码头</h1>
          <h3>舱位类型 : 经济舱</h3>
        </div>
        <div class="middleBox">
          <h2 class="middleBoxTopText">11:30</h2>
          <div class="direction">
            <div class="slope"></div>
            <div class="straight"></div>
          </div>
          <h2 class="middleBoxBotText">2018-11-06</h2>
          <h6>班次T121</h6>
        </div>
        <div class="endBox">
          <h1>上陈岛码头</h1>
        </div>
      </div>
      <section>
        <div class="content">
          <div class="goPlayPeople">
            <div class="peopleInfo clearfix">
              <strong>乘客</strong>
            </div>
            <div class="peopleList clearfix">
              <div class="peopleDetails" v-for="item,index in 2" >
                <span>{{111}}</span>
              </div>
              <div class="addPeople" >
                <i></i>
                <span>添加</span>
              </div>
            </div>
          </div>
          <ul class="listBox">
            <li class="listBox clearfix">
              <img src="../assets/img/cancelIcon.png"/>
              <div class="nameId">
                <h1>刘相</h1>
                <h1>身份证</h1>
              </div>
              <div class="nameIdContent">
                <h1>下大陈岛一日游</h1>
                <h1>510503199111243070</h1>
              </div>
              <div class="listBoxRight"></div>
            </li>
          </ul>
        </div>
      </section>
      <footer>
        <div class="nowPay">
          <strong>订单金额：{{25}}</strong>
          <a href="javascript:;" >立即购买</a>
        </div>
      </footer>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    props: [],
    data(){
      return{

      }
    },
    created(){
      this.initData();
    },
    methods:{
      initData(){

      },
    }
  }
</script>
<style scoped type="text/less" lang="less">
  @rem :30rem;


  .nowPay {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 110/@rem;
    background-color: #fff;
  }
  .nowPay a {
    float: left;
    width: 30%;
    background-color: #fd4f4f;
    color: #fff;
    line-height: 110/@rem;
    text-align: center;
    font-size: 30/@rem;
  }
  .nowPay strong {
    float: left;
    width: 70%;
    font-size: 30/@rem;
    line-height: 110/@rem;
    padding-left: 40/@rem;
    color: #2e2e2e;
  }
  .listBoxRight{
    width: 30/@rem;
    height: 30/@rem;
    /*background-color: red;*/
    float: right;
    margin: 60/@rem 40/@rem 0/@rem 0/@rem;
    border-right: 1px solid silver;
    border-top: 1px solid silver;
    transform: rotate(45deg);
  }
  .nameId{
    float: left;
    /*background-color: red;*/
    height: 150/@rem;
    width: 150/@rem;
    font-weight: bold;
  }
  .nameId>h1{
    height: 75/@rem;
    text-align: center;
    line-height: 75/@rem;
    font-weight: bold;
  }
  .nameIdContent{
    height: 150/@rem;
    width: 320/@rem;
    /*background-color: red;*/
    float: left;
    color: #a0a0a0;
    font-weight: bold;
  }
  .nameIdContent>h1{
    height: 75/@rem;
    text-align: left;
    line-height: 75/@rem;
  }
  .listBox>img{
    display: block;
    float: left;
    width: 50/@rem;
    height: 50/@rem;
    margin: 50/@rem 0/@rem 0/@rem 40/@rem ;
  }
  .touristInfo>strong>em{
    float: right;
/*    margin-right: -100/@rem;*/
  }
  .content{
    background-color: #fff;
  }
  .touristInfo>i{
    display: block;
    width: 20/@rem;
    height: 20/@rem;
    background-color: red;
    float: right;
    margin: -50/@rem 0/@rem 0/@rem 0/@rem;
  }
  .touristInfoWrap{
    float: left;
  }
  .touristInfo {
    float: left;
    width: 100%;
    position: relative;
    border-bottom: 1px solid #efeded;
    padding: 10/@rem 0;
  }
  .peopleDetails {
    text-align: center;
    background: url("../assets/img/changeBg.png") no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
    margin-right: 5%;
    color: #2e2e2e;
    font-weight: bold;
    height: 60/@rem;
    width: 170/@rem;
    line-height: 60/@rem;
    float: left;
  }
  .goPlayPeople {
    padding: 0/@rem 40/@rem 40/@rem 40/@rem;
    border-bottom: 1px solid #efeded;
  }
  .addPeople {
    float: left;
    border: 1px dashed silver;
    border-radius: 10/@rem;
    color: #ffa948;
    padding: 0 30/@rem;
    height: 60/@rem;
    width: 170/@rem;
  }
  .addPeople i {
    float: left;
    width: 35/@rem;
    height: 35/@rem;
    background: url("../assets/img/addPeopleIcon.png") no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
    margin-top: 11/@rem;
  }
  .addPeople span {
    float: right;
    line-height: 60/@rem;
  }

  .playPeopleList {
    padding: 0 40/@rem;
  }
  .peopleInfo {
    padding: 20/@rem 0;
  }
  .peopleInfo > span {
    float: right;
    color: #fb2e2e;
    line-height: 50/@rem;
    font-size: 28/@rem;
  }
  .peopleInfo > strong {
    float: left;
    font-size: 30/@rem;
    line-height: 50/@rem;
    color: #2e2e2e;
    font-weight: bold;
  }
  .playPeopleList > li > i {
    float: left;
    width: 34/@rem;
    height: 34/@rem;
    margin-top: 32/@rem;
    background: url("../assets/img/cancelIcon.png") no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
    margin-right: 35/@rem;
  }
  .container{
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    background: linear-gradient(rgb(52,147,235),white,);
    width: 100%;
    height: 100%;
  }
  header{
    position: fixed;
    top: 0;
    z-index: 2;
    width: 100%;
    height: 120/@rem;
    line-height: 120/@rem;
    /*background-color: red;*/
    text-align: center;
    color: white;
    font-size: 40/@rem;
  }
  .goBack{
    position: fixed;
    top: 50/@rem;
    left: 50/@rem;
    z-index: 3;
    border-left: 2px solid white;
    border-bottom: 2px solid white;
    width: 30/@rem;
    height: 30/@rem;
    transform: rotate(45deg);
  }
  .startToEnd{
    /*background-color: rosybrown;*/
    height: 250/@rem;
    margin-top: 120/@rem;
    color: white;
  }
  section{
    background-color: rgb(241,241,241);
    height: 100%;
    width: 100%;
  }
  section>h1{
    color: #888888;
    font-size: 33/@rem;
    font-weight: bold;
    /*background-color: rebeccapurple;*/
    padding: 20/@rem 0/@rem 10/@rem 50/@rem;
  }
  .startBox{
    float: left;
    /*background-color: rebeccapurple;*/
    width: 35%;
    height: 100%;
  }
  .startBox>h1{
    text-align: center;
    font-size: 40/@rem;
    margin-top: 30/@rem;
  }
  .startBox>h3{
    text-align: center;
    margin: 85/@rem 0/@rem 0/@rem 0/@rem;
  }
  .middleBox{
    float: left;
    /*background-color: red;*/
    width: 30%;
    height: 100%;
    text-align: center;
    padding-top: 20/@rem;
  }
  .middleBox>h2{
    font-size: 35/@rem;
  }
  .endBox{
    float: left;
    /*background-color: silver;*/
    width: 35%;
    height: 100%;
  }
  .endBox>h1{
    text-align: center;
    font-size: 40/@rem;
    margin-top: 30/@rem;
  }
  .direction{
    height: 30/@rem;
    /*background-color: green;*/
    position: relative;
  }
  .middleBoxTopText{

  }
  .middleBoxBotText{
    margin-top:20/@rem;
  }
  .straight{
    height: 30/@rem;
    border-bottom: 3px solid white;
  }
  .slope{
    top: 3/@rem;
    right: 15/@rem;
    position: absolute;
    height: 30/@rem;
    transform: rotate(-60deg);
    border-right: 3px solid white;
  }
  .contentList{
    height: 150/@rem;
    background-color: rgb(253,253,253);
    line-height: 150/@rem;
    font-size: 35/@rem;
    font-weight: 500;
    margin-bottom: 2/@rem;
  }

  .listBox{
    height: 150/@rem;
    background-color: white;
  }
</style>
