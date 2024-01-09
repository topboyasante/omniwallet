import React from "react";
import { View } from "react-native";
import SafeAreaContainer from "../../../../components/ui/SafeAreaContainer";
import CustomTextComponent from "../../../../components/ui/Text";
import ComponentSwitcher from "../../../../components/ui/ComponentSwitcher";
import ExistingCardForm from "../../../../components/screen-components/cards/ExistingCardForm";
import VirtualCardForm from "../../../../components/screen-components/cards/VirtualCardForm";

const screens = [
  {
    id: 0,
    title: "Existing Card",
    content: <ExistingCardForm />,
  },
  {
    id: 1,
    title: "Virtual Card",
    content: <VirtualCardForm />,
  },
];

export default function AddCardScreen() {
  return (
    <SafeAreaContainer>
      <View className="mb-3">
        <CustomTextComponent
          type={`semibold`}
          content={`Add A Card`}
          additionalClasses={`text-xl`}
        />
        <CustomTextComponent
          type={`regular`}
          content={`Upload your existing card, or create a virtual one`}
          additionalClasses={`text-lg text-[#777777]`}
        />
      </View>
      <View>
        <ComponentSwitcher components={screens} />
      </View>
    </SafeAreaContainer>
  );
}
