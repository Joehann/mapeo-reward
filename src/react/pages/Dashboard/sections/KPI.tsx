import {Col, Row} from "react-bootstrap";
import {KPICard} from "../components/Card.tsx";
import {businessReferalPresenter} from "../../../../modules/business-referal/business-referal.presenter.ts";
import {KpiToDisplayType} from "../../../../modules/business-referal/domain/types/kpi.type.ts";
import {useEffect, useState} from "react";

export const KPI = () => {
    const {handleGetKpi} = businessReferalPresenter()
    const [kpi, setKpi] = useState<KpiToDisplayType | null>(null)

    useEffect(() => {
        if (!kpi)
            void handleGetKpi(setKpi);
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