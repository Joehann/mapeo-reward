import {BusinessPartner, BusinessPartnerToCreate} from "../../domain/business-partner.type.ts";

export interface IBusinessPartner {
    create: (partner: BusinessPartnerToCreate) => Promise<BusinessPartner>
}