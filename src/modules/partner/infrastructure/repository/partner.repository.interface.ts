import {Partner, PartnerToCreate} from "../../domain/partner.type.ts";

export interface IPartner {
    create: (partner: PartnerToCreate) => Promise<Partner>
}