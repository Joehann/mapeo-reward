import {KPIFakeData} from "../fake-data/kpi.fake-data.ts";
import {KpiFromApiType} from "../../domain/types/kpi.type.ts";

export class BusinessReferalFakeRepository {
    public async getKpi(): Promise<KpiFromApiType> {
        return KPIFakeData
    }
}