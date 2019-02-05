export interface OrderState {
    orderList: Order[],
    selectedIdxes: any[],
    currentBetCount: number,
    currentPrice: number,
}

export interface Order {
    betString: string,
    multiplier: number,
    betCount: number,
    basePrice: number,
}
