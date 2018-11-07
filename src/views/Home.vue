<template>
  <div>
    <header>
      <strong>
        购买船票
      </strong>
    </header>
    <section>
      <img  class="bigImg"  src="../assets/img/home/homePageHeadImg.png"/>
      <div class="addressBox">
        <!--出发-->
        <div class="startOff">
          <img class="startOffImg" src="../assets/img/home/startOff.png" />
          <span>出发</span>
          <strong>泸州码头</strong>
        </div>
        <!--到达-->
        <div class="arrive">
          <img class="arriveImg" src="../assets/img/home/arrive.png" />
          <span>到达</span>
          <strong>自贡码头</strong>
        </div>
        <!--往返图-->
        <img class="return" src="../assets/img/home/return.png"/>
      </div>
      <div class="timeBox clearfix">
        <img class="timeBoxImg" src="../assets/img/home/time.png" />
        <span>出发日期</span>
        <strong>11月6日</strong>
        <i>明天</i>
      </div>
      <!--查询班次-->
      <div class="searchCarTimes">查询班次</div>
    </section>
  </div>
</template>
<script>
    import {mapGetters} from 'vuex'

  export default {

    name: '',
    data() {
      return {

      }
    },
    computed: mapGetters([
      '',
    ]),
    created() {

    },
    methods: {

    },
  }
</script>
<style scoped lang="less" type="text/less">
  @rem: 30rem;

  header{
    color: rgb(81, 81, 81);
    position: fixed;
    top: 0/@rem;
    height: 80/@rem;
    width: 100%;
    /*background-color: red;*/
    line-height: 80/@rem;
    text-align: center;
    font-size: 40/@rem;
    font-weight: 600;
  }
  section{
    background-color: rgb(244,244,244);
    position: fixed;
    top: 80/@rem;
    width: 100%;
    height: 100%;
  }
  .bigImg{
    width: 100%;
    height: 470/@rem;
  }
  .startOffImg{
    height: 50/@rem;
    width: 40/@rem;
    margin: 40/@rem 10/@rem 0/@rem 50/@rem;
  }
  .arriveImg{
    height: 50/@rem;
    width: 40/@rem;
    margin: 40/@rem 10/@rem 0/@rem 50/@rem;
  }
  .startOff{
    height: 140/@rem;
    width: 100%;
    background-color: white;
    margin-top: 10/@rem;
    margin-bottom: 2/@rem;
    line-height: 140/@rem;
    font-size: 40/@rem;
  }
  .arrive{
    height: 140/@rem;
    width: 100%;
    background-color: white;
    line-height: 140/@rem;
    font-size: 40/@rem;
  }
  .startOff>span{
    color: rgb(141,140,140);
  }
  .arrive>span{
    color: rgb(141,140,140);
  }
  .timeBox>span{
    color: rgb(141,140,140);
  }
  .startOff>strong{
    float: right;
    margin-right: 150/@rem;
  }
  .timeBox>strong{
    float: right;
    margin-right: 160/@rem;
  }
  .timeBox>i{
    float: right;
    margin-right: -250/@rem;
    font-weight: 500;

  }
  .arrive>strong{
    float: right;
    margin-right: 150/@rem;
  }
  .addressBox{
    position: relative;
    margin-bottom:20/@rem;
  }
  .return{
    position: absolute;
    height: 60/@rem;
    width: 30/@rem;
    top: 110/@rem;
    right: 80/@rem;
  }
  .timeBox{
    height: 140/@rem;
    line-height: 140/@rem;
    background-color: white;
    font-size: 40/@rem;
  }
  .timeBoxImg{
    width: 40/@rem;
    height: 40/@rem;
    margin: 50/@rem 10/@rem 40/@rem 50/@rem;
  }
  .searchCarTimes{
    background-color: rgb(52,147,235);
    color: white;
    border-radius: 10/@rem;
    height: 120/@rem;
    margin: 160/@rem 40/@rem 40/@rem 40/@rem;
    font-size: 40/@rem;
    line-height: 120/@rem;
    text-align: center;
  }

</style>
