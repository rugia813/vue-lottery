import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import { RootState } from './types'
import { getStoreBuilder } from "vuex-typex";
import Timer from "./modules/timer";
import Order from "./modules/Order";

Vue.use(Vuex)

const store: Store<RootState> = getStoreBuilder<RootState>().vuexStore() 

export {
    Timer,
    Order,
}
export default store
