import Vue from 'vue'
import Vuex from 'vuex'
import storeBuilder from "./storeBuilder";
import Timer from "./modules/timer";
import Order from "./modules/Order";

Vue.use(Vuex)

export {
    Timer,
    Order,
}
export default storeBuilder.vuexStore()
