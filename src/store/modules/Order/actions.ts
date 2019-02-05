import { Order } from './types';
import mutations from "./mutations";
import { orderStore } from './state';

function add({state}: any, order: Order) {
    mutations.add(order)
}
function replaceAt({state}: any, payload: {idx: number, order: Order}) {
    mutations.replaceAt(payload)
}
function deleteAt({state}: any, idx: number) {
    mutations.deleteAt(idx)
}

function setSelectedIdxes({state}: any, selectedIdxes: any[]) {
    mutations.setSelectedIdxes(selectedIdxes)
    calcBet(selectedIdxes)
}
function selectItem({state}: any, {x, y}: {x:number, y:number}) {
    const selectedIdxes = state.selectedIdxes.slice()
    selectedIdxes[x][y] = !selectedIdxes[x][y]
    mutations.setSelectedIdxes(selectedIdxes)
    calcBet(selectedIdxes)
}
function clearSelection({state}: any) {
    let selectedIdxes: any = state.selectedIdxes
    selectedIdxes = selectedIdxes.map((e:any) => e.map((r:any) => false))
    mutations.setSelectedIdxes(selectedIdxes)
    calcBet(selectedIdxes)
}
function calcBet(selectedIdxes: any[]) {
    //not real calculation
    //use Lottery class to implement different calculation for each game type
    const total = selectedIdxes.reduce((prev, cur) => {
        const rowSum = cur.filter((v: boolean) => v).length
        return prev + rowSum
    }, 0)
    
    mutations.setBetCount(total)
    mutations.setPrice(total * 2)
}

export default {
    add: orderStore.dispatch(add),
    replaceAt: orderStore.dispatch(replaceAt),
    deleteAt: orderStore.dispatch(deleteAt),
    setSelectedIdxes: orderStore.dispatch(setSelectedIdxes),
    /** select betItem */
    selectItem: orderStore.dispatch(selectItem),
    clearSelection: orderStore.dispatch(clearSelection),
}
