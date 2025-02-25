import {IBusinessPartner} from "./repository/business-partner.repository.interface.ts";
import {BusinessPartner} from "../domain/business-partner.type.ts";

export const businessPartnerPresenter = (repository: IBusinessPartner) => (): BusinessPartnerPresenterType => {
    const handleInviteBusinessPartner = async (partner: BusinessPartner) => {
        return await repository.create(partner)
    }

    return {
        handleInviteBusinessPartner
    }
}

export type BusinessPartnerPresenterType = {
    handleInviteBusinessPartner: (partner: BusinessPartner) => Promise<BusinessPartner>
}