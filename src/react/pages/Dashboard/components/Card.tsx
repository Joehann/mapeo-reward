import {Card} from "react-bootstrap";
import {ReactElement} from "react";

export const KPICard = ({title, value}: Props) : ReactElement => {
    return <Card>
        <Card.Header className='text-center text-light bg-mapeo-dark'>{title}</Card.Header>
        <Card.Body className='h2 text-center'>{value}</Card.Body>
    </Card>
}

type Props = {
    title: string,
    value: string | number,
}