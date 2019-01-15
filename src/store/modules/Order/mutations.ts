import { MutationTree } from 'vuex';
import { OrderState, Order } from './types';
import { orderStore } from './state';

export const m = {
    add(state: OrderState, order: Order) {
        state.orderList.push(order)
    },
    replaceAt(state: OrderState, {idx, order}: {idx: number, order: Order}) {
        state.orderList[idx] = order
    },
    deleteAt(state: OrderState, idx: number) {
        delete state.orderList[idx]
    },
    setSelectedIdxes(state: OrderState, selectedIdxes: any[]) {
        state.selectedIdxes = selectedIdxes
    },
};

export default {
    add: orderStore.commit(m.add),
    replaceAt: orderStore.commit(m.replaceAt),
    deleteAt: orderStore.commit(m.deleteAt),
    setSelectedIdxes: orderStore.commit(m.setSelectedIdxes),
}
