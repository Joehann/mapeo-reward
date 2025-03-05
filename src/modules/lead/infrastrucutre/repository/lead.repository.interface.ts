import {KpiFromApiType} from "../../domain/kpi.type.ts";
import {Lead} from "../../domain/lead.type.ts";

export interface ILeadRepository {
    getKpi(): Promise<KpiFromApiType>

    findAll(): Promise<Lead[]>
}