import {IBusinessPartner} from "./repository/business-partner.repository.interface.ts";

export const businessPartnerPresenter = (repository: IBusinessPartner) => (): BusinessPartnerPresenterType => {
    const handleInviteBusinessPartner = async () => {
        return await repository.create()
    }

    return {
        handleInviteBusinessPartner
    }
}

export type BusinessPartnerPresenterType = {
    handleInviteBusinessPartner: () => Promise<void>
}