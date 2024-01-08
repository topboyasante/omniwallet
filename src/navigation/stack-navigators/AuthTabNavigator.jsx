import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabBar from "../../components/navigation/TabBar";
import PageHeader from "../../components/page-header/PageHeader";
import HomeScreen from "../../screens/app/home";
import CardScreen from "../../screens/app/cards";

const Tab = createBottomTabNavigator();

export default function AuthTabNavigator() {
  return (
    <>
      {/* Pass a header component here, to give the app some sort of layout */}
      <PageHeader />
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="home"
        tabBar={(props) => <TabBar {...props} />}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Cards" component={CardScreen} />
        <Tab.Screen name="Save" component={HomeScreen} />
        <Tab.Screen name="Invest" component={HomeScreen} />
        <Tab.Screen name="Settings" component={HomeScreen} />
      </Tab.Navigator>
    </>
  );
}
