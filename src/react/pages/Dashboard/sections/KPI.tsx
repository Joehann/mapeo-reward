import {Col, Row} from "react-bootstrap";
import {KPICard} from "../components/Card.tsx";
import {KpiToDisplayType} from "../../../../modules/lead/domain/kpi.type.ts";
import {useEffect, useState} from "react";
import {usePresenters} from "../../../hooks/usePresenters.tsx";

export const KPI = () => {
    const presenters = usePresenters();
    const {handleGetKpi} = presenters.lead()
    const [kpi, setKpi] = useState<KpiToDisplayType | null>(null)

    useEffect(() => {
        if (!kpi)
            void handleGetKpi(setKpi);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [kpi])

    if (!kpi) return null

    return <>
        <h2 className="mb-4">Indicateurs clés</h2>
        <Row>
            <Col>
                <KPICard title="Nombre d'affaires en cours" value={kpi.onGoingDealsCount}/>
            </Col>
            <Col>
                <KPICard title="Nombre d'affaires conclues" value={kpi.completedDealsCount}/>
            </Col>
            <Col>
                <KPICard title="Total des récompenses versées" value={kpi.totalRewardsAmount}/>
            </Col>
            <Col>
                <KPICard title="Montant total des transactions" value={kpi.totalTransactionsAmount}/>
            </Col>
        </Row>
    </>;
}