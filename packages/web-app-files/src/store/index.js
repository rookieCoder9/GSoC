import state from './state'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import sidebarModule from './modules/sidebar'
import imgmodeModule from './modules/imgmode'
const namespaced = true

export default {
  namespaced,
  state,
  getters,
  actions,
  mutations,
  modules: {
    sidebar: sidebarModule,
    imgmode: imgmodeModule
  }
}
