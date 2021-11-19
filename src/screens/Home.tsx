import React from "react"
import { Text } from "../components/primitives/Text"
import { Screen } from "../components/Screen"

export const HomeScreen: React.FC = () => {
    return (
        <Screen>
            <Text style={{ color: "white" }}>Hello Todo</Text>
        </Screen>
    )
}
