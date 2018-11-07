/**
 * Created by leibo on 2018/10/8.
 */
// 路由懒加载
const getComponent = (name) => () => import (`../views/${name}.vue`);

export default [
  //首页
  {
    path: '/',
    name: 'Home',
    component: getComponent('Home'),
  },
//  选班次
  {
    path: '/choiceClasses',
    name: 'ChoiceClasses',
    component: getComponent('ChoiceClasses'),
  },
  //  选票型
  {
    path: '/votesType',
    name: 'VotesType',
    component: getComponent('VotesType'),
  },
  //  订单填写
  {
    path: '/orderWriting',
    name: 'OrderWriting',
    component: getComponent('OrderWriting'),
  },
  //  添加自助售票
  {
    path: '/addSelfServiceTicketing',
    name: 'AddSelfServiceTicketing',
    component: getComponent('AddSelfServiceTicketing'),
  },
  //  添加联系人
  {
    path: '/selectTopContacts',
    name: 'SelectTopContacts',
    component: getComponent('SelectTopContacts'),
  },

]
