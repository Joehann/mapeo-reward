import {IPartner} from "./repository/partner.repository.interface.ts";
import {Partner} from "../domain/partner.type.ts";

export const partnerPresenter = (repository: IPartner) => (): BusinessPartnerPresenterType => {
    const handleInvitePartner = async (partner: Partner) => {
        return await repository.create(partner)
    }

    const handleRetrieveAllPartners = async (set: (partners: Partner[]) => void): Promise<void> => {
        const partners = await repository.findAll()
        set(partners)
    }

    return {
        handleInvitePartner,
        handleRetrieveAllPartners,
    }
}

export type BusinessPartnerPresenterType = {
    handleInvitePartner: (partner: Partner) => Promise<Partner>
    handleRetrieveAllPartners: (set: (partners: Partner[]) => void) => Promise<void>
}