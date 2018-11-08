/**
 * Created by leibo on 2018/10/8.
 */
import {
  getNewStr
} from '@/assets/js/public'

export default {
  //票种类型
  initTicketType({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post(getNewStr, JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            commit('initTicketType', data.data)
            relove();
          } else {
            reject(data.resultcontent)
          }
        })
    })
  },
  //获取可售票种
  initTicketSale({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post(getNewStr, JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            commit('initTicketSale', data.data);
            relove();
          } else {
            reject(data.resultcontent)
          }
        })
    })
  },
}
