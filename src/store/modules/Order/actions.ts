import { OrderState, Order } from './types';
import { RootState } from '@/store/types';
import api from '@/api'
import mutations from "./mutations";
import { BareActionContext } from 'vuex-typex';
import { orderStore } from './state';

const a = {
    add({state}: any, order: Order) {
        mutations.add(order)
    },
    replaceAt({state}: any, payload: {idx: number, order: Order}) {
        mutations.replaceAt(payload)
    },
    deleteAt({state}: any, idx: number) {
        mutations.deleteAt(idx)
    },
    setSelectedIdxes({state}: any, selectedIdxes: any[]) {
        mutations.setSelectedIdxes(selectedIdxes)
    }
};

export default {
    add: orderStore.dispatch(a.add),
    replaceAt: orderStore.dispatch(a.replaceAt),
    deleteAt: orderStore.dispatch(a.deleteAt),
    setSelectedIdxes: orderStore.dispatch(a.setSelectedIdxes),
}
