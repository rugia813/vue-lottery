import { actions } from './actions';
import { mutations } from './mutations';
import { TimerState } from './types';
import storeBuilder from "@/store/storeBuilder";

const state: TimerState = {
    endTime: 0
};

const b = storeBuilder.module<TimerState>('Timer', state)
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