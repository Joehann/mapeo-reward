import {KpiToDisplayType} from "../domain/kpi.type.ts";
import {kpiToDisplayMapper} from "../application/mapper/kpi.mapper.ts";
import {ILeadRepository} from "./repository/lead.repository.interface.ts";
import {leadToDisplay} from "../domain/lead.type.ts";
import {mapLeadStatus} from "../application/mapper/lead-status.mapper.ts";

export const leadPresenter = (repository: ILeadRepository) => (): LeadPresenterType => {

    const handleGetKpi = async (set: (kpi: KpiToDisplayType) => void) => {
        const KpiFromApi = await repository.getKpi()
        const kpiToDisplay = kpiToDisplayMapper(KpiFromApi)
        set(kpiToDisplay)
    }

    const handleRetrieveAllLeads = async (set: (leads: leadToDisplay[]) => void) => {
        const leads = await repository.findAll()
        const leadsToDisplay = leads.map((lead) => {
            return {
                ...lead,
                status: mapLeadStatus(lead.status)
            }
        })
        set(leadsToDisplay)
    }

    const handleFilterLeadsList = (key: string, leads: leadToDisplay[], setList: (leadsState: leadToDisplay[] | null) => void) => {
        if (key.length < 3 || !leads) return setList(null)

        const lowerKey = key.toLowerCase();
        const filteredList = leads.filter(lead => {
            const values = [
                lead.id,
                lead.propertyReference,
                lead.propertyLocation,
                lead.propertyZipCode,
                lead.status
            ].map(value => value.toLowerCase());

            return values.some(value => value.includes(lowerKey));
        });
        setList(filteredList)
    }


    return {
        handleGetKpi,
        handleRetrieveAllLeads,
        handleFilterLeadsList
    }
}

export type LeadPresenterType = {
    handleGetKpi: (set: (kpi: KpiToDisplayType) => void) => Promise<void>
    handleRetrieveAllLeads: (set: (leads: leadToDisplay[]) => void) => Promise<void>
    handleFilterLeadsList: (key: string, leads: leadToDisplay[], setList: (leadsState: leadToDisplay[] | null) => void) => void
}