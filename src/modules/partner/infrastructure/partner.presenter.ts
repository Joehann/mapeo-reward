import {IPartner} from "./repository/partner.repository.interface.ts";
import {Partner} from "../domain/partner.type.ts";

export const partnerPresenter = (repository: IPartner) => (): BusinessPartnerPresenterType => {
    const handleInvitePartner = async (partner: Partner) => {
        return await repository.create(partner)
    }

    return {
        handleInvitePartner: handleInvitePartner
    }
}

export type BusinessPartnerPresenterType = {
    handleInvitePartner: (partner: Partner) => Promise<Partner>
}