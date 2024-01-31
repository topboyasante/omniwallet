import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabBar from "../../components/navigation/TabBar";
import PageHeader from "../../components/page-header/PageHeader";

//Page Imports
import HomeScreen from "../../screens/app/home";
import CardScreen from "../../screens/app/cards";
import SaveScreen from "../../screens/app/save";
import InvestScreen from "../../screens/app/invest";
import SettingsScreen from "../../screens/app/settings";

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
        <Tab.Screen name="Save" component={SaveScreen} />
        <Tab.Screen name="Invest" component={InvestScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </>
  );
}
