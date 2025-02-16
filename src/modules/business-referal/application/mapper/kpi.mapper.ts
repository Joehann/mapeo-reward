import {KpiFromApiType, KpiToDisplayType} from "../../domain/types/kpi.type.ts";
import {formatCurrency} from "../../../../core/utils/formater/amountWithCurrency.ts";

export const kpiToDisplayMapper = (apiKpi: KpiFromApiType): KpiToDisplayType => {
    return {
        onGoingDealsCount: apiKpi.onGoingDeals.count,
        completedDealsCount: apiKpi.completedDeals.count,
        totalRewardsAmount: formatCurrency(apiKpi.totalRewards),
        totalTransactionsAmount: formatCurrency(apiKpi.transactions),
    }
}

