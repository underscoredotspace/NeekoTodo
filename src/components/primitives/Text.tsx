import React from "react"
import { Text as BaseText, TextProps } from "react-native"

export const Text: React.FC<TextProps> = ({ children, style, ...props }) => (
    <BaseText style={[{ fontSize: 20 }, style]} {...props}>
        {children}
    </BaseText>
)
