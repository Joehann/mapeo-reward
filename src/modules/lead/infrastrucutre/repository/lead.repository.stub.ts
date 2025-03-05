import {KPIFakeData} from "../fake-data/kpi.fake-data.ts";
import {KpiFromApiType} from "../../domain/kpi.type.ts";
import {ILeadRepository} from "./lead.repository.interface.ts";
import {Lead} from "../../domain/lead.type.ts";
import {leadsCollectionFake} from "../fake-data/lead.fake-data.ts";

export class LeadRepositoryStub implements ILeadRepository {
    private partners: Lead[] = []

    public async getKpi(): Promise<KpiFromApiType> {
        return KPIFakeData
    }

    public async findAll(): Promise<Lead[]> {
        this.set(leadsCollectionFake);
        return this.partners;
    }

    public set(leads: Lead[]) {
        this.partners = leads;
    }
}
