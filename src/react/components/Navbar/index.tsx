import {Badge, Button, Container, Image, Nav, Navbar} from "react-bootstrap";
import Logo from "../../../assets/logo.png"
import './navbar.scss'
import {authenticationPresenter} from "../../../modules/authentication/authentication.presenter.ts";
import {useNavigate} from "react-router-dom";

export const MapeoNavbar = () => {
    const navigate = useNavigate();
    const {handleLogout} = authenticationPresenter()

    return (
        <Navbar className={'bg-mapeo-dark justify-content-between'}>
            <Container className={'mapeo-navbar-container'}>
                <Navbar.Brand href="../../../assets/">
                    <Image src={Logo} alt="logo" className={'nav-brand-logo'}/>
                </Navbar.Brand>
                <Nav>
                    <Nav.Link href="/finders" className={'color-mapeo-olive'}>Apporteurs</Nav.Link>
                    <Nav.Link href="/business-referrals" className={'color-mapeo-olive'}>Affaires</Nav.Link>
                    <Nav.Link href="/messenger" className={'color-mapeo-olive'}>
                        Messagerie
                        <Badge bg="danger" pill>
                            3
                        </Badge>
                    </Nav.Link>
                    <Nav.Link href="/settings" className={'color-mapeo-olive'}>Réglages</Nav.Link>
                    <Button variant="light" size={"sm"} className={"ml-5"} onClick={() => handleLogout(navigate)}>Se déconnecter</Button>
                </Nav>
            </Container>
        </Navbar>
    )
};