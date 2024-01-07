import { NavigationContainer } from "@react-navigation/native";
import { useOmniStore } from "../zustand";
import { StatusBar } from "expo-status-bar";
import AppStackNavigator from "./stack-navigators/AppStackNavigator";
import AuthStackNavigator from "./stack-navigators/AuthStackNavigator";

export default function AppRoot() {
  const isAuthorized = useOmniStore((state) => state.isAuthorized);
  return (
    <NavigationContainer>
      <StatusBar />
      {/* Displays "routes" based on login status */}
      {isAuthorized ? <AppStackNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
}
