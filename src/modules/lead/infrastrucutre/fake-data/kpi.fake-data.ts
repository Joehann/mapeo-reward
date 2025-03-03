import {KpiFromApiType} from "../../domain/kpi.type.ts";

export const KPIFakeData: KpiFromApiType = {
    onGoingDeals: {
        count: 3
    },
    completedDeals: {
        count: 17
    },
    totalRewards: {
        totalAmount: 3400,
        currency: 'EUR'
    },
    transactions: {
        totalAmount: 4527000,
        currency: 'EUR'
    }
}