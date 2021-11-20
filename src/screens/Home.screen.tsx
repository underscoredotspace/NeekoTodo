import React from "react"
import { Text } from "../components/primitives/Text"
import { Screen } from "../components/Screen"
import { useStoreContext } from "../store/StoreContext"

export const HomeScreen: React.FC = () => {
    const { state } = useStoreContext()
    return (
        <Screen>
            {state.todos.map((todo, ndx) => (
                <Text key={`todo-${ndx}`} style={{ color: "white" }}>
                    {todo}
                </Text>
            ))}
        </Screen>
    )
}
