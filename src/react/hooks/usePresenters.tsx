import {useContext} from "react";
import {PresenterContext} from "../contexts/presenters.context.tsx";

export const usePresenters = () => {
    const context = useContext(PresenterContext);

    if (!context) {
        throw new Error('usePresenters must be used within a RepositoryProvider');
    }

    return context;
};