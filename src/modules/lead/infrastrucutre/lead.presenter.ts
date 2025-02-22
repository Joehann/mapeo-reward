import {KpiToDisplayType} from "../domain/types/kpi.type.ts";
import {kpiToDisplayMapper} from "../application/mapper/kpi.mapper.ts";
import {ILeadRepository} from "./repository/lead.repository.interface.ts";

export const leadPresenter = (repository: ILeadRepository) => (): LeadPresenterType => {

    const handleGetKpi = async (set: (kpi: KpiToDisplayType) => void) => {
        const KpiFromApi = await repository.getKpi()
        const kpiToDisplay = kpiToDisplayMapper(KpiFromApi)
        set(kpiToDisplay)
    }

    return {
        handleGetKpi
    }
}

export type LeadPresenterType = {
    handleGetKpi: (set: (kpi: KpiToDisplayType) => void) => Promise<void>
}