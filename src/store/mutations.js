/**
 * Created by leibo on 2018/10/8.
 */
import getters from './getters'

const state = {
  openid: 'oH66s1Kt1SneFW1lNHoIR439BRXo',
  ticketTypeList: [],//票种列表
  ticketSaleList: [],//票种可售
};

const mutations = {
  initTicketType(state, data) {
    state.ticketTypeList = data;
  },
  initTicketSale(state, data) {
    state.ticketSaleList = data;
  },
};

export default {
  getters,
  state,
  mutations
}
