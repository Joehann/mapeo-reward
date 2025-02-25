import {createContext, ReactElement, useMemo} from 'react';
import {
    BusinessPartnerPresenterType,
    partnerPresenter
} from "../../modules/partner/infrastructure/partner.presenter.ts";
import {LeadRepository} from "../../modules/lead/infrastrucutre/repository/lead.repository.ts";
import {leadPresenter, LeadPresenterType} from "../../modules/lead/infrastrucutre/lead.presenter.ts";
import {PartnerRepositoryStub} from "../../modules/partner/infrastructure/repository/partner-repository.stub.ts";

type PresenterContextType = {
    businessPartner: () => BusinessPartnerPresenterType
    lead: () => LeadPresenterType
}

// eslint-disable-next-line react-refresh/only-export-components
export const PresenterContext = createContext<PresenterContextType | null>(null);

export const PresenterProvider = ({children}: { children: ReactElement }) => {
    const repositories = useMemo(() => {
        return {
            businessPartnerRepository: new PartnerRepositoryStub(),
            leadRepository: new LeadRepository(),
        };
    }, []);

    const presenters = {
        businessPartner: partnerPresenter(repositories.businessPartnerRepository),
        lead: leadPresenter(repositories.leadRepository),
    }

    return (
        <PresenterContext.Provider value={presenters}>
            {children}
        </PresenterContext.Provider>
    );
};




