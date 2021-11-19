import React from "react"
import { View, ViewProps } from "react-native"

export const Row: React.FC<ViewProps> = ({ children, style, ...props }) => (
    <View style={[{ flexDirection: "row" }, style]} {...props}>
        {children}
    </View>
)

export const Column: React.FC<ViewProps> = ({ children, style, ...props }) => (
    <View style={[{ flexDirection: "column" }, style]} {...props}>
        {children}
    </View>
)
