import { View, Text, SafeAreaView } from "react-native";
import React from "react";

export default function RegisterScreen() {
  return (
    <SafeAreaView className="bg-[#F5F7FF] flex-1">
      <View className="p-5">
        <View className="pt-10">
          <Text className="text-[#183a37] font-bold text-3xl">Welcome to OmniWallet</Text>
          <Text className="text-[#777777] text-xl">Hey there! create an account to get started.</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
