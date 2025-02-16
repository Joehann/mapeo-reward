import {Card, Col, Row} from "react-bootstrap";
import {KPICard} from "../components/Card.tsx";

export const KPI = () => {
    return <Row>
        <Col>
            <KPICard title="Nombre d'affaires en cours" value='3'/>
        </Col>
        <Col>
            <Card>
                <KPICard title="Nombre d'affaires conclues" value='17'/>
            </Card>
        </Col>
        <Col>
            <Card>
                <KPICard title="Total des récompenses versées" value='3 400€'/>
            </Card>
        </Col>
        <Col>
            <Card>
                <KPICard title="Montant total des transactions" value='4 527 000 €'/>
            </Card>
        </Col>
    </Row>;
}