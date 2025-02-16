import {KPI} from "./sections/KPI.tsx";
import {Container} from "react-bootstrap";
import {Activities} from "./sections/Activities.tsx";

const Dashboard = () => {
    return <Container>
        <KPI/>
        <Activities/>
    </Container>;
};

export default Dashboard;

