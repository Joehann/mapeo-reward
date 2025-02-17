import {KPI} from "./sections/KPI.tsx";
import {Container} from "react-bootstrap";
import {Activities} from "./sections/Activities.tsx";
import {Actions} from "./sections/Actions.tsx";

const Dashboard = () => {
    return <Container>
        <Actions/>
        <KPI/>
        <Activities/>
    </Container>;
};

export default Dashboard;

