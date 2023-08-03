import { createContext, useContext } from "react";
import RaeesAcademyApiClient from "../RaeesAcademyApiClient";


const ApiContext = createContext()

export default function ApiProvider({ children }) {
    const api = new RaeesAcademyApiClient()

    return (
        <ApiContext.Provider value={api}>
            {children}
        </ApiContext.Provider>
    );
}

export function useApi() {
    return useContext(ApiContext)
}
