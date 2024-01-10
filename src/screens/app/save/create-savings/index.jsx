import { View, Text } from "react-native";
import React from "react";
import SafeAreaContainer from "../../../../components/ui/SafeAreaContainer";
import BackButton from "../../../../components/ui/BackButton";

export default function CreateSavingsScreen() {
  return (
    <SafeAreaContainer>
      <BackButton />
      <View>
        <Text>CreateSavingsScreen</Text>
      </View>
    </SafeAreaContainer>
  );
}
