import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from '../../screens/app/home';
import AuthTabNavigator from "./AuthTabNavigator";
import AddCardScreen from "../../screens/app/cards/add-card";

const Stack = createNativeStackNavigator();

export default function AppStackNavigator() {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="tabs" component={AuthTabNavigator} />

    {/* Pages that we do not want to show on our bottom tabs */}
    <Stack.Screen name="add-card" component={AddCardScreen} />
    <Stack.Screen name="add-savings-goal" component={AddCardScreen} />
  </Stack.Navigator>
  )
}