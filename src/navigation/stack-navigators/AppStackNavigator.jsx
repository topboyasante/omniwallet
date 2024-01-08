import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from '../../screens/app/home';
import AuthTabNavigator from "./AuthTabNavigator";

const Stack = createNativeStackNavigator();

export default function AppStackNavigator() {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="tabs" component={AuthTabNavigator} />
  </Stack.Navigator>
  )
}