import { OrderState, Order } from './types';
import { RootState } from '@/store/types';
import api from '@/api'
import { mutations } from "./mutations";
import { BareActionContext } from 'vuex-typex';

export const actions = {
    add({state}: any, order: Order) {
        mutations.add(state, order)
    },
    replaceAt({state}: any, payload: {idx: number, order: Order}) {
        mutations.replaceAt(state, payload)
    },
    deleteAt({state}: any, idx: number) {
        mutations.deleteAt(state, idx)
    },
    setSelectedIdxes({state}: any, selectedIdxes: any[]) {
        mutations.setSelectedIdxes(state, selectedIdxes)
    }
};


