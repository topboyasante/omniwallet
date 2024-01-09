import React from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import CustomTextComponent from "../../ui/Text";
import CustomTextInput from "../../ui/TextInput";

export default function VirtualCardForm() {
  return (
    <ScrollView>
      <View className="p-5">
        <View className="mb-5">
          <CustomTextComponent
            type={"semibold"}
            content={`Full Name`}
            additionalClasses={`text-xl`}
          />
          <CustomTextInput placeholder={`Bill Gates`} />
        </View>
        <View className="mb-5">
          <CustomTextComponent
            type={"semibold"}
            content={`Account Type`}
            additionalClasses={`text-xl`}
          />
          <CustomTextInput placeholder={`Bill Gates`} />
        </View>
        <TouchableOpacity className="bg-black px-4 py-2 rounded-md">
          <CustomTextComponent
            type={"bold"}
            content={`Submit`}
            additionalClasses={`text-white text-center text-lg`}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
