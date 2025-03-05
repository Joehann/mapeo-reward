import {usePresenters} from "../../hooks/usePresenters.tsx";
import {ChangeEvent, ReactElement, useEffect, useState} from "react";
import {leadToDisplay} from "../../../modules/lead/domain/lead.type.ts";
import {Container, InputGroup, Table} from "react-bootstrap";

export const DealListPage = () => {
    const presenters = usePresenters();
    const {handleRetrieveAllLeads, handleFilterLeadsList} = presenters.lead()
    const [leads, setLeads] = useState<leadToDisplay[] | null>(null)
    const [filteredLeads, setFilteredLeads] = useState<leadToDisplay[] | null>(null);

    useEffect(() => {
        if (!leads) {
            void handleRetrieveAllLeads(setLeads);
        }
    }, [leads, handleRetrieveAllLeads])

    if (!leads) return null;

    return <Container>
        <div className='mt-5'>
            <h2 className="mb-4">Liste des apporteurs</h2>
            <InputGroup className={"my-3 w-50"}>
                <InputGroup.Text>Filtrer les données</InputGroup.Text>
                <input type="text" className="form-control"
                       onChange={(e: ChangeEvent<HTMLInputElement>) => handleFilterLeadsList(e.target.value, leads, setFilteredLeads)}/>
            </InputGroup>

            <Table striped bordered>
                <thead className='fw-bold'>
                <tr>
                    <th>Apporteur</th>
                    <th>Référence</th>
                    <th>Adresse</th>
                    <th>Prix de vente</th>
                    <th>Commission calculée</th>
                    <th>Statut</th>
                </tr>
                </thead>
                <tbody>
                {(filteredLeads?.length ? filteredLeads : leads).map((lead: leadToDisplay) => PartnersListRow(lead))}
                </tbody>
            </Table>
        </div>
    </Container>
};

const PartnersListRow = (lead: leadToDisplay): ReactElement => {
    return <tr>
        <td>{lead.partnerId}</td>
        <td><a
            href={lead.propertyWebLink}
            target='_blank'>{lead.propertyReference}</a>
        </td>
        <td>{lead.propertyAddress} - {lead.propertyZipCode} {lead.propertyLocation}</td>
        <td>{lead.propertyPrice}€</td>
        <td>{lead.propertyPrice * lead.commissionPercentage / 100}€</td>
        <td>{lead.status}</td>
    </tr>
}