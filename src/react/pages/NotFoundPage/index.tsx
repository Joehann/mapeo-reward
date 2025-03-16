import Button from "react-bootstrap/Button";
import {useNavigate} from "react-router-dom";
import './not-found.scss'

export const Index = () => {
    const navigate = useNavigate();
    return <div className="not-found">
        <h1>Oups ! Cette page n'existe pas.</h1>
        <Button variant="outline-secondary" onClick={() => navigate('/')}>Revenir à l'accueil</Button>
    </div>
}