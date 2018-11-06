/**
 * Created by leibo on 2018/10/8.
 */
// 路由懒加载
const getComponent = (name) => () =>
  import (`../views/${name}.vue`);

export default [{
    path: '/',
    name: 'Home',
    component: getComponent('Home'),
  },

]