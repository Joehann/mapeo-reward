import {Table} from "react-bootstrap";
import {ReactElement} from "react";

export const Activities = (): ReactElement => {
    return (
        <div className='mt-5'>
            <h2 className="mb-4">Activités récentes</h2>
            <Table striped bordered>
                <thead className='fw-bold'>
                <tr>
                    <th>Apporteur</th>
                    <th>Téléphone</th>
                    <th>Email</th>
                    <th>Référence du bien</th>
                    <th>Localisation du bien</th>
                    <th>Statut de l'affaire</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>John Doe</td>
                    <td>0698765432</td>
                    <td>
                        <a
                            href='mailto:johndoe@mail.com'>johndoe@mail.com
                        </a>
                    </td>
                    <td>
                        <a
                            href='https://www.mapeo-immo.com/fiches/4-40-26_57939978/4-chambres-vivable-de-plain-pied.html'
                            target='_blank'>CR2181
                        </a>
                    </td>
                    <td>Carlepont</td>
                    <td>Contrat signé</td>
                </tr>
                <tr>
                    <td>Marc Durand</td>
                    <td>0699887766</td>
                    <td>
                        <a
                            href='mailto:marc.durand@mail.com'>marc.durand@mail.com
                        </a>
                    </td>
                    <td><a
                        href='https://www.mapeo-immo.com/fiches/4-40-26_57939963/ribecourt-4-chambres-vivable-de-plain-pied.html'
                        target='_blank'>CR2179</a>
                    </td>
                    <td>Noyon</td>
                    <td>Vente en cours</td>
                </tr>
                </tbody>
            </Table>
        </div>
    )
}