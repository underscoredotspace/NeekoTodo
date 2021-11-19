import React from "react"
import { SafeAreaView, StatusBar } from "react-native"
import { HomeScreen } from "./screens/Home"

const App = () => (
    <SafeAreaView>
        <StatusBar backgroundColor="hotpink" barStyle="dark-content" />

        <HomeScreen />
    </SafeAreaView>
)

export default App
