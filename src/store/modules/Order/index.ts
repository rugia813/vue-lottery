import actions from './actions';
// import mutations from './mutations';
import { stateGetter } from "./state";

export default {
    get state() {
        return stateGetter()
    },
    get selectedItems(): any[] {
        const { selectedIdxes } = this.state
        const betItems = [
            [1, 2, 3, 4, 5, 6, 7, 8, 9],
            [1, 2, 3, 4, 5, 6, 7, 8, 9],
            [1, 2, 3, 4, 5, 6, 7, 8, 9],
            ['aaa', 'bbb', 'ccc'],
        ]
        return betItems.map((items, i) => items[selectedIdxes[i]])
    },
    // mutations,
    actions
}


