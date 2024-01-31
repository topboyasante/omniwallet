import React from "react";
import { View } from "react-native";
import BackButton from "../../../../components/ui/BackButton";
import SafeAreaContainer from "../../../../components/ui/SafeAreaContainer";
import CustomTextComponent from "../../../../components/ui/Text";
import NewInvestmentForm from "../../../../components/screen-components/investments/NewInvestmentForm";


export default function CreateInvestmentScreen() {
  return (
    <SafeAreaContainer>
      <View>
        <BackButton />
        <View>
          <CustomTextComponent
            type={`semibold`}
            content={`Create a Investment`}
            additionalClasses={`text-xl`}
          />
          <CustomTextComponent
            type={`regular`}
            content={`Invest your money for quick returns`}
            additionalClasses={`text-lg text-[#777777]`}
          />
        </View>
      </View>
      <View>
        <NewInvestmentForm/>
      </View>
    </SafeAreaContainer>
  );
}
