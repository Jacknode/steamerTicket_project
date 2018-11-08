<template>
    <div>
      <div class="container">
        <header>
          <div class="goBack" @click="goBack"></div>
          <strong>泸州码头->自贡码头</strong>
        </header>
        <section>
          <!--前一天-->
          <div class="witchDay">
            <strong class="beforeDay">前一天</strong>
            <span>2018-11-06 周二</span>
            <div class="xia"></div>
            <strong class="lastDay">后一天</strong>
          </div>
          <!--提示-->
          <div class="remindBox">
            提示 : 贵宾舱 , 豪华舱 , 经济舱的不同类型有所加价 , 请根据您的需要进行选择.
          </div>
          <!--预约-->
          <div class="takeAppointment clearfix" v-for="item,index in 2">
            <div class="takeAppointmentLeftBox">
              <h1>11 : 30</h1>
              <h2>T121</h2>
            </div>
            <div class="takeAppointmentMiddleBox clearfix">
              <div class="startEnd">
                <div class="start">始</div>
                <div class="line"></div>
                <div class="end">终</div>
              </div>
              <div class="startEndRight">
                <h3 class="startEndRightTop"> 上大陈码头</h3>
                <h3 class="startEndRightBot">椒江码头</h3>
              </div>
            </div>
            <div class="takeAppointmentRightBox">
              <span>¥300</span>
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
      methods:{
        goBack(){
          this.$router.go(-1)
        },
      },
    }
</script>
<style scoped type="text/less" lang="less">
  @rem:30rem;
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
    height: 200/@rem;
    line-height: 200/@rem;
    /*background-color: red;*/
    text-align: center;
    color: white;
    font-size: 40/@rem;
  }
  .goBack{
    position: fixed;
    top: 90/@rem;
    left: 40/@rem;
    z-index: 3;
    border-left: 2px solid white;
    border-bottom: 2px solid white;
    width: 30/@rem;
    height: 30/@rem;
    transform: rotate(45deg);
  }
  section{
    /*background-color: green;*/
    position: fixed;
    top: 200/@rem;
    width: 100%;
    height:100%;
  }
  .witchDay{
    color: white;
    font-size: 40/@rem;
    position: relative;
    /*background-color: red;*/
    height:100/@rem;
    line-height: 100/@rem;
  }
  .witchDay>span{
    font-size: 30/@rem;
  }
  .xia{
    position: absolute;
    top: 40/@rem;
    right: 250/@rem;
    border-left: 1px solid white;
    border-bottom: 1px solid white;
    width: 18/@rem;
    height: 18/@rem;
    transform: rotate(-45deg);
  }
  .beforeDay{
    margin:  0/@rem 70/@rem 0/@rem 30/@rem;
  }
  .lastDay{
    margin:  0/@rem 0/@rem 0/@rem 120/@rem;
  }
  .remindBox{
    height: 160/@rem;
    background-color: white;
    border-radius: 10/@rem;
    margin: 20/@rem;
    padding: 20/@rem 30/@rem;
    color: rgb(189,169,138);
    font-size: 33/@rem;
  }
  .takeAppointment{
    height: 230/@rem;
    border-radius: 10/@rem;
    background-color: white;
    margin: 40/@rem 20/@rem;
    padding: 20/@rem 30/@rem;
  }
  .takeAppointmentLeftBox{
    width: 30%;
    height: 100%;
    /*background-color: red;*/
    float: left;
  }
  .takeAppointmentLeftBox>h1{
    font-size: 45/@rem;
    text-align: center;
    margin: 20/@rem 52/@rem 0/@rem 0/@rem;
  }
  .takeAppointmentLeftBox>h2{
    font-size: 40/@rem;
    text-align: center;
    color: silver;
    margin: 0/@rem 52/@rem 0/@rem 0/@rem;
  }
  .takeAppointmentMiddleBox{
    width: 40%;
    height: 100%;
    /*background-color: greenyellow;*/
    float: left;
  }
  .takeAppointmentRightBox{
    width: 30%;
    height: 100%;
    /*background-color: rebeccapurple;*/
    float: left;
  }
  .takeAppointmentRightBox>span{
    display: block;
    color: rgb(96,170,239);
    font-size: 35/@rem;
    margin: 30/@rem 20/@rem 20/@rem 100/@rem;
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
/*    margin: 20/@rem 0/@rem 0@rem 50/@rem;*/
  }
  .startEndRight{
    color: silver;
  }
  .startEnd{
    width: 45/@rem;
    height: 100%;
    /*background-color: rosybrown;*/
    float: left;
  }
  .start{
    width: 45/@rem;
    height: 45/@rem;
    border-radius:45px;
    background-color: rgb(96,170,239);
    margin-top: 25/@rem;
    color: white;
    text-align: center;
  }
  .line{
    height:50/@rem;
    border-left: 1px solid rgb(96,170,239);
    margin-left: 22/@rem;
  }
  .end{
    width: 45/@rem;
    height: 45/@rem;
    border-radius:45px;
    background-color: rgb(96,170,239);
    color: white;
    text-align: center;
  }
  .startEndRightTop{
    margin: 20/@rem 0/@rem 55/@rem 70/@rem;
  }
  .startEndRightBot{
    margin: 0/@rem 0/@rem 0/@rem 70/@rem;
  }
</style>
