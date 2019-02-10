import { Lottery, SSC_5Star } from './Lottery';

class LotteryFactory {
    cache: any[] = []

    getLottery(ltName: string): Lottery {
        return new SSC_5Star()
    }
}

export default new LotteryFactory()