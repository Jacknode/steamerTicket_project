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
          <h1>请选择您要的舱位</h1>
          <div class="content">
            <div class="contentList" v-for="item,index in 3">
              <strong class="contentListName">豪华舱</strong>
              <span class="contentListNum">10张</span>
              <span class="contentListPrice">¥30元</span>
              <span class="contentListJiaJia">加价</span>
              <div class="sureAppointment">预定</div>
            </div>
          </div>
        </section>
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
  .contentListName{
    margin: 0 50/@rem;
  }
  .contentListNum{
    margin: 0/@rem 50/@rem 0/@rem 0/@rem;
  }
  .contentListPrice{

  }
  .contentListJiaJia{

  }
  .sureAppointment{
    color: #ebebeb;
    background-color: rgb(243,172,35);
    height: 60/@rem;
    width: 110/@rem;
    text-align: center;
    line-height:60/@rem;
    border-radius: 5/@rem;
    font-size: 33/@rem;
    float: right;
    margin: 45/@rem 50/@rem 0/@rem 0/@rem;
  }
</style>
