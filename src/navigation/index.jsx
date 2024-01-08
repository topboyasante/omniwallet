import { NavigationContainer } from "@react-navigation/native";
import { useOmniStore } from "../zustand";
import { StatusBar } from "expo-status-bar";
import AppStackNavigator from "./stack-navigators/AppStackNavigator";
import AuthStackNavigator from "./stack-navigators/AuthStackNavigator";
import { Manrope_400Regular,Manrope_600SemiBold,Manrope_700Bold } from "@expo-google-fonts/manrope";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";

// Makes the native splash screen (configured in app.json) remain visible until hideAsync is called.
SplashScreen.preventAutoHideAsync();

export default function AppRoot() {
  const isAuthorized = useOmniStore((state) => state.isAuthorized);
  const [fontLoaded] = useFonts({
    "manrope-reg": Manrope_400Regular,
    "manrope-semibold": Manrope_600SemiBold,
    "manrope-bold": Manrope_700Bold,
  });

  if (!fontLoaded) {
    return undefined;
  } else {
    // Hides the native splash screen immediately.
    SplashScreen.hideAsync();
  }
  return (
    <NavigationContainer>
      <StatusBar />
      {/* Displays "routes" based on login status */}
      {isAuthorized ? <AppStackNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
}
