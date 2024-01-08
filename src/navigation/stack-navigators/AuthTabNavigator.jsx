import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../../screens/app/home";
import TabBar from "../../components/navigation/TabBar";

const Tab = createBottomTabNavigator();

export default function AuthTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="home"
      tabBar={(props) => <TabBar {...props} />}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Cards" component={HomeScreen} />
      <Tab.Screen name="Save" component={HomeScreen} />
      <Tab.Screen name="Invest" component={HomeScreen} />
      <Tab.Screen name="Settings" component={HomeScreen} />
    </Tab.Navigator>
  );
}
