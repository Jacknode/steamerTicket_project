<template>
  <div>
    <header>
      <strong>
        购买船票
      </strong>
    </header>
    <section>
      <img  class="bigImg"  src="../assets/img/home/homePageHeadImg.png"/>
      <div class="ticketType clearfix">
        <i></i>
        <ul class="ticketTypeList">
          <li
            v-for="item,index in ticketType"
            class="clearfix"
            :class="{active: index == typeIndex}"
            @click.stop="initTicketType(item.value,index)">
            <span>{{item.label}}</span>
            <i></i>
          </li>
          <li @click="showSteamerTicket" :class="{active: typeIndex==2}">
            <span>船票</span>
          </li>
        </ul>
        <div class="typeListWrap" v-show="showType" @click="closeType">
          <ul class="typeList">
            <li
              v-for="item,index in ticketTypeList"
              @click.stop="initTicketSale(item.GroupId,index)"
              :class="{active: index == ticketIndex}"
            >
              <span>{{item.GroupName}}</span>
            </li>
          </ul>
        </div>
      </div>
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
    <toast v-model="showErr" type="cancel" :text="errCon"></toast>
  </div>
</template>
<script>
    import {mapGetters} from 'vuex'
    import {Toast} from 'vux'

  export default {
    components: {
      Toast
    },
    name: '',
    data() {
      return {
        ticketType: [
          {
            value: 0,
            label: '观光车票'
          },
          {
            value: 1,
            label: '景区门票'
          },
        ],
        typeIndex: -1,
        isTicket:true,
        showType: false,
        showErr: false,
        errCon: '',
      }
    },
    computed: mapGetters([
      'ticketTypeList',
      'ticketSaleList',
    ]),
    created() {

    },
    methods: {
      //获取票类型
      initTicketType(id, index) {
        this.isTicket = true;
        if (this.typeIndex != index) {
          this.ticketIndex = -1;
        }
        this.typeIndex = index;
        let options = {
          "action": "SellEquipmentGetTickGroup",
          "EquipmentId": this.id,//设备Id
          "TickType": id,//票种分类
        }
        this.$vux.loading.show({
          text: '加载中...'
        })
        this.$store.dispatch('initTicketType', options)
          .then(() => {
            if (this.fristState) {
              this.showType = true;
              this.initTicketSale(0);
              this.fristState = false;
            } else {
              this.showType = true;
            }
            this.$vux.loading.hide()
          }, err => {
            this.showErr = true;
            this.errCon = err;
            this.$vux.loading.hide()
          })
      },
      //获取可售票种
      initTicketSale(id, index) {
        this.ticketIndex = index;
        let options = {
          "action": "SellEquipmentGetTickList",
          "EquipmentId": this.id,//设备Id
          "TickType": "0",//票种分类
          "GroupId": id,//票中分组
        }
        this.$vux.loading.show({
          text: '加载中...'
        })
        this.$store.dispatch('initTicketSale', options)
          .then(() => {
            this.showType = false;
            this.$vux.loading.hide()
          }, err => {
            this.showErr = true;
            this.errCon = err;
            this.showType = false;
            this.$vux.loading.hide()
          })
      },
      //买票
      bayTicket(item) {
        sessionStorage.setItem('ticketObj', JSON.stringify(item))
        this.$router.push({name: 'OrderDetails'})
      },
      closeType() {
        this.showType = false;
      },
      //船票
      showSteamerTicket(){
        this.typeIndex = 2
        this.isTicket = false
        this.showType = false
      },
    },
  }
</script>
<style scoped lang="less" type="text/less">
  @rem: 30rem;

  .ticketType {
    width: 100%;
    border-bottom: 4px solid #dddddd;
    padding: 20/@rem 35/@rem;
    background-color: white;
  }

  .ticketType > i {
    float: left;
    width: 45/@rem;
    height: 44/@rem;
    background: url("../assets/img/ticketIcon.png") no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
  }

  .ticketTypeList {
    float: left;
  }

  .ticketTypeList > li {
    float: left;
    font-size: 29/@rem;
    color: #4e4e4e;
    line-height: 44/@rem;
    margin: 0 25/@rem 0 10/@rem;

  }

  .ticketTypeList > li span {
    float: left;
  }

  .ticketTypeList > li i {
    float: left;
    width: 20/@rem;
    height: 11/@rem;
    background-color: #dbdad8;
    margin: 16/@rem 0 0 5/@rem;
    clip-path: polygon(0 0, 100% 0%, 50% 100%);
    transition: .5s;
  }

  .ticketTypeList > li.active {
    color: #ffca87;
  }

  .ticketTypeList > li.active i {
    clip-path: polygon(50% 0, 100% 100%, 0% 100%);
    background-color: #ffca87;
  }

  .typeListWrap {
    position: fixed;
    top: 200px;
    left: 0;
    right: 0;
    bottom: 0;
    margin-top: 88/@rem;
    background-color: rgba(0, 0, 0, .5);
    z-index: 3;
    padding-bottom: 88/@rem;
    overflow: auto;
  }

  .typeList {
    height: 100%;
    overflow: auto;
  }

  .typeList li {
    font-size: 29/@rem;
    line-height: 91/@rem;
    color: #535353;
    background-color: #fff;
    border: none;
    padding: 0 30/@rem;
    margin-top: -1px;
  }

  .typeList li span {
    display: block;
    border-bottom: 2px solid #dddddd;
  }

  .typeList li:last-of-type span {
    border-bottom: none;
  }

  .typeList li.active {
    color: #ffb448;
  }

  .ticketList {
    padding: 0 30/@rem 26/@rem;
    background-color: #fff;
    position: absolute;
    top: 88/@rem;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: auto;
  }

  .ticketList li {
    padding: 10/@rem 0;
    border-bottom: 1px solid #edeeef;
  }

  .ticketList li:last-of-type {
    border-bottom: none;
  }

  .ticketName {
    float: left;
    width: 60%;
  }

  .ticketName img {
    float: left;
    width: 100/@rem;
    height: 100/@rem;
    -webkit-border-radius: 10/@rem;
    -moz-border-radius: 10/@rem;
    border-radius: 10/@rem;
  }

  .ticketName div {
    overflow: hidden;
  }

  .ticketName strong {
    float: left;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 28/@rem;
    line-height: 100/@rem;
    color: #4e4e4e;
    padding: 0 10/@rem;
  }

  .ticketPrice {
    float: right;
    width: 40%;
    text-align: right;
  }

  .ticketPrice a {
    float: right;
    font-size: 28/@rem;
    line-height: 48/@rem;
    padding: 0 20/@rem;
    background-color: #e1dfdd;
    color: #fff;
    -webkit-border-radius: 10/@rem;
    -moz-border-radius: 10/@rem;
    border-radius: 10/@rem;
    margin-top: 26/@rem;
  }

  .ticketPrice a.active {
    background-color: #ffb448;
  }

  .ticketPrice span {
    float: right;
    font-size: 28/@rem;
    line-height: 48/@rem;
    margin-top: 26/@rem;
    margin-right: 15/@rem;
    color: #ffb448;
  }

  section > p {
    position: relative;
    top: 30/@rem;
    font-size: 30/@rem;
    line-height: 2;
    font-family: "微软雅黑";
    color: #999;
    text-align: center;
  }

  .orderIcon {
    position: fixed;
    bottom: 50/@rem;
    left: 50%;
    width: 183/@rem;
    height: 183/@rem;
    transform: translateX(-50%);
    background: url("../assets/img/orderIcon.png") no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
  }

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
    /*overflow: scroll;*/
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
    margin: 80/@rem 40/@rem 40/@rem 40/@rem;
    font-size: 40/@rem;
    line-height: 120/@rem;
    text-align: center;
  }

</style>
