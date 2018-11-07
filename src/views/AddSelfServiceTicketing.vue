<template>
  <div>
    <header>
      <div class="leftIcon" @click="goTopPage"></div>
      <strong>{{title}}</strong>
    </header>
    <section>
      <div class="inputBox">
        <div class="clearfix">
          <strong>姓名</strong>
          <div>
            <input type="text" v-model="contactsObj.name" placeholder="出游人姓名">
          </div>
        </div>
        <div class="clearfix">
          <strong>身份证</strong>
          <div>
            <input type="text" v-model="contactsObj.IDCard" placeholder="与出游人证件一致">
          </div>
        </div>
        <div class="clearfix">
          <strong>手机号</strong>
          <div>
            <input type="text" v-model="contactsObj.phoneNum" placeholder="用于接受旅程通知">
          </div>
        </div>
      </div>
      <a href="javascript:;" @click="addSubmit">{{subCon}}</a>
    </section>
    <toast v-model="showErr" type="cancel" :text="errCon"></toast>
    <toast v-model="showSuc" type="success" :text="sucCon"></toast>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import {Toast} from 'vux'
  import {isPhone, isCardNo} from '@/assets/js/public'

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
        contactsObj: {
          name: '',
          IDCard: '',
          phoneNum: '',
          isState: false
        },
        selectList: [],
        id: '',
        title: '添加出游人',
        subCon: '确认添加'
      }
    },
    created() {
      if (localStorage.getItem('selectList')) {
        this.selectList = JSON.parse(localStorage.getItem('selectList'))
      }
      if (this.$route.query.id) {
        this.id = this.$route.query.id;
        this.title = '修改出游人';
        this.subCon = '确认修改';
        this.contactsObj = this.selectList.filter(item => {
          if (item.IDCard == this.id) {
            return true
          }
          return false
        })[0]
      } else {
        this.title = '添加出游人';
        this.subCon = '确认添加';
      }
    },
    methods: {
      goTopPage() {
        this.$router.go(-1)
      },
      //确定添加
      addSubmit() {
        //名字
        if (!this.contactsObj.name) {
          this.errCon = '请填写出游人姓名';
          this.showErr = true;
          return
        }
        //身份证号
        if (!isCardNo(this.contactsObj.IDCard)) {
          this.errCon = '请填写正确的身份证号';
          this.showErr = true;
          return
        }
        //手机号
        if (!isPhone(this.contactsObj.phoneNum)) {
          this.errCon = '请填写正确的手机号';
          this.showErr = true;
          return
        }

        //修改
        if (this.id) {
          for (let i = 0; i < this.selectList.length; i++) {
            if( this.selectList[i].IDCard == this.id ){
              this.selectList.splice(i,1,this.contactsObj)
            }
          }
          localStorage.setItem('selectList', JSON.stringify(this.selectList));
          this.sucCon = '修改成功';
          this.showSuc = true;
          setTimeout(() => {
            this.$router.go(-1)
          }, 1000)
        } else {
//          添加

          //判断重复
          for( let i = 0; i < this.selectList.length; i++ ){
            if( this.selectList[i].IDCard == this.contactsObj.IDCard ){
              this.errCon = '该身份证已添加';
              this.showErr = true;
              return
            }
          }

          this.selectList.push(this.contactsObj)
          localStorage.setItem('selectList', JSON.stringify(this.selectList));
          this.sucCon = '添加成功';
          this.showSuc = true;
          setTimeout(() => {
            this.$router.go(-1)
          }, 1000)
        }

      }

    },
  }
</script>
<style scoped lang="less" type="text/less">
  @r: 30rem;
  input {
    border: none;
    background-color: transparent;
  }

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
    bottom: 0;
    background-color: #f8f7f7;
    overflow: auto;
  }

  .inputBox {
    padding: 10/@r 30/@r 0;
    font-size: 28/@r;
    line-height: 48/@r;
  }

  .inputBox > div {
    border-bottom: 1/@r solid #eaeaea;
    padding: 27/@r 0;
  }

  .inputBox strong {
    float: left;
    color: #5c5c5c;
    margin-right: 30/@r;
  }

  .inputBox > div > div {
    overflow: hidden;
  }

  .inputBox input {
    float: left;
    width: 100%;
    font-size: 28/@r;
    line-height: 48/@r;
    padding: 0 10/@r;
    color: #5c5c5c;
  }

  section > a {
    display: block;
    background-color: #ffa948;
    color: #ffffff;
    font-size: 30/@r;
    line-height: 90/@r;
    margin: 90/@r 30/@r 0;
    -webkit-border-radius: 45/@r;
    -moz-border-radius: 45/@r;
    border-radius: 45/@r;
    text-align: center;
  }


</style>
