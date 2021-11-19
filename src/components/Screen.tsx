import React from "react"
import { StyleSheet } from "react-native"
import { Column } from "./primitives/Views"

const style = StyleSheet.create({
    screen: {
        backgroundColor: "navy",
        height: "100%",
        paddingVertical: 16,
        paddingHorizontal: 8,
    },
})

export const Screen: React.FC = ({ children }) => (
    <Column style={style.screen}>{children}</Column>
)
