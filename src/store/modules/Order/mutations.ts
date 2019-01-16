import { OrderState, Order } from './types';
import { orderStore } from './state';

function add(state: OrderState, order: Order) {
    state.orderList.push(order)
}
function replaceAt(state: OrderState, {idx, order}: {idx: number, order: Order}) {
    state.orderList[idx] = order
}
function deleteAt(state: OrderState, idx: number) {
    delete state.orderList[idx]
}
function setSelectedIdxes(state: OrderState, selectedIdxes: any[]) {
    state.selectedIdxes = selectedIdxes
}

export default {
    add: orderStore.commit(add),
    replaceAt: orderStore.commit(replaceAt),
    deleteAt: orderStore.commit(deleteAt),
    setSelectedIdxes: orderStore.commit(setSelectedIdxes),
}
