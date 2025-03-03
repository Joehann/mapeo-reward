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

    const handleFilterPartnersList = (key: string, partners: Partner[], setList: (partnersState: Partner[] | null) => void) => {
        if (key.length < 3 || !partners) return setList(null)

        const lowerKey = key.toLowerCase();
        const filteredList = partners.filter(partner => {
            const values = [
                partner.id,
                partner.firstname,
                partner.lastname,
                partner.email,
                partner.phone,
                partner.address,
                partner.postalCode,
                partner.city
            ].map(value => value.toLowerCase());

            return values.some(value => value.includes(lowerKey));
        });
        setList(filteredList)
    }

    return {
        handleInvitePartner,
        handleRetrieveAllPartners,
        handleFilterPartnersList,
    }
}

export type BusinessPartnerPresenterType = {
    handleInvitePartner: (partner: Partner) => Promise<Partner>
    handleRetrieveAllPartners: (set: (partners: Partner[]) => void) => Promise<void>
    handleFilterPartnersList: (key: string, partners: Partner[], setList: (partnersState: Partner[] | null) => void) => void
}