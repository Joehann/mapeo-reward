import {Table} from "react-bootstrap";
import {ReactElement} from "react";

export const Activities = (): ReactElement => {
    return (
        <div className='mt-5'>
            <h2 className="mb-4">Activités récentes</h2>
            <Table striped bordered hover>
                <thead className='fw-bold'>
                <tr>
                    <th>#</th>
                    <th>Apporteur</th>
                    <th>Référence du bien</th>
                    <th>Localisation</th>
                    <th>Statut de l'affaire</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>John Doe</td>
                    <td><a
                        href={'https://www.mapeo-immo.com/fiches/4-40-26_57939978/4-chambres-vivable-de-plain-pied.html'}>CR2181</a>
                    </td>
                    <td>Carlepont</td>
                    <td>Contrat signé</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Marc Durand</td>
                    <td><a
                        href={'https://www.mapeo-immo.com/fiches/4-40-26_57939963/ribecourt-4-chambres-vivable-de-plain-pied.html'}>CR2179</a>
                    </td>
                    <td>Carlepont</td>
                    <td>Vente en cours</td>
                </tr>
                </tbody>
            </Table>
        </div>
    )
}