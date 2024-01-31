import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import SafeAreaContainer from "../../../components/ui/SafeAreaContainer";
import CustomTextComponent from "../../../components/ui/Text";
import ActiveInvestments from "../../../components/screen-components/investments/ActiveInvestments";
import ComponentSwitcher from "../../../components/ui/ComponentSwitcher";
import CompletedInvestments from "../../../components/screen-components/investments/CompletedInvestments";

const screens = [
  {
    id: 0,
    title: "Active",
    content: <ActiveInvestments />,
  },
  {
    id: 1,
    title: "Completed",
    content: <CompletedInvestments />,
  },
];

export default function InvestScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaContainer>
      <View>
        <View className="flex flex-row justify-between items-center mb-5">
          <CustomTextComponent
            type={`semibold`}
            content={`Your Investments`}
            additionalClasses={`text-xl`}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate("add-investment-goal")}
            className="bg-black rounded-full px-5 py-1 flex flex-row items-center"
          >
            <CustomTextComponent
              type={`semibold`}
              content={`Create`}
              additionalClasses={`text-lg text-white`}
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
