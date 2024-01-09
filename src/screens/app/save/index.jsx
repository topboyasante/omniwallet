import React from "react";
import { TouchableOpacity, View } from "react-native";
import SafeAreaContainer from "../../../components/ui/SafeAreaContainer";
import CustomTextComponent from "../../../components/ui/Text";
import { useNavigation } from "@react-navigation/native";
import CompletedSavings from "../../../components/screen-components/savings/CompletedSavings";
import ComponentSwitcher from "../../../components/ui/ComponentSwitcher";
import ActiveSavings from "../../../components/screen-components/savings/ActiveSavings";

const screens = [
  {
    id: 0,
    title: "Active",
    content: <ActiveSavings />,
  },
  {
    id: 1,
    title: "Completed",
    content: <CompletedSavings />,
  },
];

export default function SaveScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaContainer>
      <View>
        <View className="flex flex-row justify-between items-center mb-5">
          <CustomTextComponent
            type={`semibold`}
            content={`Your Savings`}
            additionalClasses={`text-xl`}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate("add-savings-goal")}
            className="bg-black rounded-full px-5 py-2 flex flex-row items-center"
          >
            <CustomTextComponent
              type={`semibold`}
              content={`New Savings`}
              additionalClasses={`text-lg text-white ml-1`}
            />
          </TouchableOpacity>
        </View>
        <View>
          <ComponentSwitcher components={screens} />
        </View>
      </View>
    </SafeAreaContainer>
  );
}
