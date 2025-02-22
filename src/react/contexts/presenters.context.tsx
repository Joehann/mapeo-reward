import {createContext, ReactElement, useMemo} from 'react';
import {
    BusinessPartnerRepository
} from "../../modules/business-partner/infrastructure/repository/business-partner.repository.ts";
import {
    businessPartnerPresenter,
    BusinessPartnerPresenterType
} from "../../modules/business-partner/infrastructure/business-partner.presenter.ts";
import {LeadRepository} from "../../modules/lead/infrastrucutre/repository/lead.repository.ts";
import {leadPresenter, LeadPresenterType} from "../../modules/lead/infrastrucutre/lead.presenter.ts";

type PresenterContextType = {
    businessPartner: () => BusinessPartnerPresenterType
    lead: () => LeadPresenterType
}

// eslint-disable-next-line react-refresh/only-export-components
export const PresenterContext = createContext<PresenterContextType | null>(null);

export const PresenterProvider = ({children}: { children: ReactElement }) => {
    const repositories = useMemo(() => {
        return {
            businessPartnerRepository: new BusinessPartnerRepository(),
            leadRepository: new LeadRepository(),
        };
    }, []);

    const presenters = {
        businessPartner: businessPartnerPresenter(repositories.businessPartnerRepository),
        lead: leadPresenter(repositories.leadRepository),
    }

    return (
        <PresenterContext.Provider value={presenters}>
            {children}
        </PresenterContext.Provider>
    );
};




