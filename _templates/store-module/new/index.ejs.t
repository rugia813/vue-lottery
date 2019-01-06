---
to: src/store/modules/<%= name %>/index.ts
---
import { actions } from './actions';
import { mutations } from './mutations';
import { <%= name %>State } from './types';
import storeBuilder from "@/store/storeBuilder";

const state: <%= name %>State = {
    endTime: 0
};

const b = storeBuilder.module<<%= name %>State>('<%= name %>', state)
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


