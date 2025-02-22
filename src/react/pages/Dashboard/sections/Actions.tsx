import {Button} from "react-bootstrap";

export const Actions = () => {
    return (
        <div className="d-flex justify-content-end gap-2 mb-5">
            <Button className={"button-mapeo-olive-outline"}>Inviter un apporteur</Button>
            <Button className={"button-mapeo-olive-outline"}>Créer un deal</Button>
        </div>
    )
}