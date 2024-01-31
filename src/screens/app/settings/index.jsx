import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import SafeAreaContainer from "../../../components/ui/SafeAreaContainer";
import CustomTextComponent from "../../../components/ui/Text";

export default function SaveScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaContainer>
      <View>
        <View className="flex flex-row justify-between items-center mb-5">
          <CustomTextComponent
            type={`semibold`}
            content={`Settings`}
            additionalClasses={`text-xl`}
          />
        </View>
        <View>
        </View>
      </View>
    </SafeAreaContainer>
  );
}
