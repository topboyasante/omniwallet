import React from "react";
import { View } from "react-native";
import BackButton from "../../../../components/ui/BackButton";
import SafeAreaContainer from "../../../../components/ui/SafeAreaContainer";
import CustomTextComponent from "../../../../components/ui/Text";
import SavingsGoal from "../../../../components/screen-components/savings/SavingsGoal";
import ComponentSwitcher from "../../../../components/ui/ComponentSwitcher";
import SavingsAccount from "../../../../components/screen-components/savings/SavingsAccount";

const screens = [
  {
    id: 0,
    title: "Savings Account",
    content: <SavingsAccount/>
  },
  {
    id: 1,
    title: "Savings Goal",
    content: <SavingsGoal/>,
  },
];

export default function CreateSavingsScreen() {
  return (
    <SafeAreaContainer>
      <View>
        <BackButton />
        <View>
          <CustomTextComponent
            type={`semibold`}
            content={`Create a Savings Goal`}
            additionalClasses={`text-xl`}
          />
          <CustomTextComponent
            type={`regular`}
            content={`Save up for something, or for the future!`}
            additionalClasses={`text-lg text-[#777777]`}
          />
        </View>
      </View>
      <View>
        <ComponentSwitcher components={screens}/>
      </View>
    </SafeAreaContainer>
  );
}
