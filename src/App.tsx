import React from "react"
import { SafeAreaView, StatusBar } from "react-native"
import { HomeScreen } from "./screens/Home.screen"
import { StoreProvider } from "./store/StoreContext"

const App = () => (
    <StoreProvider>
        <SafeAreaView>
            <StatusBar backgroundColor="hotpink" barStyle="dark-content" />

            <HomeScreen />
        </SafeAreaView>
    </StoreProvider>
)

export default App
