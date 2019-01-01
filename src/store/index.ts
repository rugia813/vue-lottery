import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import { RootState } from './types'
import { getStoreBuilder } from "vuex-typex";

Vue.use(Vuex)

const store: Store<RootState> = getStoreBuilder<RootState>().vuexStore() 

export default new Vuex.Store<RootState>(store)
