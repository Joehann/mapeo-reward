import {KpiFromApiType} from "../../domain/types/kpi.type.ts";

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