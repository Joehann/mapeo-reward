import {Container, InputGroup, Table} from "react-bootstrap";
import {usePresenters} from "../../hooks/usePresenters.tsx";
import {Partner} from "../../../modules/partner/domain/partner.type.ts";
import {ChangeEvent, ReactElement, useEffect, useState} from "react";

export const PartnerListPage = () => {
    const presenters = usePresenters();
    const {handleRetrieveAllPartners} = presenters.businessPartner()
    const [partners, setPartners] = useState<Partner[] | null>(null);
    const [filteredPartners, setFilteredPartners] = useState<Partner[] | null>(null);

    useEffect(() => {
        if (!partners) {
            void handleRetrieveAllPartners(setPartners)
        }
    }, [partners, handleRetrieveAllPartners])

    const handleFilterPartners = (key: string) => {
        if (key.length < 3 || !partners) return setFilteredPartners(null)

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
        setFilteredPartners(filteredList)
    }

    if (!partners) return null;

    return <Container>
        <div className='mt-5'>
            <h2 className="mb-4">Liste des apporteurs</h2>
            <InputGroup className={"my-3 w-50"}>
                <InputGroup.Text>Filtrer les données</InputGroup.Text>
                <input type="text" className="form-control"
                       onChange={(e: ChangeEvent<HTMLInputElement>) => handleFilterPartners(e.target.value)}/>
            </InputGroup>

            <Table striped bordered>
                <thead className='fw-bold'>
                <tr>
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
                {(filteredPartners?.length ? filteredPartners : partners).map((partner: Partner) => PartnersListRow(partner))}
                </tbody>
            </Table>
        </div>
    </Container>
}

const PartnersListRow = (partner: Partner): ReactElement => {
    return <tr>
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