export class Lottery {
    betItems: betItemRow[] = [
        new betItemRow([1, 2, 3, 4, 5, 6, 7, 8, 9], true),
        new betItemRow([1, 2, 3, 4, 5, 6, 7, 8, 9], true),
        new betItemRow(['aaa', 'bbb', 'ccc'], true),
    ]

    calcBet(selectedIdxes: any[]): {betCount: number, price: number} {
        const total = selectedIdxes.reduce((prev, cur) => {
            const rowSum = cur.filter((v: boolean) => v).length
            return prev + rowSum
        }, 0)
        
        return {
            betCount: total,
            price: total * 2
        }
    }
}

export class betItemRow {
    constructor(
        public content: any[], 
        public canMultSelect: boolean
    ) {
    }
}

export class SSC_5Star extends Lottery {
    betItems = [
        new betItemRow([1, 2, 3, 4, 5, 6, 7, 8, 9], true),
        new betItemRow([1, 2, 3, 4, 5, 6, 7, 8, 9], true),
        new betItemRow([1, 2, 3, 4, 5, 6, 7, 8, 9], true),
        new betItemRow([1, 2, 3, 4, 5, 6, 7, 8, 9], true),
        new betItemRow([1, 2, 3, 4, 5, 6, 7, 8, 9], true),
    ]
}

export class N115_First3 extends Lottery {
    betItems = [
        new betItemRow([1, 2, 3, 4, 5, 6, 7, 8, 9], false),
        new betItemRow([1, 2, 3, 4, 5, 6, 7, 8, 9], false),
        new betItemRow([1, 2, 3, 4, 5, 6, 7, 8, 9], false),
    ]
}