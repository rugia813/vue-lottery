import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import { RootState } from './types'
import { timer } from './modules/timer'

Vue.use(Vuex)

const store: StoreOptions<RootState> = {
  modules: {
    timer
  }
}

export default new Vuex.Store<RootState>(store)
