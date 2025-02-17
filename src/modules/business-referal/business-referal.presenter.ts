import {BusinessReferalFakeRepository} from "./infrastrucutre/repository/business-referal.fake.repository.ts";
import {KpiToDisplayType} from "./domain/types/kpi.type.ts";
import {kpiToDisplayMapper} from "./application/mapper/kpi.mapper.ts";

export const businessReferalPresenter = (): Presenter => {
    const repository = new BusinessReferalFakeRepository()

    const handleGetKpi = async (set: (kpi: KpiToDisplayType) => void) => {
        const KpiFromApi = await repository.getKpi()
        const kpiToDisplay = kpiToDisplayMapper(KpiFromApi)
        set(kpiToDisplay)
    }

    return {
        handleGetKpi
    }
}

type Presenter = {
    handleGetKpi: (set: (kpi: KpiToDisplayType) => void) => Promise<void>
}