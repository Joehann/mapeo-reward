import {KPI} from "./sections/KPI.tsx";
import {Container} from "react-bootstrap";

const Dashboard = () => {
    return <Container>
        <h2>Indicateurs clés</h2>
        <KPI/>
    </Container>;
};

export default Dashboard;

