import { Order } from './types';
import mutations from "./mutations";
import { orderStore } from './state';
import LotteryFactory from '@/entities/lotteries/LotteryFactory'
import { Lottery } from '@/entities/lotteries/Lottery';

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
async function calcBet(selectedIdxes: any[]) {
    //not real calculation
    //use Lottery class to implement different calculation for each game type
    const Lottery: Lottery = await LotteryFactory.getLottery('SSC_5Star')
    const {betCount, price} = Lottery.calcBet(selectedIdxes)
    
    mutations.setBetCount(betCount)
    mutations.setPrice(price)
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
