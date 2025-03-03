import {KPIFakeData} from "../fake-data/kpi.fake-data.ts";
import {KpiFromApiType} from "../../domain/kpi.type.ts";
import {ILeadRepository} from "./lead.repository.interface.ts";

export class LeadRepository implements ILeadRepository {
    public async getKpi(): Promise<KpiFromApiType> {
        return KPIFakeData
    }
}