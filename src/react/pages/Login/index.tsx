import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {ReactElement} from "react";
import {authenticationPresenter} from "../../../modules/authentication/authentication.presenter.ts";
import {useNavigate} from "react-router-dom";

export const LoginPage = (): ReactElement => {
    const navigate = useNavigate();
    const {handleLogin} = authenticationPresenter()

    return (
            <Form className={'col-md-2 mx-auto mt-5'}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                        type="email"
                        placeholder="john.doe@mail.com"
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                        type="password"
                        placeholder="Mot de passe"
                        required/>
                </Form.Group>

                <Button className={'button-mapeo-green-outline mx-auto d-block mt-5'}
                        type="submit"
                        onClick={()=> handleLogin(navigate)}
                >
                    Se connecter
                </Button>
            </Form>
    );
}