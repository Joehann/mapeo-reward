import {BusinessReferalFakeRepository} from "./infrastrucutre/repository/business-referal.fake.repository.ts";
import {KpiToDisplayType} from "./domain/types/kpi.type.ts";
import {kpiToDisplayMapper} from "./application/mapper/kpi.mapper.ts";

export const businessReferalPresenter = (): Presenter => {
    const repository = new BusinessReferalFakeRepository()

    const handleGetKPY = async (set: (kpi: KpiToDisplayType) => void) => {
        const response = await repository.getKpi()
        const kpi = kpiToDisplayMapper(response)
        set(kpi)
    }

    return {
        handleGetKPY
    }
}

type Presenter = {
    handleGetKPY: (set: (kpi: KpiToDisplayType) => void) => Promise<void>
}