import {IPartner} from "./partner.repository.interface.ts";
import {Partner, PartnerToCreate} from "../../domain/partner.type.ts";

export class PartnerRepositoryStub implements IPartner {
    private partners: Partner[] = [];

    public async create(partner: PartnerToCreate): Promise<Partner> {
        const fakeCreatedPartner = {
            ...partner,
            id: '123',
            createdAt: new Date('2025/02/25'),
            updatedAt: new Date('2025/02/25')
        }
        this.partners.push(fakeCreatedPartner)
        return this.partners[-1]
    }

    public add(partner: Partner): void {
        this.partners.push(partner)
    }

    public set(partners: Partner[]): void {
        this.partners = partners;
    }
}