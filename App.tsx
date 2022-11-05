import { Provider as PaperProvider } from "react-native-paper";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Styles } from "./src/styles/styles";
import { darkTheme, lightTheme } from "./src/theme/apptheme";
import SplashScreen, { navigationRef } from "./src/screens/SplashScreen";
import LoginScreen from "./src/screens/LoginScreen";
import { useState } from "react";
import SignupScreen from "./src/screens/SignupScreen";
import ForgotPasswordScreen from "./src/screens/ForgotPasswordScreen";
import BasicInfoScreen from "./src/screens/BasicInfo";
import React from "react";

const Stack = createStackNavigator();
export default function App() {
  const [themeMode, setThemeMode] = useState(true);
  return (
    <SafeAreaView style={[Styles.flex1]}>
      <PaperProvider theme={themeMode ? lightTheme : darkTheme}>
        <NavigationContainer ref={navigationRef}>
          <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} initialParams={{ themeMode: themeMode }}/>
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} initialParams={{ themeMode: themeMode }}/>
            <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} initialParams={{ themeMode: themeMode }}/>
            <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{ headerShown: false }} initialParams={{ themeMode: themeMode }}/>
            <Stack.Screen name="BasicInfo" component={BasicInfoScreen} options={{ headerShown: false }} initialParams={{ themeMode: themeMode }}/>
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaView>
  );
}