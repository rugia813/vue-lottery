import { Order } from './types';
import mutations from "./mutations";
import { orderStore } from './state';

function add({state}: any, order: Order) {
    mutations.add(order)
}
function replaceAt({state}: any, payload: {idx: number, order: Order}) {
    mutations.replaceAt(payload)
}
function deleteAt({state}: any, idx: number) {
    mutations.deleteAt(idx)
}
function setSelectedIdxes({state}: any, selectedIdxes: any[]) {
    mutations.setSelectedIdxes(selectedIdxes)
}

export default {
    add: orderStore.dispatch(add),
    replaceAt: orderStore.dispatch(replaceAt),
    deleteAt: orderStore.dispatch(deleteAt),
    setSelectedIdxes: orderStore.dispatch(setSelectedIdxes),
}
