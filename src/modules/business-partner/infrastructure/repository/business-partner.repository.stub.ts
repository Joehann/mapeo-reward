import {IBusinessPartner} from "./business-partner.repository.interface.ts";
import {BusinessPartner, BusinessPartnerToCreate} from "../../domain/business-partner.type.ts";

export class BusinessPartnerRepositoryStub implements IBusinessPartner {
    private businessPartners: BusinessPartner[] = [];

    public async create(partner: BusinessPartnerToCreate): Promise<BusinessPartner> {
        const fakeCreatedPartner = {
            ...partner,
            id: '123',
            createdAt: new Date('2025/02/25'),
            updatedAt: new Date('2025/02/25')
        }
        this.businessPartners.push(fakeCreatedPartner)
        return this.businessPartners[-1]
    }

    public add(businessPartner: BusinessPartner): void {
        this.businessPartners.push(businessPartner)
    }

    public set(businessPartners: BusinessPartner[]): void {
        this.businessPartners = businessPartners;
    }
}