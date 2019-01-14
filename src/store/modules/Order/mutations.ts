import { MutationTree } from 'vuex';
import { OrderState, Order } from './types';

export const mutations = {
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
    }
};


