import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

//Page Imports
import LoginScreen from "../../screens/auth/login";
import RegisterScreen from "../../screens/auth/register";
import OnboardingScreen from "../../screens/onboarding";
import { useOmniStore } from "../../zustand";

const Stack = createNativeStackNavigator();

export default function AuthStackNavigator() {
  const hasSeenOnboarding = useOmniStore((state) => state.hasSeenOnboarding);
  return (
    <Stack.Navigator
      initialRouteName={hasSeenOnboarding ? "login" : "onboarding"}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="onboarding" component={OnboardingScreen} />
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}
