<template>
  <div>
    <header>
      <div class="leftIcon" @click="goTopPage"></div>
      <strong>选择出游人</strong>
      <div class="addIcon" @click="goAddContacts"></div>
    </header>
    <section>
      <ul class="contactsList">
        <li class="clearfix" v-for="item,index in selectList">
          <div class="contactsInfo" @click="changeContacts(item)">
            <i class="selectState" :class="{active: item.isState}"></i>
            <strong>{{item.name}}</strong>
            <span>{{item.IDCard}}</span>
          </div>
          <div class="operation" v-show="!item.isState">
            <i class="update" @click="goUpdate(item.IDCard)"></i>
            <i class="delete" @click="deleteObj(item.IDCard)"></i>
          </div>
        </li>
      </ul>
      <p v-show="!selectList.length">暂无出游人..请添加</p>
      <a href="javascript:;" @click="changeSubmit" v-show="selectList.length">确认</a>
    </section>
    <!--删除弹窗-->
    <div class="deleteWrap" v-show="showPopup" @click="cancelChangeColse">
      <div class="deleteBox" @click.stop="clickWhite">
        <strong>是否取消选择?</strong>
        <div class="clearfix">
          <a href="javascript:;" @click.stop="cancelChangeColse">取消</a>
          <a href="javascript:;" @click.stop="cancelChangeSub">确定</a>
        </div>
      </div>
    </div>
    <toast v-model="showErr" type="cancel" :text="errCon"></toast>
    <toast v-model="showSuc" type="success" :text="sucCon"></toast>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import {Toast} from 'vux'

  export default {
    components: {
      Toast,
    },
    computed: mapGetters([]),
    data() {
      return {
        errCon: '',
        showErr: false,
        sucCon: '',
        showSuc: false,
        selectList: [],
        showPopup: false,
        id: '',
      }
    },
    created() {
      if (localStorage.getItem('selectList')) {
        this.selectList = JSON.parse(localStorage.getItem('selectList'))
      }
    },
    methods: {
      goTopPage() {
        this.$router.push({name: 'OrderDetails'});
      },
      //添加常用联系人
      goAddContacts() {
        localStorage.setItem('selectList', JSON.stringify(this.selectList));
        this.$router.push({name: 'AddTopContacts'});
      },
      //修改
      goUpdate(id) {
        localStorage.setItem('selectList', JSON.stringify(this.selectList));
        this.$router.push({name: 'AddTopContacts', query: {id: id}});
      },
      //删除
      deleteObj(id) {
        this.id = id;
        this.showPopup = true;
      },

      cancelChangeSub() {
        this.selectList = this.selectList.filter(item => {
          if (item.IDCard == this.id) {
            return false
          }
          return true
        })
        localStorage.setItem('selectList', JSON.stringify(this.selectList));
        this.sucCon = '删除成功'
        this.showSuc = true;
        this.showPopup = false;
      },
      cancelChangeColse() {
        this.showPopup = false;
      },
      //选择出游人
      changeContacts(item) {
        item.isState = !item.isState;
      },
      //确认
      changeSubmit() {
        localStorage.setItem('selectList', JSON.stringify(this.selectList));
        this.$router.push({name: 'OrderDetails'});
      }
    },
  }
</script>
<style scoped lang="less" type="text/less">
  @r: 30rem;
  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #ffa948;
    height: 88/@r;
    z-index: 2;
    box-shadow: 0 0 30/@r #999;
  }

  header > .leftIcon {
    width: 21/@r;
    height: 38/@r;
    background: url("../assets/img/shouye_09.png") no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
    float: left;
    margin: 25/@r 0 0 30/@r;
  }

  header > .addIcon {
    float: right;
    height: 32/@r;
    width: 32/@r;
    background: url("../assets/img/addIcon1.png") no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
    margin: 28/@r 30/@r 0 0;
  }

  header > strong {
    font-size: 30/@r;
    line-height: 38/@r;
    color: #fff;
    position: absolute;
    top: 25/@r;
    left: 50%;
    transform: translateX(-50%);
  }

  section {
    position: fixed;
    top: 88/@r;
    left: 0;
    right: 0;
    bottom: 88/@r;
    background-color: #f8f7f7;
    overflow: auto;
  }

  .contactsList {
    margin-top: 10/@r;
  }

  .contactsList > li {
    background-color: #fff;
    padding: 30/@r;
    margin-bottom: 10/@r;
  }

  .contactsInfo {
    float: left;
    font-size: 30/@r;
    line-height: 44/@r;
    color: #2e2e2e;
  }

  .contactsInfo strong {
    float: left;
    width: 80/@r;
    border-right: 2/@r solid #ccc;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .contactsInfo span {
    float: left;
    padding-left: 10/@r;
  }

  .operation {
    float: right;
  }

  .update {
    float: left;
    width: 33/@r;
    height: 35/@r;
    background: url("../assets/img/updateIcon.png") no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
    margin-top: 7/@r;
    margin-right: 30/@r;
  }

  .delete {
    float: left;
    width: 36/@r;
    height: 36/@r;
    background: url("../assets/img/deleteIcon.png") no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
    margin-right: 1px;
    margin-top: 4/@r;
  }

  .selectState {
    float: left;
    width: 40/@r;
    height: 40/@r;
    border: 2/@r solid #ccc;
    -webkit-border-radius: 20/@r;
    -moz-border-radius: 20/@r;
    border-radius: 20/@r;
    margin-right: 17/@r;
  }

  .selectState.active {
    border-color: #f4ac5b;
    background-color: #f4ac5b;
  }

  .selectState.active:before {
    content: '';
    width: 10/@r;
    height: 25/@r;
    border-right: 3/@r solid #fff;
    border-bottom: 3/@r solid #fff;
    display: block;
    transform: rotate(45deg);
    margin: 0 auto;
  }

  section > p {
    text-align: center;
    font-size: 30/@r;
    color: #999;
    line-height: 60/@r;
  }

  section > a {
    display: block;
    margin: 150/@r 30/@r 50/@r;
    background-color: #ffa948;
    -webkit-border-radius: 44/@r;
    -moz-border-radius: 44/@r;
    border-radius: 44/@r;
    font-size: 35/@r;
    line-height: 88/@r;
    text-align: center;
    color: #fff;
    letter-spacing: 10/@r;
  }

  .deleteWrap {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, .5);
  }

  .deleteBox {
    width: 500/@r;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    -webkit-border-radius: 20/@r;
    -moz-border-radius: 20/@r;
    border-radius: 20/@r;
  }

  .deleteBox strong {
    display: block;
    text-align: center;
    font-size: 34/@r;
    font-weight: bold;
    color: #4a4949;
    line-height: 132/@r;
    border-bottom: 2px solid #dedee2;
  }

  .deleteBox a:first-of-type {
    border-right: 2px solid #dedee2;
  }

  .deleteBox a {
    float: left;
    width: 50%;
    font-size: 34/@r;
    font-weight: bold;
    text-align: center;
    color: #f5a64f;
    line-height: 85/@r;
  }

</style>
