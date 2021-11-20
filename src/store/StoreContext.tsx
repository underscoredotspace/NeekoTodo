import React, { createContext, useContext, useMemo, useReducer } from "react"
import { rootReducer } from "./reducer"
import { RootState } from "./types"

export const defaultStoreState: RootState = {
    todos: ["something"],
}

const StoreContext = createContext<{ state: RootState; dispatch: unknown }>({
    state: defaultStoreState,
    dispatch: () => null,
})

export const StoreProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(rootReducer, defaultStoreState)

    const contextValue = useMemo(() => {
        return { state, dispatch }
    }, [state, dispatch])

    return (
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    )
}

export const useStoreContext = () => useContext(StoreContext)
