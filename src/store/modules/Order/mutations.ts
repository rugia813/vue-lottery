import { OrderState, Order } from './types';
import { orderStore } from './state';
import LotteryFactory from '@/entities/lotteries/LotteryFactory';

function setLottery(state: OrderState, lotteryName: string) {
    state.currentLottery = LotteryFactory.getLottery(lotteryName)
}
function add(state: OrderState, order: Order) {
    state.orderList.push(order)
}
function replaceAt(state: OrderState, {idx, order}: {idx: number, order: Order}) {
    state.orderList[idx] = order
}
function deleteAt(state: OrderState, idx: number) {
    delete state.orderList[idx]
}
function setSelectedIdxes(state: OrderState, selectedIdxes: any[]) {
    state.selectedIdxes = selectedIdxes
}
function setBetCount(state: OrderState, betCount: number) {
    state.currentBetCount = betCount
}
function setPrice(state: OrderState, price: number) {
    state.currentPrice = price
}

export default {
    setLottery: orderStore.commit(setLottery),
    add: orderStore.commit(add),
    replaceAt: orderStore.commit(replaceAt),
    deleteAt: orderStore.commit(deleteAt),
    setSelectedIdxes: orderStore.commit(setSelectedIdxes),
    setBetCount: orderStore.commit(setBetCount),
    setPrice: orderStore.commit(setPrice),
}
