import { Lottery } from './Lottery';

class LotteryFactory {
    cache: any[] = []

    async getLottery(ltName: string): Promise<Lottery> {
        const l = await import('./Lottery')
        return new l.SSC_5Star()
    }
}

export default new LotteryFactory()