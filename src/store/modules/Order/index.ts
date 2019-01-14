import { actions } from './actions';
import { mutations } from './mutations';
import { OrderState } from './types';
import storeBuilder from "@/store/storeBuilder";

const state: OrderState = {
    orderList: [],
    selectedIdxes: [],
};

const b = storeBuilder.module<OrderState>('Order', state)
const stateGetter = b.state()

export default {
    get state() {
        return stateGetter()
    },
    get selectedItems(): any[] {
        const { selectedIdxes } = state
        const betItems = [
            [1, 2, 3, 4, 5, 6, 7, 8, 9],
            [1, 2, 3, 4, 5, 6, 7, 8, 9],
            [1, 2, 3, 4, 5, 6, 7, 8, 9],
            ['aaa', 'bbb', 'ccc'],
        ]
        return betItems.map((items, i) => items[selectedIdxes[i]])
    },
    mutations:{
        add: b.commit(mutations.add),
        replaceAt: b.commit(mutations.replaceAt),
        deleteAt: b.commit(mutations.deleteAt),
        setSelectedIdxes: b.commit(mutations.setSelectedIdxes),
    },
    actions: {
        add: b.dispatch(actions.add),
        replaceAt: b.dispatch(actions.replaceAt),
        deleteAt: b.dispatch(actions.deleteAt),
        setSelectedIdxes: b.dispatch(actions.setSelectedIdxes),
    }
}


