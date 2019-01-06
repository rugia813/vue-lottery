import { actions } from './actions';
import { mutations } from './mutations';
import { OrderState } from './types';
import storeBuilder from "@/store/storeBuilder";

const state: OrderState = {
    endTime: 0
};

const b = storeBuilder.module<OrderState>('Order', state)
const stateGetter = b.state()

export default {
    get state() {
        return stateGetter()
    },
    mutations:{
        setEndTime: b.commit(mutations.setEndTime),
    },
    actions: {
        init: b.dispatch(actions.init)
    }
}


