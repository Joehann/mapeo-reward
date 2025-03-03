import {KpiFromApiType} from "../../domain/kpi.type.ts";

export interface ILeadRepository {
    getKpi(): Promise<KpiFromApiType>
}