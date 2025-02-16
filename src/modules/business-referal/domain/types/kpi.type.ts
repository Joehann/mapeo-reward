export type KpiToDisplayType = {
    onGoingDealsCount: number
    completedDealsCount: number
    totalRewardsAmount: string
    totalTransactionsAmount: string
}

export type KpiFromApiType = {
    onGoingDeals: {
        count: number
    }
    completedDeals: {
        count: number
    }
    totalRewards: {
        totalAmount: number
        currency: string
    }
    transactions: {
        totalAmount: number
        currency: string
    }
}