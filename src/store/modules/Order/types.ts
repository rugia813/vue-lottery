import { Lottery } from '@/entities/lotteries/Lottery';

export interface OrderState {
    orderList: Order[],
    selectedIdxes: any[],
    currentBetCount: number,
    currentPrice: number,
    currentLottery: Lottery
}

export interface Order {
    betString: string,
    multiplier: number,
    betCount: number,
    basePrice: number,
}
