import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

export const Actions = () => {
    const navigate = useNavigate();
    const navigateTo = (url: string): void => {
        navigate(url);
    }
    return (
        <div className="d-flex justify-content-end gap-2 mb-5">
            <Button className={"button-mapeo-olive-outline"} onClick={() => navigateTo('create-partner')}>Inviter un
                apporteur</Button>
            <Button className={"button-mapeo-olive-outline"} onClick={() => navigateTo('create-deal')}>Créer un
                deal</Button>
        </div>
    )
}