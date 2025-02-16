import {Col, Row} from "react-bootstrap";
import {KPICard} from "../components/Card.tsx";

export const KPI = () => {
    return <>
        <h2 className="mb-4">Indicateurs clés</h2>
        <Row>
            <Col>
                <KPICard title="Nombre d'affaires en cours" value='3'/>
            </Col>
            <Col>
                <KPICard title="Nombre d'affaires conclues" value='17'/>
            </Col>
            <Col>
                <KPICard title="Total des récompenses versées" value='3 400€'/>
            </Col>
            <Col>
                <KPICard title="Montant total des transactions" value='4 527 000 €'/>
            </Col>
        </Row>
    </>;
}