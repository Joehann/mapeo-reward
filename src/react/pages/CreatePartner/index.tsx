import Form from "react-bootstrap/Form";
import {Button, Col, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

export const CreatePartnerPage = () => {
    const navigate = useNavigate()

    return <Form className={'col-md-4 mx-auto mt-5'}>
        <Row className="mb-3">
            <Col>
                <Form.Label>Prénom</Form.Label>
                <Form.Control/>
            </Col>
            <Col>
                <Form.Label>Nom</Form.Label>
                <Form.Control/>
            </Col>
        </Row>
        <Row className="mb-3">
            <Col>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email"/>
            </Col>
            <Col>
                <Form.Label>Téléphone</Form.Label>
                <Form.Control/>
            </Col>
        </Row>
        <Row className="mb-3">
            <Col xs={6}>
                <Form.Label>Adresse</Form.Label>
                <Form.Control/>
            </Col>
            <Col xs={2}>
                <Form.Label>Code postal</Form.Label>
                <Form.Control/>
            </Col>
            <Col>
                <Form.Label>Ville</Form.Label>
                <Form.Control/>
            </Col>
        </Row>
        <Row className="mb-3">
            <Col xs={6}>
                <Form.Label>Type d'apporteur</Form.Label>
                <Form.Select aria-label="partner type select">
                    <option disabled>Choisir un type</option>
                    <option value="cgp">Conseiller en Gestion de Patrimoine</option>
                    <option value="broker">Courtier</option>
                    <option value="private-finder">Particulier</option>
                    <option value="other">Autre</option>
                </Form.Select>
            </Col>
            <Col>
                <Form.Label>Précision</Form.Label>
                <Form.Control/>
            </Col>
        </Row>

        <Button className={'button-mapeo-green-outline mx-auto d-block mt-5'}
                type="submit"
                onClick={() => navigate('/')}
        >
            Créer un apporteur
        </Button>
    </Form>
}