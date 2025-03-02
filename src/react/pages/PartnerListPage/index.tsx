import {Container, Table} from "react-bootstrap";
import {usePresenters} from "../../hooks/usePresenters.tsx";
import {Partner} from "../../../modules/partner/domain/partner.type.ts";
import {ReactElement, useEffect, useState} from "react";

export const PartnerListPage = () => {
    const presenters = usePresenters();
    const {handleRetrieveAllPartners} = presenters.businessPartner()
    const [partners, setPartners] = useState<Partner[] | null>(null);

    useEffect(() => {
        if (!partners) {
            void handleRetrieveAllPartners(setPartners)
        }
    }, [partners, handleRetrieveAllPartners])

    if (!partners) return null;

    return <Container>
        <div className='mt-5'>
            <h2 className="mb-4">Liste des apporteurs</h2>
            <Table striped bordered>
                <thead className='fw-bold'>
                <tr>
                    <th>#</th>
                    <th>Nom</th>
                    <th>Prénom</th>
                    <th>Email</th>
                    <th>Téléphone</th>
                    <th>Adresse</th>
                    <th>Type</th>
                    <th>Nombre d'affaires</th>
                    <th>Actif</th>
                </tr>
                </thead>
                <tbody>
                {partners.map((partner: Partner) => PartnersListRow(partner))}
                </tbody>
            </Table>
        </div>
    </Container>
}

const PartnersListRow = (partner: Partner): ReactElement => {
    return <tr>
        <td>{partner.id}</td>
        <td>{partner.lastname}</td>
        <td>{partner.firstname}</td>
        <td>
            <a
                href={`mailto:${partner.email}`}>{partner.email}
            </a>
        </td>
        <td>{partner.phone}</td>
        <td>{partner.address} - {partner.postalCode} {partner.city}</td>
        <td>{partner.type === 'other' ? partner.otherType : partner.type}</td>
        <td>-</td>
        <td>{partner.isEnabled ? 'Oui' : 'Non'}</td>
    </tr>
}