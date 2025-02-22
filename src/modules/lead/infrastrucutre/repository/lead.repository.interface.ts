import {KpiFromApiType} from "../../domain/types/kpi.type.ts";

export interface ILeadRepository {
    getKpi(): Promise<KpiFromApiType>
}